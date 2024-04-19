import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../../utils/get/get";

export const checkRoleUser = createAsyncThunk("role/getRoleUser", async () => {
   const res = await getApi("auth/check-role")
      .then((res) => {
         return res.data;
      })
      .catch((err) => {
         return err;
      });
   return res;
});
const checkRoleSlice = createSlice({
   name: "role",
   initialState: {
      loading: false,
      role: [],
      error: "",
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(checkRoleUser.pending, (state) => {
            state.loading = true;
         })
         .addCase(checkRoleUser.fulfilled, (state, action) => {
            state.loading = false;
            state.role = action.payload;
            state.error = "";
         })
         .addCase(checkRoleUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            console.log(action);
         });
   },
});

export default checkRoleSlice.reducer;
