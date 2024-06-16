import Image from "../../../base/image";
import img from "../../../../assets/images/landing-page/testimonial_1.png";
import Button from "../../../base/Button";
import instagram from "../../../../assets/images/portofolio/instagram.svg";
import linkedin from "../../../../assets/images/portofolio/linkedin 1.svg";
import mail from "../../../../assets/images/portofolio/mail (4).svg";
import phone from "../../../../assets/images/portofolio/phone 1.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileRecruiter = () => {
  const navigate = useNavigate();
  const { activeUser, skills } = useSelector((state) => state.user);
  console.log(activeUser);
  const items = [
    {
      icon: mail,
      title: activeUser?.email,
    },
    { icon: instagram, title: activeUser?.instagram || "Instagram.com" },
    {
      icon: phone,
      title: activeUser?.phone,
    },
    { icon: linkedin, title: activeUser?.linkedin || "Linkedin.com" },
  ];
  return (
    <section className="bg-gray-200 h-[100%] py-20 font-OpenSans">
      <div className="relative mx-auto w-[90%] rounded-b bg-white h-[900px]">
        <div className=" bg-primary h-[205px] rounded-t"></div>
        <div className="absolute flex flex-col gap-5 px-4 top-24 right-0 items-center w-full">
          <div className="flex justify-center lg:justify-between items-center w-3/4">
            <div className="hidden lg:block lg:w-[10%]"></div>
            <Image img={activeUser?.photo} className="w-[150px] h-[150px]" />
            <div className="absolute -top-20 right-6 lg:static flex gap-2 text-white items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffff"
                className="w-5 h-5"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
              </svg>
              <p>Ubah latar</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center w-3/5 text-gray-500">
            <h1 className="font-semibold text-[22px] text-black">
              {activeUser?.company}
            </h1>
            <p className="text-black">{activeUser?.position}</p>
            <div className="flex gap-2 justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="rgb(107 114 128)"
                className="w-6 h-6"
              >
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
              <p>{activeUser?.city || "Location"}</p>
            </div>
            <p className="text-sm lg:text-normal">
      {activeUser?.description || "description"}
            </p>
            <Button
              className={
                "bg-primary text-white w-full lg:w-1/2 mx-auto py-3 rounded font-semibold my-5"
              }
              title={"Edit Profile"}
              btnFunction={() => navigate(`/recruiter/edit-profile`)}
            />
            <div className="flex flex-col gap-5 mx-auto">
              {items?.map(({ icon, title }, idx) => (
                <div className="flex gap-3 text-gray-500" key={idx}>
                  <img src={icon} alt="" loading="lazy" />
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileRecruiter;
