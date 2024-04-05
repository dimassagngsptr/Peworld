import PropTypes from "prop-types";
function SamplePrevArrow(props) {
   const { onClick } = props;
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         onClick={onClick}
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className={`absolute left-2 md:-left-10 top-[50%] z-10  w-[30px] md:w-[40px] md:h-[40px] h-[30px] rounded-full cursor-pointer text-white shadow-lg hover:scale-110 bg-primary`}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
         />
      </svg>
   );
}
export default SamplePrevArrow;

SamplePrevArrow.propTypes = {
   props: PropTypes.shape({
      onClick: PropTypes.func.isRequired,
   }),
};
