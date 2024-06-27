import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="py-10 px-12 md:px-14 lg:px-16">
      <div className="w-[100%] md:w-[90%] mx-auto h-[100px] md:h-[150px] lg:h-[227px] bg-primary rounded-tl-xl rounded-br-xl flex justify-around items-center px-5 gap-2 md:gap-10">
        <h1 className="text-white font-semibold text-[12px] md:text-[28px] md:leading-10 md:w-[50%] lg:text-[36px] lg:leading-[56px] lg:w-[28%] lg:font-semibold">
          Rekrut <span className="text-btn">talenta</span>{" "}
          <span className="text-btn">terbaik</span> untuk revolusi{" "}
          <span className="text-btn">4.0</span>
        </h1>
        <Link
          to={"/masuk"}
          className="bg-white h-10 w-[100%] md:w-[25%] lg:w-[15%] text-[12px] lg:text-[16px] px-1 text-primary rounded-sm"
        >
          Mulai Dari Sekarang
        </Link>
      </div>
    </section>
  );
};

export default Footer;
