import PropTypes from "prop-types";

const Card = ({ img, job, desc }) => {
   return (
      <>
         <div className="font-OpenSans bg-white shadow-xl h-[320px] rounded-md py-5 px-2 flex flex-col max-w-[250px] items-center text-center">
            <img
               src={img}
               alt="img"
               className="border-[5px] border-solid border-btn rounded-full max-w-[150px] max-h-[150px]"
            />
            <small className="py-4 text-gray-500">{job}</small>
            <p className="mt-2">{desc}</p>
         </div>
      </>
   );
};

export default Card;
Card.propTypes = {
   img: PropTypes.string,
   job: PropTypes.string,
   desc: PropTypes.string,
};
