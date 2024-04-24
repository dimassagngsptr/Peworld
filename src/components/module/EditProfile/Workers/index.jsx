import ProfileInformation from "./ProfileInformation";
import Form from "./Form";
import { toastify } from "../../../base/Toastify";
import { useDispatch, useSelector } from "react-redux";
import { editWorker } from "../../../../config/Redux/features/worker/editSlice";
import {
   getActiveUser,
   setInputValue,
} from "../../../../config/Redux/features/users/userSlice";
const EditWorkers = () => {
   const dispatch = useDispatch();
   const { activeUser, skills, editData } = useSelector((state) => state.user);
   const { loading } = useSelector((state) => state.editWorker);
   const handleChange = (e) => {
      dispatch(
         setInputValue({ name: e?.target?.name, value: e?.target?.value })
      );
   };
   const handleEdit = async () => {
      try {
         const response = await dispatch(editWorker(editData));
         dispatch(getActiveUser("workers"));
         toastify("success", response?.payload?.message);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <section className="flex flex-col md:flex-row md:relative py-4 px-2 gap-3 w-full bg-gray-200 h-[1500px] lg:h-[1000px] lg:px-4">
         <ProfileInformation myProfile={activeUser} />
         <Form
            activeUser={editData}
            skills={skills?.data}
            handleEdit={handleEdit}
            handleChange={handleChange}
            loading={loading}
         />
      </section>
   );
};

export default EditWorkers;
