import Footer from "../../components/module/Footer";
import Navbar from "../../components/module/Navbar";
import PropTypes from "prop-types";
import NavRight from "../../components/module/Navbar/NavRight";
import { useEffect, useState } from "react";
import { getApi } from "../../utils/get/get";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { role } = useSelector((state) => state.role);
  return (
    <>
      <Navbar>
        <NavRight role={role?.data?.data?.data?.role} />
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
