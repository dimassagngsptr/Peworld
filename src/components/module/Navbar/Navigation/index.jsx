import PropTypes from "prop-types";
const Navigation = ({ children }) => {
   return <>{children}</>;
};

export default Navigation;
Navigation.propTypes = {
   children: PropTypes.object.isRequired,
};
