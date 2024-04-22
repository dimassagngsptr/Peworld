import { useEffect, useState } from "react";
import Register from "../../../components/module/Register";
import Layout from "../../Layout";

const RegisterPage = () => {
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
            <Register />
         ) : (
            <Layout>
               <Register />
            </Layout>
         )}
      </>
   );
};

export default RegisterPage;
