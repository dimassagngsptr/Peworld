import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toastify } from "../../../components/base/Toastify";

const PrivateRecruiter = () => {
   const token = localStorage.getItem("token");
   const { role } = useSelector((state) => state.role);
   return (
      <>
         {!token ? (
            <Navigate to={"/masuk"} replace />
         ) : !role?.data?.data?.data &&
           role?.data?.data?.data !== "recruiter" ? (
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
