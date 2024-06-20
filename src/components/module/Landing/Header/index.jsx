import { useNavigate } from "react-router-dom";
import headImg from "../../../../assets/images/landing-page/landing-page_1.png";
import Button from "../../../base/Button";
const Header = () => {
   const navigate = useNavigate();
   return (
      <section className="font-OpenSans md:flex md:justify-between md:gap-2 lg:gap-24 md:h-[450px] lg:h-[617px] md:items-center md:bg-none lg:mt-10 px-10 md:px-[10%]">
         <div className="gap-5 flex flex-col md:max-w-[40%] justify-center md:gap-10 ">
            <h1 className="font-semibold text-[32px] md:text-[25px] lg:text-[40px] md:leading-[30px] lg:leading-[70px]">
               Talenta <span className="text-primary">terbaik</span> negri untuk{" "}
               <span className="text-primary">perubahan</span> revolusi 4.0
            </h1>
            <p className="text-gray-500 leading-[18px] text-[14px] font-normal lg:leading-8 lg:text-[20px]">
               Peworld telah menyalurkan lebih dari 50.000.000 talenta berbakat
               dan berkualitas sesuai dengan kebutuhan industri ke 1.000+ hiring
               partner Peworld di seluruh dunia
            </p>
            <Button
               title={"Mulai Sekarang"}
               className="bg-primary py-3 px-5 rounded-sm text-white font-semibold w-[220px]"
               btnFunction={() => navigate("/masuk")}
            />
         </div>
         <div className="hidden md:block md:w-[50%] lg:w-[617px]">
            <img
               src={headImg}
               alt="landing page"
               className="max-w-full md:mx-auto"
            />
         </div>
      </section>
   );
};

export default Header;
