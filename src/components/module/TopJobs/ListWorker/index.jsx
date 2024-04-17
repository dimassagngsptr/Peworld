import Card from "../../Card";
import Images from "../../../base/image";
import Button from "../../../base/Button";
import SkeletonItems from "../../Skeleton";
import PropTypes from "prop-types";

const ListWorker = ({ worker, load, pin, handleClick }) => {
   return (
      <div>
         <div className="grid grid-cols-2 gap-3 mx-auto md:grid-cols-3 lg:flex lg:flex-col lg:mx-0 lg:gap-0.5">
            {worker?.length > 0 && load === false ? (
               worker?.map((item) => (
                  <div
                     key={item?.id}
                     className="overflow-hidden max-h-[400px] lg:max-h-screen">
                     <div className="block lg:hidden">
                        <Card
                           job={item?.job_desk}
                           img={item?.photo}
                           btnTitle={"Lihat Profile"}
                           location={item?.domicile}
                           icon={pin}
                           skill={item?.skills}
                           name={item?.name}
                           className={"max-w-[150px] max-h-full rounded-full"}
                           btnFunc={() => handleClick(item?.id)}
                        />
                     </div>
                     <div className="hidden bg-white w-full h-[200px] rounded py-1 px-4 lg:flex lg:items-center lg:justify-between gap-4 font-OpenSans">
                        <div className="flex items-center gap-4">
                           <Images
                              img={item?.photo}
                              className={`w-[100px] h-[100px] rounded-full`}
                           />
                           <div className="flex flex-col gap-1">
                              <p className="font-semibold text-[#1F2A36] text-[22px]">
                                 {item?.name}
                              </p>
                              <small className="text-gray-400 text-[12px]">
                                 {item?.job_desk}
                              </small>
                              <div className="flex gap-2 items-center">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="rgb(156 163 175)"
                                    className="w-4 h-4">
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
                                 <small className="text-gray-400 text-[12px]">
                                    {item?.domicile}
                                 </small>
                              </div>
                              <div className="flex gap-3 flex-wrap mt-2">
                                 {item?.skills?.slice(0, 5)?.map((item) => (
                                    <Button
                                       title={item}
                                       key={item}
                                       className={`bg-btn/60 border border-btn py-1 px-2 text-white rounded`}
                                    />
                                 ))}
                              </div>
                           </div>
                        </div>
                        <Button
                           title={"Lihat Profile"}
                           className={`bg-primary text-white py-1 px-4 rounded h-1/4`}
                        />
                     </div>
                  </div>
               ))
            ) : (
               <>
                  {Array.from(new Array(20)).map((_, idx) => (
                     <div key={idx}>
                        <SkeletonItems />
                     </div>
                  ))}
               </>
            )}
         </div>
      </div>
   );
};

export default ListWorker;

ListWorker.propTypes = {
   worker: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
   load: PropTypes.bool,
   pin: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
   handleClick: PropTypes.func,
};
