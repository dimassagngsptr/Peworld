import footLogo from "../../../assets/images/landing-page/foot-logo.png";

const Footer = () => {
   const year = new Date().getFullYear();
   return (
      <footer className="relative bottom-0 w-full px-12 md:px-[11%] lg:px-[9%] py-8 bg-primary text-white flex flex-col justify-between h-[250px] md:h-[310px] lg:h-[400px]">
         <div className="max-w-[70%] flex flex-col gap-3 lg:gap-7 md:max-w-[40%] lg:max-w-[30%]">
            <img
               src={footLogo}
               alt="logo"
               className="h-[30px] w-[100px] md:h-[40px] md:w-[130px] lg:h-[50px] lg:w-[178px]"
            />
            <p className="text-[12px] md:text-[14px] lg:text-[18px] lg:leading-[28px]">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
               euismod ipsum et dui rhoncus auctor.
            </p>
         </div>
         <div className="flex justify-between border-t border-gray-200 py-5 text-[12px] md:text-[14px] lg:text-[18px] lg:leading-[28px]">
            <p>{year} Peworld. All right reserved</p>
            <div className="flex gap-5">
               <button>Telepon</button>
               <button>Email</button>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
