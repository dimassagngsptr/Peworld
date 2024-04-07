import PropTypes from "prop-types";
import Card from "../../Card";
import searchIcon from "../../../../assets/images/home-v1/search (1) 1.svg";
import pin from "../../../../assets/images/home-v1/map-pin (4) 1.svg";
import Input from "../../../base/Input";
import Button from "../../../base/Button";
import Spinner from "../../../base/Button/Spinner";
const Body = ({
   worker,
   currentPage,
   totalPage,
   handlePagination,
   load,
   handleNextPrev,
}) => {
   return (
      <div className="bg-gray-200 h-[100%] flex flex-col gap-14 py-14 px-[2%] md:px-[10%]">
         <div className="bg-white h-[70px] rounded-md flex justify-between px-2 py-2 w-full lg:flex">
            <Input
               type="text"
               placeholder="Search for any skill"
               className="outline-none border-none h-full lg:w-[730px]"
            />
            <div className="flex items-center gap-3 w-[52%]">
               <button>
                  <img src={searchIcon} />
               </button>
               <span className="bg-gray-300 h-[80%] w-1"></span>
               <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Kategori"
                  className="w-[60%] h-full outline-none border-none"
               />
               <Button
                  title={"Search"}
                  className="bg-primary h-full px-3 text-white rounded-md"
               />
            </div>
         </div>
         <div className="grid grid-cols-2 gap-3 mx-auto md:grid-cols-3 lg:grid-cols-4">
            {worker?.length > 0 && load === false ? (
               worker?.map((item, idx) => (
                  <div key={idx}>
                     <Card
                        job={item?.job_desk}
                        img={item?.photo}
                        btnTitle={"Lihat Profile"}
                        location={item?.domicile}
                        icon={pin}
                        skill={item?.skills}
                        name={item?.name}
                        className={"max-w-[150px] max-h-[150px] rounded-full"}
                     />
                  </div>
               ))
            ) : (
               <Spinner />
            )}
         </div>
         <div className="flex gap-3 justify-center">
            {totalPage > 0 &&
               Array.from({ length: totalPage + 2 }).map((_, idx) => (
                  <div
                     className={`${
                        idx === currentPage
                           ? "cursor-pointer bg-primary h-[30px] w-[30px] lg:h-[60px] lg:w-[60px] rounded flex items-center justify-center text-white"
                           : "cursor-pointer bg-white h-[30px] w-[30px] lg:h-[60px] lg:w-[60px] rounded flex items-center justify-center text-gray-500"
                     }`}
                     key={idx}>
                     {idx === 0 || idx === totalPage + 1 ? (
                        <button
                           onClick={() => handleNextPrev(idx)}
                           className={`${
                              idx === totalPage + 1 ? "rotate-180" : ""
                           } `}>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6">
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M15.75 19.5 8.25 12l7.5-7.5"
                              />
                           </svg>
                        </button>
                     ) : (
                        <button onClick={() => handlePagination(idx)}>
                           {idx}
                        </button>
                     )}
                  </div>
               ))}
         </div>
      </div>
   );
};

export default Body;
Body.propTypes = {
   worker: PropTypes.arrayOf(
      PropTypes.shape({
         job: PropTypes.string,
         img: PropTypes.string,
         btnTitle: PropTypes.string,
         location: PropTypes.string,
         icon: PropTypes.string,
         skill: PropTypes.arrayOf(PropTypes.string),
         name: PropTypes.string,
      })
   ),
   currentPage: PropTypes.number,
   handlePagination: PropTypes.func,
   totalPage: PropTypes.number,
   load: PropTypes.bool,
   handleNextPrev: PropTypes.func,
};
