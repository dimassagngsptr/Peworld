import ModalDialog from "../../../Dialog";
import Images from "../../../../base/image";
import EditPhotos from "../../../EditProfile/Workers/ProfileInformation/EditPhoto";
import Button from "../../../../base/Button";
import { useNavigate } from "react-router-dom";
const PersonalInformation = ({ activeUser, skills, hire, email }) => {
  const navigate = useNavigate();
  const role = activeUser?.role;
  return (
    <div className="bg-white flex flex-col items-center lg:items-start md:h-[700px] lg:min-h-[950px] w-full lg:w-[357px] rounded lg:px-5 py-4">
      <div className="flex justify-center w-full">
        {role !== "worker" ? (
          <Images
            img={activeUser?.photo}
            className={`border-2 p-2 border-btn rounded-full w-[100px] md:w-[200px] h-[100px] md:h-[200px] lg:w-[150px] lg:h-[150px]`}
          />
        ) : (
          <ModalDialog
            btn={
              <Images
                img={activeUser?.photo}
                className={`border-2 p-2 border-btn rounded-full w-[100px] md:w-[200px] h-[100px] md:h-[200px] lg:w-[150px] lg:h-[150px]`}
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
        )}
      </div>
      <div className="flex flex-col w-3/4 lg:w-full lg:gap-2 lg:my-8">
        <div className="flex flex-col gap-2 text-center md:text-start">
          <h2 className="font-semibold text-[22px]">{activeUser?.name}</h2>
          <small className="text-lg md:text-start">
            {activeUser?.job_desk}
          </small>
          <div className="flex flex-col justify-center md:items-start gap-3 md:flex-col lg:flex-col">
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="rgb(107 114 128)"
                className="w-4 h-4"
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
              <p className="text-gray-500">{activeUser?.domicile}</p>
            </div>
            <p className="text-gray-500">{activeUser?.workplace}</p>
          </div>
        </div>
        <p className="my-2 text-gray-500 text-justify px-3">{activeUser?.description}</p>
        {hire && (
          <Button
            title={role ? "Edit Profile" : "Hire"}
            className={`bg-primary text-white py-4 my-4 rounded w-full`}
            btnFunction={() =>
              navigate(
                role ? "/worker/edit-profile" : `/worker/hire/${activeUser?.id}`
              )
            }
          />
        )}
      </div>
      <div className="flex flex-col w-3/4 lg:w-full gap-4">
        <div className="lg:my-4">
          <h1 className="text-xl font-semibold">Skill</h1>
          <div className="flex flex-wrap gap-x-2 gap-y-0">
            {skills?.map(({ skill_name, id }) => (
              <Button
                key={id}
                title={skill_name}
                className={`bg-btn/70 border border-btn text-white py-1 px-4 my-1 rounded`}
              />
            ))}
          </div>
        </div>
        {email && (
          <div className="flex gap-5 lg:my-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#9EA0A5"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p className="text-gray-500">{activeUser?.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;
