import PropTypes from "prop-types";
const Accordion = ({ children, open, idx, }) => {
   return (
      <div className="flex flex-col font-OpenSans roundedbg-red-200">
         <div
            className={`${
               open === idx && open !== 0
                  ? "border-b border-b-gray-200 bg-white px-4 py-3 h-full w-full "
                  : "h-0 w-full bg-white px-3 py-0 "
            } transition-all duration-300`}>
            <div className={`${open === idx ? "block" : "hidden"}`}>
               {children}
            </div>
         </div>
      </div>
   );
};

export default Accordion;
Accordion.propTypes = {
   children: PropTypes.object,
   open: PropTypes.number,
   idx: PropTypes.number,
};
