import { useSelector } from "react-redux";
import companyImg from "../../../../../../assets/company.png";
import { useParams } from "react-router-dom";
const WorkExperience = ({ experiences }) => {
  const { experience } = useSelector((state) => state.user);
  const { id } = useParams();
  return (
    <div className="flex flex-col">
      {id ? (
        experiences?.length > 0 ? (
          experiences?.map((item) => (
            <div className="flex gap-5 py-4 px-4" key={item?.id}>
              <div className="max-w-[50px] max-h-[50px] py-5">
                <img src={companyImg} loading="lazy" />
              </div>
              <div
                className={`${
                  item?.id === 1
                    ? "border-none"
                    : "border-t-2 border-t-gray-200 py-3"
                } flex flex-col gap-3`}
              >
                <div>
                  <h1 className="font-semibold">{item?.position}</h1>
                  <p>{item?.company}</p>
                  <p className="text-gray-400">
                    {item?.work_month} {item?.work_year}
                  </p>
                </div>
                <p>{item?.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="h-[150px] py-4">
            <h1 className="text-2xl md:text-sm font-semibold">
              This worker does not have a experience yet
            </h1>
          </div>
        )
      ) : (
        experience?.data?.map((item) => (
          <div className="flex gap-5 py-4 px-4" key={item?.id}>
            <div className="max-w-[50px] max-h-[50px] py-5">
              <img src={companyImg} loading="lazy" />
            </div>
            <div
              className={`${
                item?.id === 1
                  ? "border-none"
                  : "border-t-2 border-t-gray-200 py-3"
              } flex flex-col gap-3`}
            >
              <div>
                <h1 className="font-semibold">{item?.position}</h1>
                <p>{item?.company}</p>
                <p className="text-gray-400">
                  {item?.work_month} {item?.work_year}
                </p>
              </div>
              <p>{item?.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WorkExperience;
