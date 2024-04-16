import PropTypes from "prop-types";

const Card = ({
   img,
   job,
   desc,
   location,
   skill,
   btnTitle,
   icon,
   name,
   className,
   btnFunc,
   id,
}) => {
   return (
      <>
         <div className="relative font-OpenSans bg-white lg:min-w-[250px] shadow-xl min-h-[400px] rounded-md py-5 px-2 flex flex-col max-w-[250px] items-center text-center">
            <img src={img} alt="img" className={className} />
            {name && <h1 className="font-semibold">{name}</h1>}
            <small
               className={`${
                  skill
                     ? "text-gray-500 text-[14px] pt-3"
                     : "py-4 text-gray-500"
               }`}>
               {job}
            </small>
            {location ? (
               <div className="flex flex-wrap justify-center pt-2 gap-2 items-center">
                  <img src={icon} alt="" className="h-2 w-2 text-black" />
                  <small className="text-gray-500">{location}</small>
               </div>
            ) : (
               <p className=" px-4">{desc}</p>
            )}

            {skill && (
               <>
                  <div className="w-full flex flex-wrap gap-2 justify-center mt-6 max-h-[30px] overflow-hidden">
                     {skill?.map((item) => (
                        <button
                           key={item}
                           className="bg-btn/50 border border-btn text-white text-[12px] px-2 py-0.5">
                           {item}
                        </button>
                     ))}
                  </div>
                  <button
                     className="absolute bottom-3 bg-primary text-white py-2 px-3 rounded mt-12 w-[90%]"
                     onClick={() => btnFunc(id)}>
                     {btnTitle}
                  </button>
               </>
            )}
         </div>
      </>
   );
};

export default Card;
Card.propTypes = {
   img: PropTypes.string,
   job: PropTypes.string,
   desc: PropTypes.string,
   location: PropTypes.string,
   skill: PropTypes.array,
   btnTitle: PropTypes.string,
   icon: PropTypes.string,
   name: PropTypes.string,
   className: PropTypes.string,
   id: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.number,
      PropTypes.any,
      PropTypes.array,
   ]),
   btnFunc: PropTypes.func,
};
