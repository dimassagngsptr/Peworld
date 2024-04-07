import { Navigate, Outlet } from "react-router-dom";
const IsRequired = () => {
   const token = localStorage.getItem("token");
   return (
      <>
         <>{token ? <Outlet></Outlet> : <Navigate to={"/masuk"} />}</>
      </>
   );
};

export default IsRequired;
