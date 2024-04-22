import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../../utils/post/post";

export const authUser = createAsyncThunk(
   "user/authUser",
   async ({ route, data }, thunkApi) => {
      try {
         const res = await postApi(`${route}`, data);
         return res?.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error?.response?.data?.message);
      }
   }
);

const authSlice = createSlice({
   name: "auth",
   initialState: {
      loading: false,
      data: {},
      error: "",
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(authUser.pending, (state) => {
            state.loading = true;
         })
         .addCase(authUser.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.loading = false;
            state.data = data;
            localStorage.setItem("token", data.token);
         })
         .addCase(authUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});
export default authSlice.reducer;
