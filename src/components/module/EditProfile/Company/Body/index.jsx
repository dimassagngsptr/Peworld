import { useEffect, useState } from "react";
import Accordion from "../../../Accordion";
import pin from "../../../../../assets/images/home-v1/map-pin (4) 1.svg";
import Form from "./Form";
import { put } from "../../../../../utils/update/edit";
import PropTypes from "prop-types";
import { toastify } from "../../../../base/Toastify";
import Spinner from "../../../../base/Button/Spinner";
import { useMediaQuery } from "react-responsive";
const Body = ({ profile, getProfile }) => {
   const tablet = useMediaQuery({ minWidth: 800 });
   const [value, setValue] = useState({
      company: "",
      bidang: "",
      linkedin: "",
      instagram: "",
      phone: "",
      description: "",
      email: "",
      city: "",
   });
   const handleChange = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
   };
   const items = [
      {
         title: "Data diri",
         element: <Form handleChange={handleChange} value={value} />,
      },
   ];
   const [load, setLoad] = useState(false);
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(!open);
   const [accordion, setAccordion] = useState(0);
   const handleAccordion = (idx) =>
      setAccordion((prevIdx) => (prevIdx === idx ? 0 : idx));
   const handleEdit = async () => {
      setLoad(true);
      try {
         const response = await put("recruiters/profile", value);
         toastify("success", response?.data?.message);
         getProfile();
         setAccordion(1);
      } catch (error) {
         console.log(error);
      } finally {
         setLoad(false);
      }
   };
   const handleCancle = () => {
      const newData = { ...value };
      for (let key in value) {
         if (Object.prototype.hasOwnProperty.call(profile, key)) {
            newData[key] = profile[key];
         }
      }
      setValue(newData);
      setTimeout(() => {
         setAccordion(0);
      }, 1000);
   };
   useEffect(() => {
      if (profile) {
         const newData = { ...value };
         for (let key in value) {
            if (Object.prototype.hasOwnProperty.call(profile, key)) {
               newData[key] = profile[key];
            }
         }
         setValue(newData);
      }
      if (tablet) {
         setOpen(true);
         setAccordion(1);
      }
   }, [profile, tablet]);

   return (
      <div
         className={`flex flex-col gap-3 ${
            open ? "h-[1200px]" : "h-[65vh]"
         } bg-gray-200 w-full px-2 py-3 font-OpenSans md:px-16 md:flex-row`}>
         <div className="bg-white h-[300px] px-5 py-4 w-full rounded flex flex-col gap-5 md:relative md:-top-28 lg:w-[40%] lg:py-5 lg:h-[330px]">
            <div className="flex flex-col items-center gap-3 ">
               <img
                  src={profile?.photo}
                  alt={`${profile?.name}`}
                  loading="lazy"
                  className="border-[2px] border-btn rounded-full min-h-[140px] min-w-[140px] md:min-h-[140px] md:min-w-[140px] lg:min-w-[150px] lg:min-h-[150px]"
               />
               <div className="flex gap-3 items-center">
                  <svg
                     onClick={handleOpen}
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
                  <small className="text-gray-500 text-[18px]">Edit</small>
               </div>
            </div>
            <div className="flex flex-col items-center gap-1">
               <p className="font-semibold">
                  {profile ? profile?.company : <Spinner purple={true} />}
               </p>
               <small className="text-gray-500 text-[14px]">
                  {profile ? profile?.email : <Spinner purple={true} />}
               </small>
               <div className="flex gap-2">
                  <img
                     src={pin}
                     alt=""
                     loading="lazy"
                     className={`${profile ? "block" : "hidden"}`}
                  />
                  <p className="text-gray-500">
                     {profile ? profile?.city : <Spinner purple={true} />}
                  </p>
               </div>
            </div>
            {accordion > 0 && (
               <div className="absolute w-[320px] md:w-[350px] flex flex-row md:flex-col gap-4 px-2 md:left-0 right-0 -bottom-[150px] md:-bottom-26 mx-auto ">
                  <button
                     disabled={load}
                     onClick={handleEdit}
                     className="font-bold bg-primary text-white transition duration-200 border border-primary w-[50%] md:w-full lg:w-full py-3 rounded">
                     {load ? <Spinner purple={false} /> : "Simpan"}
                  </button>
                  <button
                     onClick={handleCancle}
                     className="font-bold hover:bg-primary hover:text-white transition duration-200 border border-primary w-[50%] md:w-full lg:w-full py-3 rounded text-primary">
                     Batal
                  </button>
               </div>
            )}
         </div>
         <div
            className={`${
               open
                  ? "rounded-md w-full h-full"
                  : "h-0 overflow-hidden rounded-md md:w-0"
            } transition-all duration-500 md:relative md:-top-28`}>
            {items?.map((item, idx) => (
               <div key={idx} className="w-full flex flex-col cursor-pointer">
                  <div
                     onClick={() => handleAccordion(idx + 1)}
                     className={`${
                        open === idx
                           ? "py-3 border-b border-b-gray-200 flex bg-white w-full justify-between px-4 items-center"
                           : "py-3 border-b border-b-gray-200 flex bg-white w-full justify-between px-4 items-center"
                     }`}>
                     <p className="font-semibold text-[22px]">{item?.title}</p>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                           open !== idx ? "w-6 h-6" : "w-6 h-6 rotate-180"
                        } transition-transform`}>
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                     </svg>
                  </div>
                  <Accordion open={accordion} idx={idx + 1} title={item?.title}>
                     {item?.element}
                  </Accordion>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Body;
Body.propTypes = {
   profile: PropTypes.objectOf(PropTypes.string),
   getProfile: PropTypes.func,
};
