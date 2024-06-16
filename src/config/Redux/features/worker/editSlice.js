import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { put } from "../../../../utils/update/edit";

export const editWorker = createAsyncThunk(
   "worker/editProfile",
   async (data, thunkApi) => {
      try {
         const res = await put("workers/profile", data);
         return res?.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error?.response?.data?.message);
      }
   }
);

const editWorkerSlice = createSlice({
   name: "editWorker",
   initialState: {
      loading: false,
      data: {},
      error: "",
      message: "",
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(editWorker.pending, (state) => {
            state.loading = true;
         })
         .addCase(editWorker.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.loading = false;
            state.data = data;
            state.error = "";
         })
         .addCase(editWorker.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});
export default editWorkerSlice.reducer;
