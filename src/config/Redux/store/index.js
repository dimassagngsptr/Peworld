import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "../Reducers";

const store = configureStore({
   reducer: rootReducers,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});
export { store };
