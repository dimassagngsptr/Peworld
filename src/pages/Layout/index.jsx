import Footer from "../../components/module/Footer";
import Navbar from "../../components/module/Navbar";
import PropTypes from "prop-types";
import NavRight from "../../components/module/Navbar/NavRight";
import { useEffect, useState } from "react";
import { getApi } from "../../utils/get/get";

const Layout = ({ children }) => {
   const token = localStorage.getItem("token");
   const [role, setRole] = useState("");
   const checkRole = async () => {
      if (token) {
         try {
            const response = await getApi("auth/check-role");
            setRole(response?.data?.data?.data?.role);
         } catch (error) {
            console.log(error);
         }
      }
   };
   useEffect(() => {
      checkRole();
   }, []);
   return (
      <>
         <Navbar>
            <NavRight role={role} />
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
