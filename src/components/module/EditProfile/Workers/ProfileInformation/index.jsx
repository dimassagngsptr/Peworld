import PropTypes from "prop-types";
import ModalDialog from "../../../Dialog";
import EditPhotos from "./EditPhoto";
import Button from "../../../../base/Button";
import { useState } from "react";
import { put } from "../../../../../utils/update/edit";
import { toastify } from "../../../../base/Toastify";

const ProfileInformation = ({ myProfile }) => {
   const [selectedImage, setSelectiedImage] = useState({
      bgImg: null,
      photo: null,
   });
   const handleChange = (e) => {
      const file = e?.target?.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = function (event) {
            setSelectiedImage({
               bgImg: event.target.result,
               photo: file,
            });
         };
         reader.readAsDataURL(file);
      }
   };
   const handleSubmit = async () => {
      try {
         let formData = new FormData();
         formData.append("photo", selectedImage?.photo);
         const response = await put("workers/profile/photo", formData);
         if (response?.data?.statuCode == 200) {
            toastify("success", response?.data?.message);
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="bg-white flex flex-col py-4 md:absolute md:h-[350px] md:-top-32 md:w-[340px] md:rounded-md lg:w-[35%]">
         <div className="flex flex-col items-center py-3 gap-2">
            <img
               src={myProfile?.photo}
               alt=""
               className="border-[3px] border-btn max-h-[150px] max-w-[150px] rounded-full"
            />
            <div className="flex gap-3 items-center">
               <ModalDialog
                  btn={
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#6b7280"
                        className="w-6 h-6 cursor-pointer">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                     </svg>
                  }
                  title={"Edit Foto"}
                  content={
                     <EditPhotos
                        handleChange={handleChange}
                        selectedImage={selectedImage?.bgImg}
                     />
                  }
                  btnSubmit={
                     <Button
                        title={"Simpan"}
                        className={
                           "bg-primary text-white py-1.5 px-3 rounded-md font-OpenSans"
                        }
                     />
                  }
                  onSubmit={handleSubmit}
               />
               <small className="text-gray-500 text-[18px]">Edit</small>
            </div>
         </div>
         <div className="flex flex-col px-5 gap-2 items-center">
            <p className="font-semibold text-[20px]">{myProfile?.name}</p>
            <small className="text-[14px]">{myProfile?.job_desk}</small>
            <div className="flex gap-2 text-gray-500">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
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
               <p>{myProfile?.domicile}</p>
            </div>
            <p className="text-gray-500">{myProfile?.workplace}</p>
         </div>
      </div>
   );
};

export default ProfileInformation;
ProfileInformation.propTypes = {
   myProfile: PropTypes.object,
   getMyProfile: PropTypes.func,
};
