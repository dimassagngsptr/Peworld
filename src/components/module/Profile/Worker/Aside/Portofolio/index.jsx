
const Portofolio = () => {
   return (
      <div className="grid grid-cols-3 gap-y-6 py-5">
         {Array.from(new Array(12)).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
               <div className="border rounded h-[150px] w-[200px]"></div>
               <p>Super App</p>
            </div>
         ))}
      </div>
   );
};

export default Portofolio;
