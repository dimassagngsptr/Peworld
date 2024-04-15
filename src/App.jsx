import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/Login";
import IsRequired from "./pages/Required";
import TopJobsPage from "./pages/TopJobsPage";
import EditCompanyPage from "./pages/Recruiters/EditProfile";
import RegisterPage from "./pages/auth/Register";
import EditWorkersPge from "./pages/Worker/EditProfile";
import NotFound from "./pages/NotFound";

const route = createBrowserRouter([
   { path: "/", element: <LandingPage /> },
   { path: "/masuk", element: <LoginPage /> },
   { path: "/daftar", element: <RegisterPage /> },
   { path: "/top-jobs", element: <TopJobsPage /> },
   {
      element: <IsRequired />,
      children: [
         { path: "/edit-recruiter", element: <EditCompanyPage /> },
         { path: "/edit-worker", element: <EditWorkersPge /> },
      ],
   },
   { path: "*", element: <NotFound /> },
]);
function App() {
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <RouterProvider router={route} />
      </LocalizationProvider>
   );
}

export default App;
