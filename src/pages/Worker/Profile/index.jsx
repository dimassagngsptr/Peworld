import ProfileWorker from "../../../components/module/Profile/Worker";
import Home from "../../Home";

const ProfilePage = () => {
   return (
      <>
         <Home footer={true}>
            <ProfileWorker />
         </Home>
      </>
   );
};

export default ProfilePage;
