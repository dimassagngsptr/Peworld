import bcrypt from "bcryptjs";

export const compareBcrypt = (value) => {
   const compareValue = localStorage.getItem("role");
   if (bcrypt.compare(value, compareValue)) {
      return true;
   } else {
      return false;
   }
};
