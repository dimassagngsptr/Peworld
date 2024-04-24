import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chekRoleSlice from "../features/role/chekRoleSlice";
import userSlice from "../features/users/userSlice";
import authSlice from "../features/auth/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import editSlice from "../features/worker/editSlice";
import addSkillSlice from "../features/worker/addSkillSlice";
import deleteSkillSlice from "../features/worker/deleteSkillSlice";
import editPhotoSlice from "../features/worker/editPhotoSlice";
import portofolioSlice from "../features/worker/portofolioSlice";
import singgleFileSlice from "../features/file/fileSlice";

const rootReducers = combineReducers({
   user: userSlice,
   role: chekRoleSlice,
   auth: authSlice,
   editWorker: editSlice,
   addSkill: addSkillSlice,
   deleteSkill: deleteSkillSlice,
   editPhoto: editPhotoSlice,
   portofolio: portofolioSlice,
   file: singgleFileSlice,
});
const persistConfig = {
   key: "root",
   storage,
   whitelist: [
      "user",
      "addSkill",
      "deleteSkill",
      "role",
      "auth",
      "editWroker",
      "portofolio",
   ],
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
