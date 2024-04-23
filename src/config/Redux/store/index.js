import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chekRoleSlice from "../features/role/chekRoleSlice";
import userSlice from "../features/users/userSlice";
import authSlice from "../features/auth/authSlice";
import editSlice from "../features/worker/updateProfile/editSlice";
import addSkillSlice from "../features/worker/skills/addSkillSlice";
import deleteSkillSlice from "../features/worker/skills/deleteSkillSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
   user: userSlice,
   role: chekRoleSlice,
   auth: authSlice,
   editWorker: editSlice,
   addSkill: addSkillSlice,
   deleteSkill: deleteSkillSlice,
});
const persistConfig = {
   key: "rootReducers",
   storage,
   whitelist: ["user", "addSkill", "deleteSkill", "role", "auth", "editWroker"],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});
export const persistor = persistStore(store);
