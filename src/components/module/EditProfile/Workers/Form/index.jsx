import { useEffect, useState } from "react";
import Accordion from "../../../Accordion";
import Personal from "./Personal";
import Skill from "./Skill";
import { getApi } from "../../../../../utils/get/get";
import PropTypes from "prop-types";
import Experience from "./Experience";
import AddPortofolio from "./Portofolio";

const Form = ({ handleEdit, loading, handleChange, activeUser, skills }) => {
   const [myExperience, setMyExperience] = useState();
   const [accordion, setAccordion] = useState(1);

   const getExperience = async () => {
      try {
         const response = await getApi("experience");
         if (response?.data?.statuCode === 201) {
            setMyExperience(response?.data?.data);
         }
      } catch (error) {
         console.log(error);
      }
   };

   const handleAccordion = (idx) =>
      setAccordion((prevIdx) => (prevIdx === idx ? 0 : idx));
   const items = [
      {
         title: "Data Diri",
         element: (
            <Personal
               myData={activeUser}
               handleChange={handleChange}
               handleEdit={handleEdit}
               loading={loading}
            />
         ),
      },
      {
         title: "Skill",
         element: <Skill mySkill={skills} />,
      },
      {
         title: "Pengalaman Kerja",
         element: (
            <Experience
               experience={myExperience}
               getExperience={getExperience}
            />
         ),
      },
      {
         title: "Portofolio",
         element: <AddPortofolio />,
      },
   ];

   useEffect(() => {
      getExperience();
   }, []);

   return (
      <div className="font-OpenSans bg-white md:absolute md:-top-32 md:right-6 md:w-[400px] md:rounded-md lg:w-[60%] lg:rounded-md">
         {items?.map((item, idx) => (
            <div key={idx} className="w-full flex flex-col cursor-pointer">
               <div
                  onClick={() => handleAccordion(idx + 1)}
                  className={`${
                     open === idx
                        ? "py-3 border-b border-b-gray-200 flex bg-white w-full justify-between px-4 items-center"
                        : "py-3 border-b border-b-gray-200 flex bg-white w-full justify-between px-4 items-center"
                  }`}>
                  <p className="font-semibold text-[22px]">{item?.title}</p>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className={`${
                        accordion !== idx + 1 ? "w-6 h-6" : "w-6 h-6 rotate-180"
                     } transition-transform`}>
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                     />
                  </svg>
               </div>
               <Accordion open={accordion} idx={idx + 1}>
                  {item?.element}
               </Accordion>
            </div>
         ))}
      </div>
   );
};

export default Form;
Form.propTypes = {
   myData: PropTypes.object,
   handleEdit: PropTypes.func,
   loading: PropTypes.bool,
   handleChange: PropTypes.func,
   activeUser: PropTypes.object,
   skills: PropTypes.array,
};
