import "./index.css";
import PropTypes from "prop-types";
const Spinner = ({ purple, cirlce, black }) => {
   return (
      <>
         {cirlce ? (
            <span className="loader-circle"></span>
         ) : black ? (
            <span className="loader-circle-black"></span>
         ) : purple ? (
            <span className="loader-purple"></span>
         ) : (
            <span className="loader"></span>
         )}
      </>
   );
};

export default Spinner;
Spinner.propTypes = {
   purple: PropTypes.bool,
   cirlce: PropTypes.bool,
   black: PropTypes.bool,
};
