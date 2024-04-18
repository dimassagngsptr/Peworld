import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toastify } from "../../../components/base/Toastify";

const PrivateWorker = () => {
   const token = localStorage.getItem("token");
   const { role } = useSelector((state) => state.role);
   return (
      <>
         {!token ? (
            <Navigate to={"/masuk"} replace />
         ) : !role?.data?.data?.data && role?.data?.data?.data !== "worker" ? (
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
