import Header from "./Header";
import Body from "./Body";
import { getApi } from "../../../utils/get/get";
import { useEffect, useState } from "react";

const TopJobs = () => {
  const [worker, setWorker] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const getWorkers = () => {
    setLoad(true);
    getApi(`workers/?limit=10`, {
      search: search,
      page: currentPage,
      sort: select,
    })
      .then((res) => {
        setWorker(res?.data?.data);
        setTotalPage(res?.data?.pagination?.totalPage);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoad(false));
  };
  const handleSearch = (e) => {
    setSearch(e?.target?.value);
  };
  const handleSelect = (e) => {
    setSelect(e?.target?.value);
  };
  const handlePagination = (num) => setCurrentPage(num);
  const handleNextPrev = (num) => {
    if (num === 0) {
      if (currentPage <= 1) {
        return;
      }
      setCurrentPage((prev) => prev - 1);
    } else if (num === totalPage + 1) {
      if (currentPage >= totalPage) {
        return;
      }
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getWorkers();
  }, [currentPage, select]);

  return (
    <>
      <Header />
      <Body
        worker={worker}
        currentPage={currentPage}
        totalPage={totalPage}
        handlePagination={handlePagination}
        handleNextPrev={handleNextPrev}
        load={load}
        search={search}
        handleSearch={handleSearch}
        getWorkers={getWorkers}
        handleSelect={handleSelect}
      />
    </>
  );
};

export default TopJobs;
