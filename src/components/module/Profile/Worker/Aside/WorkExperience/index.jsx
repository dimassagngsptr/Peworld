import companyImg from "../../../../../../assets/company.png";
const WorkExperience = () => {
   return (
      <div className="flex flex-col">
         {Array.from(new Array(4)).map((_, idx) => (
            <div className="flex gap-5 py-4 px-4" key={idx}>
               <div className="max-w-[50px] max-h-[50px] py-5">
                  <img src={companyImg} loading="lazy" />
               </div>
               <div
                  className={`${
                     idx === 0
                        ? "border-none"
                        : "border-t-2 border-t-gray-200 py-3"
                  } flex flex-col gap-3`}>
                  <div>
                     <h1 className="font-semibold">Engineer</h1>
                     <p>Tokopedia</p>
                     <p className="text-gray-400">July 2019</p>
                  </div>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vestibulum erat orci, mollis nec gravida sed, ornare quis
                     urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default WorkExperience;
