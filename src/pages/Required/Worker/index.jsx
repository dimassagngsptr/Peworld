import { Navigate, Outlet } from "react-router-dom";
import { toastify } from "../../../components/base/Toastify";
import { compareBcrypt } from "../../../utils/compareBcrypt";

const PrivateWorker = () => {
   const token = localStorage.getItem("token");

   return (
      <>
         {!token ? (
            <Navigate to={"/masuk"} replace />
         ) : !compareBcrypt("worker") ? (
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
