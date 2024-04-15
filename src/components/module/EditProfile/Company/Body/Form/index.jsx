import Input from "../../../../../base/Input";
import PropTypes from "prop-types";
const Form = ({ value, handleChange }) => {
   const items = [
      {
         name: "company",
         label: "Nama Perusahaan",
         placeholder: value?.company,
         className:
            "bg-white px-2 py-3 border border-gray-300 rounded outline-none",
         style: "text-gray-500 ml-2",
         textArea: false,
         type: "text",
         value: value?.company,
      },
      {
         name: "position",
         label: "Posisi",
         placeholder: "Masukan posisi Anda ex : HRD",
         className:
            "bg-white px-2 py-3 border border-gray-300 rounded outline-none",
         style: "text-gray-500 ml-2",
         textArea: false,
         type: "text",
         value: value?.position,
      },
      {
         name: "city",
         label: "Kota",
         placeholder: value?.city,
         className:
            "bg-white px-2 py-3 border border-gray-300 rounded outline-none",
         style: "text-gray-500 ml-2",
         textArea: false,
         type: "text",
         value: value?.city,
      },
      {
         name: "description",
         label: "Deskripsi singkat",
         placeholder: value?.description,
         className: "bg-white py-5 px-2 border border-gray-300 rounded",
         style: "text-gray-500 ml-2",
         textArea: true,
         value: value?.description,
      },
      {
         name: "email",
         label: "Email",
         placeholder: value?.email,
         className:
            "bg-white px-2 py-3 border border-gray-300 rounded outline-none",
         style: "text-gray-500 ml-2",
         textArea: false,
         type: "email",
         value: value?.email,
      },
      {
         name: "instagram",
         label: "Instagram",
         placeholder: value?.instagram,
         className:
            "bg-white px-2 py-3 border border-gray-300 rounded outline-none",
         style: "text-gray-500 ml-2",
         textArea: false,
         type: "text",
         value: value?.instagram,
      },
      {
         name: "phone",
         label: "Nomor Telepon",
         placeholder: value?.phone,
         className:
            "bg-white px-2 py-3 border border-gray-300 rounded outline-none",
         style: "text-gray-500 ml-2",
         textArea: false,
         type: "number",
         value: value?.phone,
      },
      {
         name: "linkedin",
         label: "Linkedin",
         placeholder: value?.linkedin,
         className:
            "bg-white px-2 py-3 border border-gray-300 rounded outline-none",
         style: "text-gray-500 ml-2",
         textArea: false,
         type: "text",
         value: value?.linkedin,
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
      </div>
   );
};

export default Form;
Form.propTypes = {
   value: PropTypes.object,
   handleChange: PropTypes.func,
   profile: PropTypes.object,
};
