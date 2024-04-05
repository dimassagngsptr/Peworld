import PropTypes from "prop-types";
import navLogo from "../../../assets/images/landing-page/main-logo.png";
import Button from "../../base/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HamburgerMenu from "./Hamburger";
const Navbar = ({ items }) => {
   const navigate = useNavigate();
   const [hoveredTitle, setHoveredTitle] = useState("Top Jobs");
   const [open, setOpen] = useState(false);
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY) {
            setOpen(false);
            setHoveredTitle("Top Jobs");
         }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   return (
      <nav className="flex justify-between px-3 items-center md:px-[10%] md:py-[3%] lg:px[10%] font-OpenSans">
         <img
            src={navLogo}
            alt="peworld"
            className="py-6 px-5 md:px-0 md:py-0"
         />
         <div
            className={`${
               open === true
                  ? "absolute right-0 bg-white shadow-lg px-2 py-3 rounded-md h-screen top-0 w-[70vw] text-[18px] font-bold transition-all duration-500 md:static md:w-[70%] md:h-full md:gap-8 md:text-primary md:py-0 md:bg-white md:flex md:items-center lg:static lg:flex lg:justify-around"
                  : "w-0 h-0 right-0 top-0 absolute text-transparent transition-all duration-500 md:static md:h-full md:gap-8 md:text-primary md:py-0 lg:shadow-none md:bg-white md:items-center md:flex lg:static md:w-[70%] lg:flex lg:justify-around"
            } `}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               onClick={() => setOpen(false)}
               className="w-6 h-6 absolute top-2 right-4 md:hidden md:h-0 md:w-0">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
               />
            </svg>
            <div className="pt-10 px-3 md:flex md:gap-[20px] md:pt-0 md:px-0 md:w-[250px]">
               {items?.map(({ title, path }) => (
                  <NavLink
                     to={path}
                     key={title}
                     className="flex flex-col leading-0 py-1 md:py-0 md:leading-none md:text-[16px] text-black hover:text-primary md:text-primary "
                     onMouseEnter={() => setHoveredTitle(title)}
                     onMouseLeave={() => setHoveredTitle(hoveredTitle)}>
                     {title}
                     <span
                        className={` ${
                           hoveredTitle === title
                              ? "h-1 w-[20%] md:w-[100%] bg-primary rounded-md md:mt-1"
                              : "h-1 w-0 bg-white rounded-md md:mt-1"
                        } transition-width duration-500`}></span>
                  </NavLink>
               ))}
            </div>
            <div
               className={`${
                  open === true
                     ? "absolute flex gap-5 left-4 top-[200px] md:static md:flex md:gap-3 transition-all duration-500"
                     : "hidden right-0 gap-5 top-[200px] md:static md:flex md:gap-3 transition-all duration-500"
               }`}>
               <Button
                  title={"Masuk"}
                  btnFunction={() => navigate("/masuk")}
                  className={
                     "bg-white text-primary border border-primary px-3 py-1 rounded-[5px] font-semibold"
                  }
               />
               <Button
                  title={"Daftar"}
                  btnFunction={() => navigate("/daftar")}
                  className={
                     "bg-primary text-white px-3 py-1 rounded-[5px] font-semibold"
                  }
               />
            </div>
         </div>
         <div
            className={`${
               open === true
                  ? "hidden"
                  : "absolute right-5 top-4 bg-white text-black p-2 rounded-md"
            } transition-opacity duration-500 md:hidden`}
            onClick={() => setOpen(true)}>
            <HamburgerMenu />
         </div>
      </nav>
   );
};
Navbar.propTypes = {
   items: PropTypes.array,
};

export default Navbar;
