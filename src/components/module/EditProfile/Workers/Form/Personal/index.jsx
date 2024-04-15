import Button from "../../../../../base/Button";
import Spinner from "../../../../../base/Button/Spinner";
import Input from "../../../../../base/Input";
import PropTypes from "prop-types";
const Personal = ({ myData, handleChange, handleEdit, loading }) => {
   const items = [
      {
         name: "name",
         label: "Nama Lengkap",
         placeholder: myData?.name,
         className:
            "outline-none bg-white px-2 py-3 border border-gray-300 rounded outline-none font-OpenSans",
         style: "font-OpenSans text-gray-500 ml-2",
         textArea: false,
         type: "text",
         value: myData?.name,
      },
      {
         name: "job_desk",
         label: "Job Desk",
         placeholder: myData?.job_desk,
         className:
            "outline-none bg-white px-2 py-3 border border-gray-300 rounded outline-none font-OpenSans",
         style: "font-OpenSans text-gray-500 ml-2",
         textArea: false,
         type: "text",
         value: myData?.job_desk,
      },
      {
         name: "domicile",
         label: "Domisili",
         placeholder: myData?.domicile,
         className:
            "outline-none bg-white px-2 py-3 border border-gray-300 rounded outline-none font-OpenSans",
         style: "font-OpenSans text-gray-500 ml-2",
         textArea: false,
         type: "text",
         value: myData?.domicile,
      },
      {
         name: "workplace",
         label: "Tempat Kerja",
         placeholder: myData?.workplace,
         className:
            "outline-none bg-white px-2 py-3 border border-gray-300 rounded outline-none font-OpenSans",
         style: "font-OpenSans text-gray-500 ml-2",
         textArea: false,
         type: "text",
         value: myData?.workplace,
      },
      {
         name: "description",
         label: "Deskripsi singkat",
         placeholder: myData?.description,
         className:
            "outline-none bg-white py-2 px-3 border border-gray-300 rounded h-[144px] font-OpenSans",
         style: "font-OpenSans text-gray-500 ml-2",
         textArea: true,
         value: myData?.description,
      },
   ];
   return (
      <div className="flex flex-col gap-3">
         {items?.map((item, idx) => (
            <div key={idx}>
               <Input
                  label={item?.label}
                  placeholder={item?.placeholder}
                  className={item?.className}
                  style={item?.style}
                  textArea={item?.textArea}
                  type={item?.type}
                  onChange={handleChange}
                  name={item?.name}
                  value={item?.value}
               />
            </div>
         ))}
         <div className="flex gap-5 justify-end">
            <Button
               title={"Batal"}
               className={`bg-white text-primary border border-primary px-5 py-2 my-2 rounded outline-none`}
            />
            {loading ? (
               <Button
                  title={<Spinner cirlce={false} purple={false} />}
                  className={`bg-primary text-white w-[95px] px-5 py-2 my-2 rounded outline-none cursor-not-allowed`}
               />
            ) : (
               <Button
                  title={"Simpan"}
                  btnFunction={handleEdit}
                  className={`bg-primary text-white px-5 py-2 my-2 rounded outline-none`}
               />
            )}
         </div>
      </div>
   );
};

export default Personal;
Personal.propTypes = {
   myData: PropTypes.object,
   handleChange: PropTypes.func.isRequired,
   handleEdit: PropTypes.func.isRequired,
   loading: PropTypes.bool,
   gettingProfile: PropTypes.func,
};
