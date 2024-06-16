import { useState } from "react";
import Input from "../../../base/Input";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../../base/Button/Spinner";
import { toastify } from "../../../base/Toastify";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../../../config/Redux/features/auth/authSlice";

const Login = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { loading } = useSelector((state) => state.auth);

   const [value, setValue] = useState({
      email: "",
      password: "",
   });
   const items = [
      {
         label: "Email",
         placeholder: "Masukan alamat email",
         name: "email",
         value: value?.email,
         type: "text",
      },
      {
         label: "Kata Sandi",
         placeholder: "Masukan password",
         name: "password",
         value: value?.password,
         type: "password",
      },
   ];

   const handleChange = (e) => {
      setValue({
         ...value,
         [e.target.name]: e.target.value,
      });
   };

   const handleLogin = async () => {
      try {
         const response = await dispatch(
            authUser({ route: "auth/login", data: value })
         ).unwrap();
         toastify("success", response?.message);
         navigate("/");
         window.location.reload();
      } catch (error) {
         toastify("error", error);
      }
   };
   return (
      <section className="flex flex-col gap-5 items-center font-primary px-8 py-10 md:px-28 md:h-[67vh] md:gap-10 lg:h-[100%] lg:w-[70%]">
         <div className="text-center lg:text-start">
            <h1 className="font-semibold text-[22px] md:text-[40px] lg:text-[32px]">
               Halo, <span className="text-primary">Pewpeople</span>
            </h1>
            <p className="text-[14px] md:text-[22px] lg:text-[18px]">
               Masuk ke akun Anda sekarang untuk menemukan talenta berbakat dan
               terbaik
            </p>
         </div>
         <div className="flex flex-col w-full gap-3 md:gap-4 ">
            {items?.map((item, idx) => (
               <div key={idx}>
                  <Input
                     label={item?.label}
                     placeholder={item?.placeholder}
                     name={item?.name}
                     value={item?.value}
                     type={item?.type}
                     onChange={handleChange}
                     style={"font-OpenSans text-gray-500 ml-1"}
                     className="bg-white font-OpenSans outline-none border border-gray-300 py-2 px-3 rounded-md md:py-4 lg:py-2"
                  />
               </div>
            ))}
            <Link className="text-end w-full text-gray-500 font-normal text-[14px] md:text-[16px]">
               Lupa kata sandi?
            </Link>
         </div>
         <div className="w-full flex flex-col gap-4">
            <button
               disabled={loading}
               onClick={handleLogin}
               className={`${
                  loading ? "cursor-not-allowed" : "cursor-pointer"
               } bg-btn text-white w-[100%] py-2 rounded-sm font-bold md:py-3`}>
               {loading ? <Spinner /> : "Masuk"}
            </button>
            <Link
               className="text-center text-[14px] md:text-[16px]"
               to={"/daftar"}>
               Anda belum punya akun?{" "}
               <span className="text-btn">Daftar disini</span>
            </Link>
         </div>
      </section>
   );
};

export default Login;
