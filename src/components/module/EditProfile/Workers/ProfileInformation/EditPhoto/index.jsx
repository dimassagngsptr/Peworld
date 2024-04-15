import Input from "../../../../../base/Input";
import BackupIcon from "@mui/icons-material/Backup";
import PropTypes from "prop-types";
const EditPhotos = ({ handleChange, selectedImage }) => {
   return (
      <div
         className="relative h-[250px] w-[400px] lg:w-[500px] rounded-md flex flex-col justify-center items-center"
         style={{
            backgroundImage: `url(${selectedImage?.bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
         }}>
         <Input
            name="file"
            onChange={handleChange}
            type="file"
            placeholder="masukan file"
            className="w-[400px] lg:w-[500px] bg-transparent opacity-0 h-[250px] z-10 cursor-pointer"
         />
         <div className="absolute top-[50px]">
            <BackupIcon color="disabled" sx={{ fontSize: 100 }} />
         </div>
         <p className="absolute top-2/3">
            Upload gambar untuk update foto profile
         </p>
      </div>
   );
};

export default EditPhotos;
EditPhotos.propTypes = {
   handleChange: PropTypes.func,
   selectedImage: PropTypes.object,
};
