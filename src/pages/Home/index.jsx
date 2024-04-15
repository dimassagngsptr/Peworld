import Navbar from "../../components/module/Navbar";
import messageSvg from "../../assets/images/home-v1/mail (3) 1.svg";
import bellSvg from "../../assets/images/home-v1/bell (1) 1.svg";
import profileImg from "../../assets/images/home-v1/Mask Group.png";
import Footer from "../../components/module/Footer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Home = ({ children, footer }) => {
   const items = [
      {
         path: "/top-jobs",
         icon: messageSvg,
      },
      {
         path: "/top-jobs",
         icon: bellSvg,
      },
      {
         path: `/top-jobs`,
         icon: profileImg,
      },
   ];

   return (
      <section className="h-full font-OpenSans">
         <Navbar>
            <div className="flex items-center gap-5 px-3">
               {items?.map((item, idx) => (
                  <Link to={item?.path} key={idx}>
                     <img
                        src={item?.icon}
                        alt="img"
                        className="max-h-[32px] max-w-[32px]"
                        loading="lazy"
                     />
                  </Link>
               ))}
            </div>
         </Navbar>
         {children}
         {footer && <Footer />}
      </section>
   );
};

export default Home;
Home.propTypes = {
   children: PropTypes.object,
   footer: PropTypes.bool,
};
