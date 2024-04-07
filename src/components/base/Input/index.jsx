import PropTypes from "prop-types";
const Input = ({ label, style, textArea, ...props }) => {
   return (
      <div className="flex flex-col md:gap-1 lg:gap-2">
         {label && <label className={style}>{label}</label>}
         {textArea ? <textarea {...props} /> : <input {...props} />}
      </div>
   );
};
Input.propTypes = {
   props: PropTypes.shape({
      key: PropTypes.any,
   }),
   label: PropTypes.string,
   style: PropTypes.string,
   textArea: PropTypes.bool,
};
export default Input;
