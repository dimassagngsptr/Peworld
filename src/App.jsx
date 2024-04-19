import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/Login";
import TopJobsPage from "./pages/TopJobsPage";
import EditCompanyPage from "./pages/Recruiters/EditProfile";
import RegisterPage from "./pages/auth/Register";
import EditWorkersPge from "./pages/Worker/EditProfile";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/Worker/Profile";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { checkRoleUser } from "./config/Redux/features/chekRoleSlice";
import { getActiveUser } from "./config/Redux/features/userSlice";
import PrivateWorker from "./pages/Required/Worker";
import PrivateRecruiter from "./pages/Required/Recruiter";

const route = createBrowserRouter([
   { path: "/", element: <LandingPage /> },
   { path: "/masuk", element: <LoginPage /> },
   { path: "/daftar", element: <RegisterPage /> },
   { path: "/top-jobs", element: <TopJobsPage /> },
   {
      element: <PrivateWorker />,
      children: [
         {
            path: "/worker",
            element: <ProfilePage />,
         },
         { path: ":pathname/edit", element: <EditWorkersPge /> },
      ],
   },
   {
      element: <PrivateRecruiter />,
      children: [{ path: "/recruiter", element: <EditCompanyPage /> }],
   },
   { path: "*", element: <NotFound /> },
]);
function App() {
   const token = localStorage.getItem("token");
   const [userRole, setUserRole] = useState("");
   const dispatch = useDispatch();
   const chekRole = async () => {
      try {
         const response = await dispatch(checkRoleUser());
         setUserRole(response?.payload?.data?.data?.data?.role);
      } catch (error) {
         console.log(error);
      }
   };
   const keepLogin = async () => {
      try {
         if (userRole) {
            await dispatch(getActiveUser(`${userRole}s`));
         }
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      if (!token) {
         return;
      }
      chekRole();
      keepLogin();
   }, [token, userRole]);
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <RouterProvider router={route} />
      </LocalizationProvider>
   );
}

export default App;
