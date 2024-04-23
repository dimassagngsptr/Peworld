import Navbar from "../../components/module/Navbar";
import messageSvg from "../../assets/images/home-v1/mail (3) 1.svg";
import bellSvg from "../../assets/images/home-v1/bell (1) 1.svg";
import profileImg from "../../assets/images/home-v1/Mask Group.png";
import Footer from "../../components/module/Footer";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import BasicMenu from "../../components/module/Menu";
import { useSelector } from "react-redux";
const Home = ({ children, footer }) => {
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.role);
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
      menuItems: [
        {
          title: "My Profile",
          func: () => navigate(`/${role?.data?.data?.role}`),
        },
        {
          title: "Logout",
          func: () => {
            localStorage.clear();
            window.location.reload();
          },
        },
      ],
    },
  ];

  return (
    <section className="h-full font-OpenSans">
      <Navbar>
        <div className="flex items-center gap-5 px-3">
          {items?.map((item, idx) => (
            <div key={idx}>
              {idx === 2 ? (
                <BasicMenu
                  button={<img src={item?.icon} loading="lazy" />}
                  menuItems={item?.menuItems}
                />
              ) : (
                <Link to={item?.path}>
                  <img
                    src={item?.icon}
                    alt="img"
                    className="max-h-[32px] max-w-[32px]"
                    loading="lazy"
                  />
                </Link>
              )}
            </div>
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
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  footer: PropTypes.bool,
};
