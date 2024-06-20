import { useSelector } from "react-redux";
import sampleImg from "../../../../assets/images/landing-page/testimonial_1.png";
import Aside from "./Aside";
import PersonalInformation from "./PersonalInfo";
import { getApi } from "../../../../utils/get/get";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ProfileWorker = () => {
  const { activeUser, skills } = useSelector((state) => state.user);
  const { id } = useParams();
  const [detailProfile, setDetailProfile] = useState({
    profile: [],
    skill: [],
    experience: [],
    portofolio: [],
  });
  const getDetailWorker = async () => {
    try {
      const profilePromise = getApi(`workers/${id}`);
      const skillPromise = getApi(`skills/${id}`);
      const experiencePromise = getApi(`experience/${id}`);
      const portofolioPromise = getApi(`portfolio/${id}`);

      const [profile, skill, experience, portofolio] = await Promise.all([
        profilePromise,
        skillPromise,
        experiencePromise,
        portofolioPromise,
      ]);
      setDetailProfile((prevDetailProfile) => ({
        ...prevDetailProfile,
        profile: profile?.data?.data,
        skill: skill?.data?.data,
        experience: experience?.data?.data,
        portofolio: portofolio?.data?.data,
      }));
    } catch (error) {
      console.error("Error fetching detail worker data:", error);
    }
  };
  useEffect(() => {
    if (id) {
      getDetailWorker();
    }
  }, [id]);
  return (
    <section className="h-[1250px] bg-gray-200 font-OpenSans">
      <div className="bg-primary h-[30%] relative w-full">
        <div className="absolute top-0 flex flex-col gap-10 lg:flex-row w-full lg:px-36 lg:top-16 justify-between">
          <PersonalInformation
            sampleImg={sampleImg}
            activeUser={id ? detailProfile?.profile : activeUser}
            skills={id ? detailProfile?.skill : skills?.data}
            hire
            email
          />
          <Aside detailProfile={detailProfile} />
        </div>
      </div>
    </section>
  );
};

export default ProfileWorker;
