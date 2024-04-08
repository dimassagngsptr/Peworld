import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../base/Button/Spinner";
import Button from "../../base/Button";
import bgImg from "../../../assets/images/login/true-agency-o4UhdLv5jbQ-unsplash 1.png";
import bgSvg from "../../../assets/images/login/bg-login.png";
import footLogo from "../../../assets/images/landing-page/foot-logo.png";
import { postApi } from "../../../utils/post/post";
import Workers from "./Form/Worker";
import Recruiters from "./Form/Recruiter";
import { toastify } from "../../base/Toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
   const navigate = useNavigate();
   const [value, setValue] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      company: "",
      position: "",
      phone: "",
   });

   const items = [
      {
         label: "Nama",
         placeholder: "Masukan nama panjang",
         name: "name",
         value: value?.name,
         type: "text",
      },
      {
         label: "Email",
         placeholder: "Masukan alamat email",
         name: "email",
         value: value?.email,
         type: "email",
      },
      {
         label: "No Handphone",
         placeholder: "Masukan no handphone",
         name: "phone",
         value: value?.phone,
         type: "phone",
      },
      {
         label: "Kata Sandi",
         placeholder: "Masukan kata sandi",
         name: "password",
         value: value?.password,
         type: "password",
      },
      {
         label: "Konfirmasi Kata Sandi",
         placeholder: "Konfirmasi kata sandi",
         name: "confirmPassword",
         value: value?.confirmPassword,
         type: "password",
      },
      {
         label: "Nama Perusahaan",
         placeholder: "Masukan nama perusahaan",
         name: "company",
         value: value?.company,
         type: "text",
         required: true,
      },
      {
         label: "Posisi",
         placeholder: "Masukan posisi anda ex: HRD",
         name: "position",
         value: value?.position,
         type: "text",
         required: true,
      },
   ];
   const [load, setLoad] = useState(false);
   const [btnActive, setBtnActive] = useState({
      idx: 0,
      route: "",
   });

   const btn = [
      { title: "Pekerja", route: "workers" },
      { title: "Rekruter", route: "recruiters" },
   ];

   const handleChange = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
   };
   const handleRegister = async () => {
      setLoad(true);
      if (value?.password !== value?.confirmPassword) {
         alert("Password tidak sesuai");
         setLoad(false);
         return;
      }
      try {
         const response = await postApi(`${btnActive?.route}/register`, value);
         toastify("success", response?.data?.message);
         navigate("/");
      } catch (error) {
         console.log(error);
      } finally {
         setLoad(false);
      }
   };
   useEffect(() => {
      setBtnActive({ idx: 0, route: "workers" });
   }, []);
   return (
      <section className="flex justify-center gap-[50px] px-2 lg:justify-between min-h-[900px] md:min-h-[1000px] font-OpenSans mb-[50px] lg:py-16 max-lg:h-[600px]">
         <div className="hidden lg:block lg:w-[50%] lg:relative lg:max-h-[750px] lg:overflow-hidden">
            <div className="absolute top-4">
               <img src={bgImg} className="object-cover w-[100%] h-[100%]" />
               <img
                  src={bgSvg}
                  className="object-cover absolute top-0 w-[100%] h-[100%]"
               />
               <a href="/">
                  <img
                     src={footLogo}
                     className="absolute top-12 left-10 w-[86px] h-[24px]"
                  />
               </a>
               <p className="text-white absolute top-[32%] left-[15%] w-[80%] text-[44px] leading-[70px] font-bold">
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
               </p>
            </div>
         </div>
         <div className="flex flex-col items-center h-[82%] lg:w-[50%]">
            <div className="h-full w-full flex flex-col">
               <div className="w-[80%] mx-auto">
                  <h1 className="text-center text-[32px] font-semibold">
                     Halo, Pewpeople
                  </h1>
                  <p className="text-center text-gray-500">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                     euismod ipsum et dui rhoncus auctor.
                  </p>
               </div>
               <div className="flex gap-2 py-2 mb-5 border-b border-gray-200">
                  {btn?.map((item, idx) => (
                     <div key={idx}>
                        <Button
                           title={item?.title}
                           btnFunction={() =>
                              setBtnActive({
                                 idx: idx,
                                 route: item?.route,
                              })
                           }
                           className={`${
                              idx != btnActive?.idx
                                 ? "text-gray-300 px-3 py-3"
                                 : "text-primary font-semibold px-3 py-3"
                           } transition-all duration-300`}
                        />
                     </div>
                  ))}
               </div>
               <div className="flex flex-col h-full w-full gap-3 pb-10 md:gap-4 ">
                  {btnActive?.idx == 0 ? (
                     <Workers items={items} handleChange={handleChange} />
                  ) : (
                     <Recruiters items={items} handleChange={handleChange} />
                  )}
               </div>
            </div>
            <div className="w-full flex flex-col gap-4">
               <button
                  onClick={handleRegister}
                  disabled={load}
                  className={`${
                     load ? "cursor-not-allowed" : "cursor-pointer"
                  } bg-btn text-white w-[100%] py-2 rounded-sm font-bold md:py-3`}>
                  {load ? <Spinner /> : "Daftar"}
               </button>
               <Link
                  className="text-center text-[14px] md:text-[16px]"
                  to={"/masuk"}>
                  Anda sudah punya akun?{" "}
                  <span className="text-btn">Masuk disini</span>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Register;
