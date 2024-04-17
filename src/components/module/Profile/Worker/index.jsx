import sampleImg from "../../../../assets/images/landing-page/testimonial_1.png";
import Aside from "./Aside";
import PersonalInformation from "./PersonalInfo";
const ProfileWorker = () => {
   return (
      <section className="h-[1250px] bg-gray-200 font-OpenSans">
         <div className="bg-primary h-[30%] relative w-full">
            <div className="absolute flex w-full px-16 top-16 justify-between">
               <PersonalInformation sampleImg={sampleImg} />
               <Aside />
            </div>
         </div>
      </section>
   );
};

export default ProfileWorker;
