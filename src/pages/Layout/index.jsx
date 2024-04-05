import Footer from "../../components/module/Footer";
import Navbar from "../../components/module/Navbar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
   const items = [
      {
         title: "Top Jobs",
         path: "/",
      },
      {
         title: "Profile",
         path: "/",
      },
      {
         title: "About",
         path: "/",
      },
   ];
   return (
      <>
         <Navbar items={items} />
         {children}
         <Footer />
      </>
   );
};
Layout.propTypes = {
   children: PropTypes.any,
};
export default Layout;
