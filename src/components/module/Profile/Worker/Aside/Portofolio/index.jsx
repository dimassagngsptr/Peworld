import { useSelector } from "react-redux";
const Portofolio = () => {
   const { data } = useSelector((state) => state.portofolio);
console.log(data)
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 py-5">
         {data?.data &&
            data?.data?.map((item) => (
               <div
                  key={item?.id}
                  className="flex flex-col items-center cursor-pointer">
                  <div className="rounded h-[350px] w-[350px] md:h-[150px] md:w-[220px] ">
                     <img
                        src={item?.image}
                        className="w-full h-full object-cover rounded"
                     />
                  </div>
                  <p className="text-2xl md:text-sm">
                     {item?.application_name}
                  </p>
               </div>
            ))}
      </div>
   );
};

export default Portofolio;
