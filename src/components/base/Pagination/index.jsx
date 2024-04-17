import PropTypes from "prop-types";
const Pagination = ({
   totalPage,
   currentPage,
   handleNextPrev,
   handlePagination,
}) => {
   return (
      <div className="flex flex-wrap gap-3 justify-center">
         {totalPage > 0 &&
            Array.from({ length: totalPage + 2 }).map((_, idx) => (
               <div
                  className={`${
                     idx === currentPage
                        ? "cursor-pointer bg-primary  text-white"
                        : "cursor-pointer bg-white text-gray-500"
                  } h-[30px] w-[30px] lg:h-[60px] lg:w-[60px] rounded flex items-center justify-center`}
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
   );
};

export default Pagination;
Pagination.propTypes = {
   totalPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   handleNextPrev: PropTypes.func,
   handlePagination: PropTypes.func,
   currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
