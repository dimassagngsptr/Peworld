import "./index.css";
import PropTypes from "prop-types";
const Spinner = ({ purple, cirlce }) => {
   return (
      <>
         {cirlce ? (
            <span className="loader-circle"></span>
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
};
