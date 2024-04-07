import wave from '../../../../../assets/wave.svg'
const Header = () => {
   return (
      <div className="relative bg-primary h-[100px] w-full">
         {/* <img
            src={wave}
            alt=""
            className="absolute -right-28 rounded-br-md top-[229px] rotate-90 w-[300px] object-cover"
         /> */}
         <h2 className="text-white font-semibold text-[22px] font-OpenSans absolute left-8 top-10">
            Edit Perusahaan
         </h2>
      </div>
   );
};

export default Header;
