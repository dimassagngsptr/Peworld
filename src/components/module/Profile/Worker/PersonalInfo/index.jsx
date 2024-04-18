import ModalDialog from "../../../Dialog";
import Images from "../../../../base/image";
import EditPhotos from "../../../EditProfile/Workers/ProfileInformation/EditPhoto";
import Button from "../../../../base/Button";
import { useLocation, useNavigate } from "react-router-dom";
const PersonalInformation = ({ sampleImg }) => {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   console.log(pathname);
   return (
      <div className="bg-white h-[900px] w-[357px] rounded px-5 py-4">
         <div className="flex justify-center">
            <ModalDialog
               btn={
                  <Images
                     img={sampleImg}
                     className={`rounded-full max-w-[150px] max-h-[150px]`}
                  />
               }
               content={<EditPhotos />}
               btnSubmit={
                  <Button
                     title={"Simpan"}
                     className={
                        "bg-primary text-white py-1.5 px-3 rounded-md font-OpenSans"
                     }
                  />
               }
               title={"Update Photo"}
            />
         </div>

         <div className="flex flex-col gap-2 my-8">
            <div className="flex flex-col gap-2">
               <h2 className="font-semibold text-[22px]">Louis tomlinson</h2>
               <small>Web Developer</small>
               <div className="flex gap-2 items-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="rgb(107 114 128)"
                     className="w-4 h-4">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                     />
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                     />
                  </svg>
                  <p className="text-gray-500">Bandung</p>
               </div>
               <p className="text-gray-500">Frelancer</p>
            </div>
            <p className="my-2 text-gray-500">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
               Curabitur eu lacus fringilla, vestibulum risus at.
            </p>
            <Button
               title={"Hire"}
               className={`bg-primary text-white py-4 my-4 rounded`}
               btnFunction={() => navigate(`${pathname}/edit`)}
            />
         </div>
         <div className="flex flex-col gap-4">
            <div className="my-4">
               <h1 className="text-xl font-semibold">Skill</h1>
               <div className="flex flex-wrap gap-x-2 gap-y-0">
                  <Button
                     title={"PHP"}
                     className={`bg-btn/70 border border-btn text-white py-1 px-4 my-4 rounded`}
                  />
                  <Button
                     title={"Javascript"}
                     className={`bg-btn/70 border border-btn text-white py-1 px-4 my-4 rounded`}
                  />
                  <Button
                     title={"Python"}
                     className={`bg-btn/70 border border-btn text-white py-1 px-4 my-4 rounded`}
                  />
                  <Button
                     title={"Golang"}
                     className={`bg-btn/70 border border-btn text-white py-1 px-4 my-4 rounded`}
                  />
                  <Button
                     title={"HTML"}
                     className={`bg-btn/70 border border-btn text-white py-1 px-4 my-4 rounded`}
                  />
                  <Button
                     title={"React"}
                     className={`bg-btn/70 border border-btn text-white py-1 px-4 my-4 rounded`}
                  />
               </div>
            </div>
            <div className="flex gap-5 my-6">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#9EA0A5"
                  className="w-6 h-6">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
               </svg>
               <p className="text-gray-500">dimas@gmail.com</p>
            </div>
         </div>
      </div>
   );
};

export default PersonalInformation;
