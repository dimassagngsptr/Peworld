import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../../base/Button";
import HamburgerMenu from "../Hamburger";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import BasicMenu from "../../Menu";

const NavRight = ({ role }) => {
   const token = localStorage.getItem("token");
   const { activeUser } = useSelector((state) => state.user);
   console.log(activeUser);
   const items = [
      {
         title: "Home",
         path: "/top-jobs/",
      },
      {
         title: "My Profile",
         path: `/${role}`,
      },
   ];
   const navigate = useNavigate();
   const [hoveredTitle, setHoveredTitle] = useState("");
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
   const handleLogout = () => {
      localStorage.clear();
      window.location.reload();
   };
   return (
      <>
         <div
            className={`${
               open === true
                  ? "z-10 absolute right-0 bg-white px-2 py-3 rounded-md h-screen top-0 w-[70vw] text-[18px] font-bold transition-all duration-500 md:static md:w-[70%] md:h-full md:gap-8 md:text-primary md:py-0 md:bg-white md:flex md:items-center lg:static lg:flex lg:justify-around"
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
            <div
               className={`
                  ${
                     open ? "pt-10 px-3 " : "hidden"
                  } md:flex md:justify-center md:gap-[20px] md:pt-0 md:px-0 md:w-[65%] lg:w-[40%]`}>
               {items?.map(({ title, path }, idx) => (
                  <NavLink
                     to={path}
                     key={idx}
                     className={`flex flex-col leading-0 py-1 md:py-0 md:leading-none md:text-[16px] text-black hover:text-primary md:text-primary ${
                        idx === 1 && "block md:hidden"
                     }`}
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
               {!token ? (
                  <>
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
                  </>
               ) : (
                  <>
                     <div className="hidden md:block">
                        {activeUser?.photo ? (
                           <BasicMenu
                              button={
                                 <img
                                    src={activeUser?.photo}
                                    loading="lazy"
                                    className="p-1 max-w-[50px] max-h-[50px] rounded-full border border-gray-500"
                                 />
                              }
                              menuItems={[
                                 {
                                    title: "My Profile",
                                    func: () => navigate(role),
                                 },
                                 { title: "Logout", func: handleLogout },
                              ]}
                           />
                        ) : (
                           <BasicMenu
                              button={
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    />
                                 </svg>
                              }
                              menuItems={[
                                 {
                                    title: "My Profile",
                                    func: () => navigate(role),
                                 },
                                 { title: "Logout", func: handleLogout },
                              ]}
                           />
                        )}
                     </div>
                     <button
                        className="border border-primary rounded py-1 px-4 text-primary md:hidden"
                        onClick={handleLogout}>
                        Logout
                     </button>
                  </>
               )}
            </div>
         </div>
         <div
            className={`${
               open === true
                  ? "hidden"
                  : "absolute right-5 top-4 bg-white text-black p-2 rounded-md"
            } transition-opacity duration-500 md:hidden cursor-pointer`}
            onClick={() => setOpen(true)}>
            <HamburgerMenu />
         </div>
      </>
   );
};

export default NavRight;
NavRight.propTypes = {
   role: PropTypes.string,
};
