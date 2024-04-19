import { combineReducers } from "@reduxjs/toolkit";
import chekRoleSlice from "../features/chekRoleSlice";
import userSlice from "../features/userSlice";
import loginSlice from "../features/auth/loginSlice";

export const rootReducers = combineReducers({
   user: userSlice,
   role: chekRoleSlice,
   login: loginSlice,
});
