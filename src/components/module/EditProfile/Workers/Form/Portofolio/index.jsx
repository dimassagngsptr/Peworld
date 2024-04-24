import { useEffect } from "react";
import Input from "../../../../../base/Input";
import cloud from "../../../../../../assets/images/edit-pekerja/Vector.svg";
import photo_1 from "../../../../../../assets/images/edit-pekerja/photo_1.svg";
import expand_2 from "../../../../../../assets/images/edit-pekerja/expand 2.svg";
import Button from "../../../../../base/Button";
import { useDispatch, useSelector } from "react-redux";
import {
   setFileReader,
   singgleFile,
} from "../../../../../../config/Redux/features/file/fileSlice";
import {
   addPortofolio,
   setAddData,
   setApplication,
} from "../../../../../../config/Redux/features/worker/portofolioSlice";
import Spinner from "../../../../../base/Button/Spinner";
import { toastify } from "../../../../../base/Toastify";
const AddPortofolio = () => {
   const { fileReader, data, loading } = useSelector((state) => state.file);
   const { addData, loading: load } = useSelector((state) => state.portofolio);
   const dispatch = useDispatch();
   const typePortofolio = [
      { title: "Aplikasi mobile", value: "Aplikasi Mobile" },
      { title: "Aplikasi web", value: "Aplikasi Web" },
   ];
   const handleChangePortofolio = (e) => {
      dispatch(
         setAddData({
            name: e?.target?.name,
            value: e?.target?.value,
            file_url: data?.data?.file_url,
         })
      );
   };
   const handleChangeImage = (e) => {
      const file = e?.target?.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = function (e) {
            dispatch(setFileReader(e.target.result));
            dispatch(singgleFile(file));
         };
         reader.readAsDataURL(file);
      }
   };
   const handleAddPortofolio = async () => {
      try {
         const response = await dispatch(addPortofolio()).unwrap();
         toastify("success", response?.message);
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      handleChangePortofolio();
   }, [data?.data?.file_url]);
   return (
      <section>
         <div className="flex flex-col gap-4">
            <Input
               label={"Nama Aplikasi"}
               className="border border-gray-200 outline-none py-2 px-3 h-12"
               placeholder="Masukan nama Aplikasi"
               style="text-gray-500 font-OpenSans"
               type="text"
               name="application_name"
               value={addData?.application_name}
               onChange={handleChangePortofolio}
            />
            <Input
               label={"Link Repository"}
               className="border border-gray-200 outline-none py-2 px-3 h-12"
               placeholder="Masukan Link Repository"
               style="text-gray-500 font-OpenSans"
               type="text"
               name="link_repository"
               value={addData?.link_repository}
               onChange={handleChangePortofolio}
            />
            <div>
               <p className="text-gray-500 mb-2">Type portofolio</p>
               <div className="flex gap-2">
                  {typePortofolio?.map((item, idx) => (
                     <div
                        className={`flex items-center gap-4 ${
                           addData?.application === item?.value
                              ? "border border-gray-300 rounded"
                              : "border-none"
                        } py-2 px-4`}
                        onClick={() => dispatch(setApplication(item?.value))}
                        key={idx}>
                        <Input
                           type="radio"
                           checked={addData?.application === item?.value}
                           className={`cursor-pointer ${
                              addData?.application === item?.value
                                 ? "bg-blue-500"
                                 : ""
                           }`}
                        />
                        <label htmlFor={item.value} className="cursor-pointer">
                           {item.title}
                        </label>
                     </div>
                  ))}
               </div>
               <div className="mt-5 font-OpenSans pb-12 border-b border-gray-300">
                  <p className="text-gray-500 mb-2">Upload gambar</p>
                  <div
                     className="relative border-2 rounded border-dashed border-gray-300 h-[350px] w-full"
                     style={{
                        backgroundImage: `url(${fileReader})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: loading ? 0.5 : 1,
                     }}>
                     {loading && (
                        <div className="absolute text-primary top-1/2 left-1/2">
                           <Spinner black={true} />
                        </div>
                     )}
                     <div className="absolute justify-center h-full flex flex-col gap-3 items-center w-full">
                        <Input
                           name="file"
                           onChange={handleChangeImage}
                           type="file"
                           placeholder="masukan file"
                           className="w-full left-0 top-0 bg-transparent opacity-0 h-[350px] absolute z-10 cursor-pointer"
                        />
                        {!fileReader && (
                           <>
                              <img src={cloud} alt="" loading="lazy" />
                              <p className="text-gray-500">
                                 Drag & Drop untuk Upload Gambar Aplikasi Mobile
                              </p>
                              <p className="text-xs text-gray-500">
                                 Atau cari untuk mengupload file dari
                                 direktorimu.
                              </p>
                              <div className="flex gap-5 w-[350px] mt-10">
                                 <div className="flex items-center gap-2">
                                    <img src={photo_1} alt="" loading="lazy" />
                                    <p className="text-xs">
                                       High-Res Image PNG, JPG or GIF
                                    </p>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <img src={expand_2} alt="" loading="lazy" />
                                    <p className="text-xs">
                                       Size 1080x1920 or 600x800
                                    </p>
                                 </div>
                              </div>
                           </>
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <Button
               disabled={load}
               btnFunction={handleAddPortofolio}
               title={!load ? "Tambah portofolio" : <Spinner purple={false} />}
               className={
                  "w-full py-2 border border-btn mt-12 text-btn font-semibold rounded hover:bg-btn hover:text-white transition duration-300"
               }
            />
         </div>
      </section>
   );
};

export default AddPortofolio;
