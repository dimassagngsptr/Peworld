import PropTypes from "prop-types";
const Button = ({ title, btnFunction, className }) => {
   const onClick = () => btnFunction();
   return (
      <button onClick={onClick} className={className}>
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
