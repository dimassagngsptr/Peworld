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
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
const Home = ({ children, footer }) => {
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.role);
  console.log(role);
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
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const dateUTC = dayjs("2024-06-19T21:18:01.991Z").utc();
  const dateJakarta = dayjs("2024-06-19T21:18:01.991Z").tz("Asia/Jakarta");

  console.log(`Date in UTC: ${dateUTC.format()}`);
  console.log(`Date in Jakarta Time: ${dateJakarta.format()}`);
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
            <div className="flex flex-col gap-1 w-[300px]">
              {notifications?.map((item) => (
                <div className="flex flex-col gap-2 hover:bg-gray-200 py-2 w-full rounded px-2">
                  <div className="flex gap-3 justify-between px-2">
                    <div className="flex gap-3">
                      <img
                        src={item?.worker_photo}
                        className="max-w-10 max-h-10"
                      />
                      <p className="text-xs">
                        Anda telah merekrut <br />
                        <span className="font-semibold">
                          {item?.worker_name}
                        </span>{" "}
                        sebagai <br />
                        pekerja
                      </p>
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
