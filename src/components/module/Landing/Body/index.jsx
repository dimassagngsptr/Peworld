import PropTypes from "prop-types";
import purpleCheck from "../../../../assets/images/landing-page/purple-check.svg";
import orangeCheck from "../../../../assets/images/landing-page/orange-check.svg";
import whyPeworldImg from "../../../../assets/images/landing-page/landing-page_2.png";
import skillPewordImg from "../../../../assets/images/landing-page/landing-page_3.png";
const ListBody = ({ items, landingImg, flex, gridCols, children }) => {
   return (
      <div className={`${flex} md:flex md:items-start md:gap-[20px] md:pt-5`}>
         <img
            src={landingImg}
            alt="img"
            className="hidden md:block md:max-w-[60%] md:h-full md:object-cover"
         />
         <div className="grid grid-cols-2 gap-4 py-5 md:py-0 md:flex md:flex-col md:justify-between md:mt-6">
            <h1 className="hidden md:block md:font-semibold md:text-[30px] md:ml-5">
               {children}
            </h1>
            <div
               className={`grid ${gridCols} mx-auto md:gap-5 w-[90vw] px-5 md:w-[100%]`}>
               {items?.map((item, idx) => (
                  <div
                     className="flex items-center gap-2 py-2 md:py-0"
                     key={idx}>
                     <img src={item?.icon} alt="icon" />
                     <h2 className="font-normal text-[14px] lg:text-[16px] leading-6">
                        {item?.title}
                     </h2>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
ListBody.propTypes = {
   items: PropTypes.array,
   landingImg: PropTypes.string,
   flex: PropTypes.string,
   gridCols: PropTypes.string,
   children: PropTypes.array || undefined,
};
const Body = () => {
   const items = [
      { title: "Terpercaya", icon: purpleCheck },
      { title: "Berkualitas", icon: purpleCheck },
      { title: "Standar Industri", icon: purpleCheck },
      { title: "Berpengalaman", icon: purpleCheck },
   ];
   const skills = [
      { title: "Java", icon: orangeCheck },
      { title: "Kotlin", icon: orangeCheck },
      { title: "PHP", icon: orangeCheck },
      { title: "Javascript", icon: orangeCheck },
      { title: "Golang", icon: orangeCheck },
      { title: "C++", icon: orangeCheck },
      { title: "Ruby", icon: orangeCheck },
      { title: "10+ Bahasa lainnya", icon: orangeCheck },
   ];
   return (
      <>
         <section className="mt-12 py-3 px-[8%] font-OpenSans">
            <h1 className="font-semibold text-[22px] ml-5 w-[90%] md:hidden">
               Kenapa <span className="text-primary">harus</span> mencari
               tallent di <span className="text-primary">Peworld</span>.
            </h1>
            <ListBody
               items={items}
               landingImg={whyPeworldImg}
               flex="flex-row"
               gridCols="grid-cols-2 md:grid-cols-1">
               {" "}
               Kenapa <span className="text-primary">harus</span> mencari
               tallent di <span className="text-primary">Peworld</span>
            </ListBody>
         </section>
         <section className="mt-12 py-3 px-[8%] font-OpenSans">
            <h1 className="md:hidden text-[22px] font-semibold lg:text-[22px] ml-5 w-[90%]  text-start">
               <span className="text-btn">Skill</span> Tallent
            </h1>
            <p className="md:hidden text-[12px] text-start ml-5">
               Tallent kami memiliki skill yang bervariasi dan mumpuni serta
               sesuai dengan standar industri.
            </p>
            <ListBody
               items={skills}
               landingImg={skillPewordImg}
               flex="flex-row-reverse"
               gridCols="grid-cols-2">
               {" "}
               Skill <span className="text-primary">Talent</span>
               <small className="hidden md:inline-block md:text-[12px] md:text-gray-500 lg:text-[16px]">
                  Tallent kami memiliki skill yang bervariasi dan mumpuni serta
                  sesuai dengan standar industri.
               </small>
            </ListBody>
         </section>
      </>
   );
};

export default Body;
