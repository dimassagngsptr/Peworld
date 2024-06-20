import Navbar from "../../components/module/Navbar";
import messageSvg from "../../assets/images/home-v1/mail (3) 1.svg";
import bellSvg from "../../assets/images/home-v1/bell (1) 1.svg";
import Footer from "../../components/module/Footer";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import BasicMenu from "../../components/module/Menu";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../config/api/api";
import { timeAgo } from "../../utils/timeAgo";
import { splitTextIntoParts } from "../../utils/textSplit";
const Home = ({ children, footer }) => {
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.role);
  const [notifications, setNotifications] = useState([]);
  const { activeUser } = useSelector((state) => state.user);
  const getHired = async () => {
    try {
      const response = await api.get(`hire/${activeUser?.role}s`);
      setNotifications(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const items = [
    {
      path: "#",
      icon: messageSvg,
    },
    {
      path: "#",
      icon: bellSvg,
      menuItems: [
        {
          title: (
            <div className="flex flex-col gap-1 min-w-[300px]">
              {notifications?.map((item) => (
                <div className="flex flex-col gap-2 hover:bg-gray-200 py-2 w-full rounded px-2">
                  <div className="flex gap-3 justify-between">
                    <div className="flex gap-3 max-w-[50px]">
                      <img
                        src={
                          activeUser?.role === "worker"
                            ? item?.recruiter_photo
                            : item?.worker_photo
                        }
                        className="max-w-10 max-h-10 rounded-full"
                      />
                      <div>
                        <p className="text-xs">
                          {activeUser?.role === "worker" ? (
                            <>
                              <span className="font-semibold">
                                {item?.recruiter_name}
                              </span>
                              <br />
                              merekrut Anda sebagai <br />{" "}
                              {item?.message_purpose} di{" "}
                              {item?.recruiter_company}
                            </>
                          ) : (
                            "Anda telah merekrut"
                          )}
                          <br />
                          {activeUser?.role !== "worker" && (
                            <>
                              <span className="font-semibold">
                                {item?.worker_name}
                                sebagai <br />
                              </span>
                              <span> pekerja</span>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs">
                      {timeAgo(item?.created_at)}{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ),
          func: () => navigate(`/${role?.data?.data?.role}`),
        },
      ],
    },
    {
      path: `# `,
      icon: activeUser?.photo,
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
  useEffect(() => {
    getHired();
  }, []);

  return (
    <section className="h-full font-OpenSans">
      <Navbar>
        <div className="flex items-center gap-5 px-3">
          {items?.map((item, idx) => (
            <div key={idx}>
              <BasicMenu
                button={
                  <img
                    src={item?.icon}
                    loading="lazy"
                    className="max-h-[32px] max-w-[32px]"
                  />
                }
                menuItems={item?.menuItems}
              />
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
