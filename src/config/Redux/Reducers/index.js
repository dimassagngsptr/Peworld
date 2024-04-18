import { combineReducers } from "@reduxjs/toolkit";
import chekRoleSlice from "../features/chekRoleSlice";
import userSlice from "../features/userSlice";

export const rootReducers = combineReducers({
   user: userSlice,
   role: chekRoleSlice,
});
