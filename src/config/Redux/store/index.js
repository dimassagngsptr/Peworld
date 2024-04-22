import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "../Reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
   reducer: rootReducers,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});
export { store };
