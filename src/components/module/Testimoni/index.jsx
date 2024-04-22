import Slider from "react-slick";
import SampleNextArrow from "../../base/ButtonArrow/Next";
import SamplePrevArrow from "../../base/ButtonArrow/Prev";
import Card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import "./index.css";
import { useEffect, useState } from "react";
const Testimoni = ({ cardItems }) => {
   const [slideShow, setSlideShow] = useState(1);
   const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: slideShow,
      slidesToScroll: 1,
      variableWidth: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   useEffect(() => {
      const desktop = window.matchMedia("(min-width: 1200px)");
      const tablet = window.matchMedia("(min-width: 800px)");
      const handleResize = () => {
         if (desktop.matches === true) {
            setSlideShow(3);
         } else if (tablet.matches === true) {
            setSlideShow(2);
         } else {
            setSlideShow(1);
         }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [slideShow]);
   return (
      <section className="bg-gray-100 py-3 font-OpenSans">
         <div className="p-2 md:w-[70%] md:mx-auto">
            <h2 className="text-center font-semibold text-[18px] leading-[52px] mb-3 lg:text-[22px]">
               Pendapat mereka tentang{" "}
               <span className="text-primary">Peworld</span>
            </h2>
            <Slider {...settings}>
               {cardItems?.map((item, idx) => (
                  <div key={idx} className="testimoni">
                     <Card
                        img={item?.img}
                        job={item?.job}
                        desc={item?.desc}
                        className="border-[5px] border-solid border-btn rounded-full max-w-[150px] max-h-[150px]"
                     />
                  </div>
               ))}
            </Slider>
         </div>
      </section>
   );
};

export default Testimoni;

Testimoni.propTypes = {
   cardItems: PropTypes.arrayOf(
      PropTypes.shape({
         img: PropTypes.string,
         job: PropTypes.string,
         desc: PropTypes.string,
      })
   ),
};
