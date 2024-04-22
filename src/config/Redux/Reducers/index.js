import { combineReducers } from "@reduxjs/toolkit";
import chekRoleSlice from "../features/role/chekRoleSlice";
import userSlice from "../features/users/userSlice";
import authSlice from "../features/auth/authSlice";

export const rootReducers = combineReducers({
   user: userSlice,
   role: chekRoleSlice,
   auth: authSlice,
});
