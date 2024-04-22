import { Navigate, Outlet } from "react-router-dom";
import { toastify } from "../../../components/base/Toastify";
import { compareBcrypt } from "../../../utils/compareBcrypt";

const PrivateRecruiter = () => {
   const token = localStorage.getItem("token");

   return (
      <>
         {!token ? (
            <Navigate to={"/masuk"} replace />
         ) : !compareBcrypt("recruiter") ? (
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
