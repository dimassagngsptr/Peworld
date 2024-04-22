
const Portofolio = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 py-5">
         {Array.from(new Array(12)).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
               <div className="border rounded h-[350px] w-[350px] md:h-[150px] md:w-[200px]"></div>
               <p className="text-2xl md:text-sm">Super App</p>
            </div>
         ))}
      </div>
   );
};

export default Portofolio;
