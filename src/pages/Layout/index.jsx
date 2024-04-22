import Footer from "../../components/module/Footer";
import Navbar from "../../components/module/Navbar";
import PropTypes from "prop-types";
import NavRight from "../../components/module/Navbar/NavRight";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
   const { role } = useSelector((state) => state.role);
   return (
      <>
         <Navbar>
            <NavRight role={role?.data?.data?.role} />
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
