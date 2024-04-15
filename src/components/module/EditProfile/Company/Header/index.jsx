import PropTypes from "prop-types";
const Header = ({ title }) => {
   return (
      <div className="relative bg-primary h-[100px] w-full md:h-[200px]">

         {title && (
            <h2 className="text-white font-semibold text-[22px] font-OpenSans absolute left-8 top-10 md:hidden">
               {title}
            </h2>
         )}
      </div>
   );
};

export default Header;
Header.propTypes = {
   title: PropTypes.string,
};
