import { useState } from "react";
import Button from "../../../../../base/Button";
import Input from "../../../../../base/Input";
import { postApi } from "../../../../../../utils/post/post";
import { deleteApi } from "../../../../../../utils/delete/delete";
import { isSpace } from "../../../../../../utils/validateInput/validate";
import { toastify } from "../../../../../base/Toastify";
import Spinner from "../../../../../base/Button/Spinner";
import PropTypes from "prop-types";

const Skill = ({ mySkill, getSkill }) => {
   const [skill, setSkill] = useState("");
   const [load, setLoad] = useState(false);
   const [loading, setLoading] = useState(null);
   const handleChange = (e) => {
      setSkill(e?.target?.value);
   };

   const addSkill = async () => {
      const validInput = isSpace(skill);
      if (validInput) {
         return alert("gaboleh kosong");
      }
      setLoad(true);
      try {
         const response = await postApi("skills", { skill_name: skill });
         toastify("success", response?.data?.message);
         getSkill();
         setSkill("");
      } catch (error) {
         console.log(error);
      } finally {
         setLoad(false);
      }
   };
   const handleDelete = async (id) => {
      setLoading(id);
      try {
         const response = await deleteApi(`skills/${id}`);
         toastify("success", response?.data?.message);
         getSkill();
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(null);
      }
   };
   return (
      <section className="flex flex-col py-2 gap-4 font-OpenSans">
         <div className="flex gap-4 items-center md:justify-between md:px-3">
            <div className="w-[80%]">
               <Input
                  textArea={false}
                  name="skill"
                  value={skill}
                  onChange={handleChange}
                  placeholder="Java"
                  className="bg-white px-2 py-3 border border-gray-300 rounded outline-none"
               />
            </div>
            {!load ? (
               <Button
                  className={`bg-btn p-3 rounded text-white outline-none`}
                  title={"Simpan"}
                  btnFunction={addSkill}
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
                  {loading === id ? (
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
   getSkill: PropTypes.func,
};
