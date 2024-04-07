import PropTypes from "prop-types";
function SampleNextArrow({ onClick }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         onClick={onClick}
         stroke="currentColor"
         className={`absolute right-2 top-[50%] md:-right-10 w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full cursor-pointer text-white shadow-lg hover:scale-110 bg-primary`}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
         />
      </svg>
   );
}
export default SampleNextArrow;

SampleNextArrow.propTypes = {
   onClick: PropTypes.func,
};
