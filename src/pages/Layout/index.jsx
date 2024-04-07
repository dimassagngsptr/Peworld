import Footer from "../../components/module/Footer";
import Navbar from "../../components/module/Navbar";
import PropTypes from "prop-types";
import NavRight from "../../components/module/Navbar/NavRight";

const Layout = ({ children }) => {
  
   return (
      <>
         <Navbar>
            <NavRight />
         </Navbar>
         {children}
         <Footer />
      </>
   );
};
Layout.propTypes = {
   children: PropTypes.any,
};
export default Layout;
