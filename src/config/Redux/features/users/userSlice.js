import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../../../utils/get/get";

export const getActiveUser = createAsyncThunk(
   "user/getActiveUser",
   async (role) => {
      const res = await getApi(`${role}/profile`)
         .then((res) => {
            return res?.data;
         })
         .catch((err) => {
            return err;
         });
      return res;
   }
);
//post masukan kedalam parameter
const userSlice = createSlice({
   name: "user",
   initialState: {
      loading: false,
      activeUser: [],
      error: "",
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getActiveUser.pending, (state) => {
            state.loading = true;
         })
         .addCase(getActiveUser.fulfilled, (state, action) => {
            state.loading = false;
            state.activeUser = action.payload;
            state.error = "";
         })
         .addCase(getActiveUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export default userSlice.reducer;
