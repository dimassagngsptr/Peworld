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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { checkRoleUser } from "./config/Redux/features/role/chekRoleSlice";
import {
   getActiveUser,
   getSkills,
} from "./config/Redux/features/users/userSlice";
import PrivateWorker from "./pages/Required/Worker";
import PrivateRecruiter from "./pages/Required/Recruiter";
import ProfileRecruiterPage from "./pages/Recruiters/Profile";

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
         { path: "/worker/edit-profile", element: <EditWorkersPge /> },
      ],
   },
   {
      element: <PrivateRecruiter />,
      children: [
         {
            path: "/recruiter",
            element: <ProfileRecruiterPage />,
         },
         { path: "/recruiter/edit-profile", element: <EditCompanyPage /> },
      ],
   },
   { path: "*", element: <NotFound /> },
]);
function App() {
   const token = localStorage.getItem("token");
   const { role } = useSelector((state) => state.role);
   const dispatch = useDispatch();

   useEffect(() => {
      if (token) {
         dispatch(checkRoleUser(token)).unwrap();
         dispatch(getSkills()).unwrap();
      }
   }, [token]);
   useEffect(() => {
      dispatch(getActiveUser(`${role?.data?.data?.role}s`)).unwrap();
   }, [role, dispatch]);
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <RouterProvider router={route} />
      </LocalizationProvider>
   );
}

export default App;
