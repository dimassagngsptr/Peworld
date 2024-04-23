import { useState } from "react";
import Input from "../../../../../base/Input";

const AddPortofolio = () => {
   const [isChecked, setIsChecked] = useState("Aplikasi mobile");
   const typePortofolio = [
      { title: "Aplikasi mobile", value: "Aplikasi mobile" },
      { title: "Aplikasi web", value: "Aplikasi web" },
   ];
   return (
      <section>
         <div className="flex flex-col gap-4">
            <Input
               label={"Nama Aplikasi"}
               className="border border-gray-200 outline-none py-2 px-3 h-12"
               placeholder="Masukan nama Aplikasi"
               style="text-gray-500 font-OpenSans"
               type="text"
            />
            <Input
               label={"Link Repository"}
               className="border border-gray-200 outline-none py-2 px-3 h-12"
               placeholder="Masukan Link Repository"
               style="text-gray-500 font-OpenSans"
               type="text"
            />
            <div>
               <p className="text-gray-500 mb-2">Type portofolio</p>
               <div className="flex gap-2">
                  {typePortofolio?.map((item, idx) => (
                     <div
                        className={`flex items-center gap-4 ${
                           isChecked === item?.value
                              ? "border border-gray-300 rounded"
                              : "border-none"
                        } py-2 px-4`}
                        onClick={() => setIsChecked(item?.value)}
                        key={idx}>
                        <Input
                           type="radio"
                           checked={isChecked === item?.value}
                           value={item?.value}
                           className={`cursor-pointer ${
                              isChecked === item?.value ? "bg-blue-500" : ""
                           }`}
                        />
                        <label htmlFor={item.value} className="cursor-pointer">
                           {item.title}
                        </label>
                     </div>
                  ))}
               </div>
               <div className="mt-5">
                  <p className="text-gray-500 mb-2">Upload gambar</p>
                  <div className="relative border-2 rounded border-dashed border-gray-300 h-[350px] w-full">
                     <div className="absolute flex flex-col gap-3 items-center w-full">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="rgb(209 213 219 )"
                           className="w-44 h-44">
                           <path
                              fillRule="evenodd"
                              d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AddPortofolio;
