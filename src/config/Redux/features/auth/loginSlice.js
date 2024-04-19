import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../../utils/post/post";

export const loginUser = createAsyncThunk("user/loginUser", async (value) => {
   const res = await postApi("auth/login", value)
      .then((res) => {
         return res;
      })
      .catch((err) => {
         return err;
      });
   return res;
});

const loginSlice = createSlice({
   name: "login",
   initialState: {
      loading: false,
      data: {},
      error: "",
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loginUser.pending, (state) => {
            state.loading = true;
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
         });
   },
});
export default loginSlice.reducer;
