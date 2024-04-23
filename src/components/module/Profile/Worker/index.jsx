import { useDispatch, useSelector } from "react-redux";
import sampleImg from "../../../../assets/images/landing-page/testimonial_1.png";
import Aside from "./Aside";
import PersonalInformation from "./PersonalInfo";
import { useEffect } from "react";
import { getSkills } from "../../../../config/Redux/features/users/userSlice";
const ProfileWorker = () => {
  const dispatch = useDispatch();
  const { activeUser, skills } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getSkills());
  }, []);
  return (
    <section className="h-[1250px] bg-gray-200 font-OpenSans">
      <div className="bg-primary h-[30%] relative w-full">
        <div className="absolute top-0 flex flex-col gap-10 lg:flex-row w-full lg:px-16 lg:top-16 justify-between">
          <PersonalInformation
            sampleImg={sampleImg}
            activeUser={activeUser}
            skills={skills?.data}
          />
          <Aside />
        </div>
      </div>
    </section>
  );
};

export default ProfileWorker;
