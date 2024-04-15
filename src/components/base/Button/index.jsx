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
   title: PropTypes.string,
   btnFunction: PropTypes.func,
   className: PropTypes.string,
};
