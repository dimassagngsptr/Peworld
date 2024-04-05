import Login from "../../../components/module/Login/Form";
import LoginImg from "../../../components/module/Login/Images";
import Layout from "../../Layout";
import { useMediaQuery } from "react-responsive";

const LoginPage = () => {
   const desktop = useMediaQuery({ minWidth: 1000 });
   return (
      <>
         {desktop ? (
            <div className="relative lg:flex lg:gap-3 lg:px-6 lg:items-center lg:h-[822px]">
               <LoginImg />
               <Login />
            </div>
         ) : (
            <Layout>
               <div className="block lg:flex lg:gap-3 lg:px-6 lg:items-center lg:h-[822px]">
                  <Login />
               </div>
            </Layout>
         )}
      </>
   );
};

export default LoginPage;
