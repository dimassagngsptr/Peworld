import Home from "../../Home";
import Header from "../../../components/module/EditProfile/Company/Header";
import Body from "../../../components/module/EditProfile/Company/Body";
import { useEffect, useState } from "react";
import { getApi } from "../../../utils/get/get";
const EditCompanyPage = () => {
   const [profile, setProfile] = useState();
   const getProfile = async () => {
      try {
         const response = await getApi("recruiters/profile");
         if (response?.data?.statuCode == 200) {
            setProfile(response?.data?.data);
         }
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      getProfile();
   }, []);
   return (
      <Home footer={true}>
         <Header title={"Edit Perusahaan"} />
         <Body profile={profile} getProfile={getProfile} />
      </Home>
   );
};

export default EditCompanyPage;
