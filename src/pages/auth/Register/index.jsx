import Register from "../../../components/module/Register";
import Layout from "../../Layout";
import { useMediaQuery } from "react-responsive";

const RegisterPage = () => {
   const desktop = useMediaQuery({ minWidth: 1000 });
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
