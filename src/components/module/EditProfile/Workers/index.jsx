import ProfileInformation from "./ProfileInformation";
import Form from "./Form";
import { useEffect, useState } from "react";
import { getApi } from "../../../../utils/get/get";
import { toastify } from "../../../base/Toastify";
import { put } from "../../../../utils/update/edit";
const EditWorkers = () => {
   const [loading, setLoading] = useState(false);
   const [myProfile, setMyProfile] = useState();
   const [myData, setMyData] = useState({
      name: "",
      job_desk: "",
      domicile: "",
      workplace: "",
      description: "",
   });
   const handleChange = (e) => {
      setMyData({ ...myData, [e?.target?.name]: e?.target?.value });
   };

   const getMyProfile = async () => {
      try {
         const response = await getApi("workers/profile");
         if (response?.data?.statuCode === 200) {
            setMyData(response?.data?.data);
            setMyProfile(response?.data?.data);
         }
      } catch (error) {
         console.log(error);
      }
   };
   const handleEdit = async () => {
      setLoading(true);
      try {
         const response = await put("workers/profile", myData);
         toastify("success", response?.data?.message);
         getMyProfile();
      } catch (error) {
         toastify("error", error?.data?.message);
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getMyProfile();
   }, []);
   return (
      <section className="flex flex-col md:flex-row md:relative py-4 px-2 gap-3 w-full bg-gray-200 h-screen lg:h-[1000px] lg:px-4">
         <ProfileInformation myProfile={myProfile} />
         <Form
            myData={myData}
            handleEdit={handleEdit}
            handleChange={handleChange}
            loading={loading}
            setMyData={setMyData}
         />
      </section>
   );
};

export default EditWorkers;
