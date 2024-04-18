import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../../utils/get/get";

export const checkRoleUser = createAsyncThunk(
   "role/getRoleUser",
   async (_, { getState }) => {
      const state = getState().role;
      if (state.loading !== "pending") {
         return;
      }
      const response = await getApi("auth/check-role");
      return response;
   }
);
const checkRoleSlice = createSlice({
   name: "role",
   initialState: {
      loading: "idle",
      role: [],
      currentRequestId: undefined,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(checkRoleUser.pending, (state, action) => {
            if (state.loading === "idle") {
               state.loading = "pending";
               state.currentRequestId = action.meta.requestId;
            }
         })
         .addCase(checkRoleUser.fulfilled, (state, action) => {
            const { requestId } = action.meta;
            if (
               state.loading === "pending" &&
               state.currentRequestId === requestId
            ) {
               state.loading = "idle";
               state.role = action.payload;
               state.currentRequestId = undefined;
            }
         })
         .addCase(checkRoleUser.rejected, (state, action) => {
            const { requestId } = action.meta;
            if (
               state.loading === "pending" &&
               state.currentRequestId === requestId
            ) {
               state.loading = "idle";
               state.error = action.error;
               state.currentRequestId = undefined;
            }
         });
   },
});

export default checkRoleSlice.reducer;
