import PropTypes from "prop-types";
const SelectItems = ({ label, labelTitle, children, ...props }) => {
   return (
      <div>
         {label && <label htmlFor={label}>{labelTitle}</label>}
         <select {...props}>{children}</select>
      </div>
   );
};

export default SelectItems;
SelectItems.propTypes = {
   label: PropTypes.string,
   labelTitle: PropTypes.string,
   children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
