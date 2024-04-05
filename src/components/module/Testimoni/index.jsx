import Slider from "react-slick";
import SampleNextArrow from "../../base/ButtonArrow/Next";
import SamplePrevArrow from "../../base/ButtonArrow/Prev";
import Card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import "./index.css";
const Testimoni = ({ cardItems }) => {
   const desktop = useMediaQuery({ minWidth: 1200 });
   const tablet = useMediaQuery({ minWidth: 800 });
   const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: desktop ? 3 : tablet ? 2 : 1,
      slidesToScroll: 1,
      variableWidth: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
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
                     <Card img={item?.img} job={item?.job} desc={item?.desc} />
                  </div>
               ))}
            </Slider>
         </div>
      </section>
   );
};

export default Testimoni;

Testimoni.propTypes = {
   cardItems: PropTypes.shape({
      img: PropTypes.string,
      job: PropTypes.string,
      desc: PropTypes.string,
   }),
};
