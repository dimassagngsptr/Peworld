import PropTypes from "prop-types";
const Button = ({ title, btnFunction, className }) => {
   return (
      <button onClick={btnFunction} className={className}>
         {title}
      </button>
   );
};

export default Button;

Button.propTypes = {
   title: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
   btnFunction: PropTypes.func,
   className: PropTypes.string,
};
