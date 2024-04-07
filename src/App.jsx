import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/Login";
import IsRequired from "./pages/Required";
import TopJobsPage from "./pages/TopJobsPage";
import EditCompanyPage from "./pages/Recruiters/EditProfile";

const route = createBrowserRouter([
   { path: "/", element: <LandingPage /> },
   { path: "/masuk", element: <LoginPage /> },
   {
      element: <IsRequired />,
      children: [
         { path: "/top-jobs", element: <TopJobsPage /> },
         { path: "/edit-company", element: <EditCompanyPage /> },
      ],
   },
]);
function App() {
   return <RouterProvider router={route} />;
}

export default App;
