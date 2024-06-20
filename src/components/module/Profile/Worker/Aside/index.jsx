import { useState } from "react";
import Portofolio from "./Portofolio";
import WorkExperience from "./WorkExperience";

const Aside = ({ detailProfile }) => {
  const [isActive, setIsActive] = useState(0);
  const items = [
    { title: "Portofolio", routeFetch: "/" },
    { title: "Pengalaman Kerja", routeFetch: "/" },
  ];
  return (
    <div className="bg-white h-full w-full lg:w-[753px] rounded px-5 py-1">
      <div className="flex gap-8 py-3">
        {items?.map((item, idx) => (
          <p
            onClick={() => setIsActive(idx)}
            key={idx}
            className={`${
              isActive === idx
                ? "text-black border-b-2 border-b-primary"
                : "text-gray-300 border-b-0"
            } font-semibold text-[20px] cursor-pointer transition-all duration-200`}
          >
            {item?.title}
          </p>
        ))}
      </div>
      {isActive === 0 ? (
        <Portofolio portofolio={detailProfile?.portofolio} />
      ) : (
        <WorkExperience experiences={detailProfile?.experience} />
      )}
    </div>
  );
};

export default Aside;
