import { useState } from "react";
import Date from "../../../../../base/DatePicker";
import Input from "../../../../../base/Input";
import dayjs from "dayjs";
import { postApi } from "../../../../../../utils/post/post";
import PropTypes from "prop-types";
import Spinner from "../../../../../base/Button/Spinner";

const Experience = ({ experience, getExperience }) => {
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState({
      position: "",
      company: "",
      work_month: "",
      work_year: "",
      description: "",
   });
   const handleChange = (e) => {
      setData({ ...data, [e?.target?.name]: e?.target?.value });
   };
   const handleDate = (e) => {
      let year = dayjs(e).get("year");
      let month = dayjs(e).get("month");
      month = dayjs().month(month).format("MMMM");
      setData({ ...data, work_month: month, work_year: year });
   };
   const handleAddExperience = async () => {
      setLoading(true);
      try {
         const response = await postApi("experience", data);
         if (response?.data?.statuCode === 201) {
            getExperience();
         }
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };
   return (
      <section className="flex flex-col justify-between gap-14 py-3">
         <div className="grid grid-cols-1 gap-4 w-full justify-items-center">
            <div className="w-full ">
               <Input
                  label={"Posisi"}
                  onChange={(e) => handleChange(e)}
                  name="position"
                  value={data?.position}
                  className="bg-white px-2 py-3 border border-gray-300 rounded outline-none font-OpenSans min-w-full"
               />
            </div>
            <div className="col-span-2">
               <div className="flex gap-2 items-center lg:gap-12 lg:justify-between">
                  <Input
                     onChange={(e) => handleChange(e)}
                     name="company"
                     value={data?.company}
                     label={"Nama Perusahaan"}
                     className="bg-white px-2 py-3 w-[200px] lg:w-[470px] border border-gray-300 rounded outline-none font-OpenSans"
                  />
                  <Date
                     handleDate={(e) => handleDate(e)}
                     title={"Bulan/Tahun"}
                     views={["month", "year"]}
                  />
               </div>
            </div>
            <div className="w-full">
               <Input
                  onChange={(e) => handleChange(e)}
                  name="description"
                  value={data?.description}
                  label={"Deskripsi singkat"}
                  textArea={true}
                  className="bg-white h-32 px-2 py-3 border border-gray-300 rounded outline-none font-OpenSans min-w-full"
               />
            </div>
         </div>
         <div className="w-full">
            <button
               onClick={handleAddExperience}
               disabled={loading}
               className="bg-white text-btn border border-btn w-full font-semibold py-2 text-center outline-none rounded hover:bg-btn hover:text-white">
               {loading ? (
                  <Spinner purple={false} cirlce={false} />
               ) : (
                  "Tambah Pengalaman Kerja"
               )}
            </button>
         </div>
         <div className="flex flex-col gap-3">
            {experience?.map((item) => (
               <div
                  className="border-r-none border-l-none border-b border-t-none border-gray-200 px-4 py-1 rounded-md"
                  key={item?.id}>
                  <p>{item?.position}</p>
                  <div className="flex items-center gap-2">
                     <p>{item?.company}</p>
                     <span className="h-0.5 w-3 bg-gray-500"></span>
                     <p>
                        {item?.work_month} {item?.work_year}
                     </p>
                  </div>
                  <p className="mt-4">{item?.description}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Experience;
Experience.propTypes = {
   experience: PropTypes.arrayOf(PropTypes.object),
   getExperience: PropTypes.func,
};
