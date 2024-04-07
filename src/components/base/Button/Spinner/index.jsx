import "./index.css";
import PropTypes from "prop-types";
const Spinner = ({ purple }) => {
   return (
      <>
         {!purple ? (
            <span className="loader"></span>
         ) : (
            <span className="loader-purple"></span>
         )}
      </>
   );
};

export default Spinner;
Spinner.propTypes = {
   purple: PropTypes.bool,
};
