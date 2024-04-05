import bgImg from "../../../../assets/images/login/true-agency-o4UhdLv5jbQ-unsplash 1.png";
import bgSvg from "../../../../assets/images/login/bg-login.png";
import footLogo from "../../../../assets/images/landing-page/foot-logo.png";
const LoginImg = () => {
   return (
      <section className="w-[70%] h-[100%]">
         <div className="absolute top-4">
            <img src={bgImg} className="object-cover w-[650px] h-[700px]" />
            <img
               src={bgSvg}
               className="object-cover absolute top-0 w-[650px] h-[700px]"
            />
            <img
               src={footLogo}
               className="absolute top-12 left-10 w-[86px] h-[24px]"
            />
            <p className="text-white absolute top-[32%] left-[15%] w-[80%] text-[44px] leading-[70px] font-bold">
               Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </p>
         </div>
      </section>
   );
};

export default LoginImg;
