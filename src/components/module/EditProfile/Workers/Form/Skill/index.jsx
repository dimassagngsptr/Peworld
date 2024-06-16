import Button from "../../../../../base/Button";
import Input from "../../../../../base/Input";
import { toastify } from "../../../../../base/Toastify";
import Spinner from "../../../../../base/Button/Spinner";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
   addSkill,
   onChangeSkill,
} from "../../../../../../config/Redux/features/worker/addSkillSlice";
import { getSkills } from "../../../../../../config/Redux/features/users/userSlice";
import { deleteSkill } from "../../../../../../config/Redux/features/worker/deleteSkillSlice";

const Skill = ({ mySkill }) => {
   const dispatch = useDispatch();
   const { skill_name, loading } = useSelector((state) => state.addSkill);
   const { loading:load } = useSelector((state) => state.deleteSkill);

   const handleChange = (e) => {
      dispatch(onChangeSkill(e?.target?.value));
   };
   const handleAddSkill = async () => {
      try {
         const response = await dispatch(addSkill()).unwrap();
         toastify("success", response?.message);
         dispatch(getSkills()).unwrap();
      } catch (error) {
         console.log(error);
      }
   };

   const handleDelete = async (id) => {
      try {
         const response = await dispatch(deleteSkill(id)).unwrap();
         toastify("success", response?.data?.message);
         dispatch(getSkills()).unwrap();
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <section className="flex flex-col py-2 gap-4 font-OpenSans">
         <div className="flex gap-4 items-center md:justify-between md:px-3">
            <div className="w-[80%]">
               <Input
                  textArea={false}
                  name="skill_name"
                  value={skill_name}
                  onChange={handleChange}
                  placeholder="Java"
                  className="bg-white px-2 py-3 border border-gray-300 rounded outline-none"
               />
            </div>
            {!loading ? (
               <Button
                  className={`bg-btn p-3 rounded text-white outline-none`}
                  title={"Simpan"}
                  btnFunction={handleAddSkill}
               />
            ) : (
               <Button
                  title={<Spinner purple={false} />}
                  className={`bg-btn p-3 rounded w-[100px] text-white`}
               />
            )}
         </div>
         <div className="flex flex-wrap gap-3 md:px-3">
            {mySkill?.map(({ id, skill_name }) => (
               <button
                  className="bg-btn/70 border border-btn px-3 flex justify-between py-1 rounded-md outline-none"
                  key={id}>
                  <p className="text-white font-semibold">{skill_name}</p>
                  {load === id ? (
                     <div className="ml-4">
                        <Spinner cirlce={true} />
                     </div>
                  ) : (
                     <svg
                        onClick={() => handleDelete(id)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#33415580"
                        className="w-6 h-6 ml-4">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18 18 6M6 6l12 12"
                        />
                     </svg>
                  )}
               </button>
            ))}
         </div>
      </section>
   );
};

export default Skill;
Skill.propTypes = {
   mySkill: PropTypes.array,
};
