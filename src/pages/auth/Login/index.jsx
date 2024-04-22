import { useEffect, useState } from "react";
import Login from "../../../components/module/Login/Form";
import LoginImg from "../../../components/module/Login/Images";
import Layout from "../../Layout";

const LoginPage = () => {
   const [desktop, setDesktop] = useState(true);
   useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 1000px)");
      setDesktop(mediaQuery.matches);

      const handleResize = () => {
         setDesktop(mediaQuery.matches);
      };

      mediaQuery.addListener(handleResize);

      return () => {
         mediaQuery.removeListener(handleResize);
      };
   }, []);
   return (
      <>
         {desktop ? (
            <div className="relative lg:flex lg:gap-3 lg:px-6 lg:items-center lg:h-[822px]">
               <LoginImg />
               <Login />
            </div>
         ) : (
            <Layout>
               <div className="block h-[80vh] lg:flex lg:gap-3 lg:px-6 lg:items-center lg:h-[822px]">
                  <Login />
               </div>
            </Layout>
         )}
      </>
   );
};

export default LoginPage;
