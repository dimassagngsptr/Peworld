import PropTypes from "prop-types";
import navLogo from "../../../assets/images/landing-page/main-logo.png";
import Navigation from "./Navigation";
const Navbar = ({ children }) => {
   return (
      <nav className="flex justify-between px-3 items-center md:px-[10%] md:py-[3%] lg:px[10%] font-OpenSans">
         <a href="/">
            <img
               src={navLogo}
               alt="peworld"
               className="py-6 px-5 md:px-0 md:py-0"
            />
         </a>
         <Navigation>{children}</Navigation>
      </nav>
   );
};
Navbar.propTypes = {
   children: PropTypes.object.isRequired,
};

export default Navbar;
