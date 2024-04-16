import PropTypes from "prop-types";
import Input from "../../../../base/Input";

const Workers = ({ items, handleChange }) => {
   const newItems = items?.slice(0, -2);
   return (
      <>
         {newItems.map((item, idx) => (
            <div key={idx}>
               <Input
                  label={item?.label}
                  placeholder={item?.placeholder}
                  name={item?.name}
                  value={item?.value}
                  type={item?.type}
                  onChange={handleChange}
                  style={"font-OpenSans text-gray-500 ml-1"}
                  required={item?.required}
                  className="bg-white font-OpenSans outline-none border border-gray-300 py-2 px-3 rounded-md md:py-4 lg:py-2"
               />
            </div>
         ))}
      </>
   );
};

export default Workers;
Workers.propTypes = {
   items: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
   handleChange: PropTypes.func,
};
