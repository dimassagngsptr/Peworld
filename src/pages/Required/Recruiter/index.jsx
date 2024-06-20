import { Navigate, Outlet } from "react-router-dom";
import { toastify } from "../../../components/base/Toastify";
import { useSelector } from "react-redux";

const PrivateRecruiter = () => {
  const token = localStorage.getItem("token");
  const { activeUser } = useSelector((state) => state.user);
  console.log(activeUser?.role, token);
  return (
    <>
      {!token ? (
        <Navigate to={"/masuk"} replace />
      ) : activeUser?.role !== "recruiter" ? (
        <>
          {toastify("error", "Anda login sebagai pekerja")}
          <Navigate to={"/"} replace />
        </>
      ) : (
        <Outlet></Outlet>
      )}
    </>
  );
};
export default PrivateRecruiter;
