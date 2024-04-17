import PropTypes from "prop-types";
import searchIcon from "../../../../assets/images/home-v1/search (1) 1.svg";
import pin from "../../../../assets/images/home-v1/map-pin (4) 1.svg";
import { getApi } from "../../../../utils/get/get";
import { useNavigate } from "react-router-dom";
import ListWorker from "../ListWorker";
import Pagination from "../../../base/Pagination";
import SearchHome from "../Search";
const Body = ({
   worker,
   currentPage,
   totalPage,
   handlePagination,
   load,
   handleNextPrev,
   handleSearch,
   search,
   getWorkers,
}) => {
   const navigate = useNavigate();
   const handleClick = async (id) => {
      try {
         const response = await getApi(`workers/${id}`);
         console.log(response?.data);
      } catch (error) {
         console.log(error);
      }
   };
   const handleParams = () => {
      if (!search && search === "") {
         navigate("/top-jobs");
         window.location.reload();
         return;
      }
      getWorkers();
   };
   const selectOptions = [
      {
         value: "name",
         optionTitle: "Sort",
      },
      {
         value: "name",
         optionTitle: "Sort berdasarkan nama",
      },
      {
         value: "name",
         optionTitle: "Sort berdasarkan nama",
      },
   ];

   return (
      <div className="bg-gray-200 h-[100%] flex flex-col gap-14 py-14 px-[2%] md:px-[10%]">
         <SearchHome
            handleParams={handleParams}
            handleSearch={handleSearch}
            search={search}
            searchIcon={searchIcon}
            selectOptions={selectOptions}
         />
         <ListWorker
            handleClick={handleClick}
            load={load}
            pin={pin}
            worker={worker}
         />
         <Pagination
            currentPage={currentPage}
            handleNextPrev={handleNextPrev}
            totalPage={totalPage}
            handlePagination={handlePagination}
         />
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
   handleSearch: PropTypes.func,
   getWorkers: PropTypes.func,
   search: PropTypes.string,
};
