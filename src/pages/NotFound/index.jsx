import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <section className="h-screen w-screen bg-primary text-white flex flex-col gap-5 justify-center items-center font-OpenSans">
         <div className="flex items-center">
            <p>404</p> <span className="bg-btn w-0.5 h-6 mx-5"></span>{" "}
            <p>Page Not Found</p>
         </div>
         <Link to={"/"}>Kembali ke Home</Link>
      </section>
   );
};

export default NotFound;
