import PropTypes from "prop-types";
import Input from "../../../base/Input";
import SelectItems from "../../../base/Select";

const SearchHome = ({
   handleSearch,
   search,
   handleParams,
   searchIcon,
   selectOptions,
}) => {
   return (
      <div className="bg-white h-[70px] rounded-md flex justify-between px-2 py-2 w-full lg:flex">
         <div
            className={`"w-[200px] md:w-[70%] overflow-hidden h-full transition-all duration-200 px-1 flex items-center`}>
            <div className="w-[90%] lg:w-full">
               <Input
                  type="text"
                  placeholder="Search for any skill"
                  className="outline-none w-full border-none h-[60px]"
                  onChange={(e) => handleSearch(e)}
                  value={search}
               />
            </div>
            <button onClick={handleParams} className="outline-none">
               <img src={searchIcon} />
            </button>
         </div>
         <div
            className={`relative gap-3 w-[40%] md:w-[300px] flex items-center transition-all duration-300`}>
            <span className="bg-gray-300 h-[80%] w-1"></span>
            <div className="w-[90%] ">
               <SelectItems
                  className={`outline-none appearance-none w-full cursor-pointer h-full`}>
                  {selectOptions?.map((item, idx) => (
                     <option
                        key={idx}
                        value={item?.value}
                        className="border border-gray-200 py-2 px-2 rounded-md">
                        {item?.optionTitle}
                     </option>
                  ))}
               </SelectItems>
            </div>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="w-6 h-6 absolute right-5">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
               />
            </svg>
         </div>
      </div>
   );
};

export default SearchHome;
SearchHome.propTypes = {
   handleParams: PropTypes.func,
   handleSearch: PropTypes.func,
   search: PropTypes.string,
   searchIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
   selectOptions: PropTypes.array,
};
