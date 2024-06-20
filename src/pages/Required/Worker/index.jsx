import { Navigate, Outlet } from "react-router-dom";
import { toastify } from "../../../components/base/Toastify";
import { compareBcrypt } from "../../../utils/compareBcrypt";
import { useSelector } from "react-redux";

const PrivateWorker = () => {
  const token = localStorage.getItem("token");
  const { activeUser } = useSelector((state) => state.user);
  return (
    <>
      {!token ? (
        <Navigate to={"/masuk"} replace />
      ) : activeUser?.role !== "worker" ? (
        <>
          {toastify("error", "Anda login sebagai perekrut")}
          <Navigate to={"/masuk"} replace />
        </>
      ) : (
        <Outlet></Outlet>
      )}
    </>
  );
};
export default PrivateWorker;
