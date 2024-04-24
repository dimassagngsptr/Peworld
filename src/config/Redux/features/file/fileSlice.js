import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../../utils/post/post";

export const singgleFile = createAsyncThunk(
   "file/singgleFile",
   async (data, thunkApi) => {
      try {
         let formData = new FormData();
         formData.append("file", data);
         const res = await postApi("upload", formData);
         return res?.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error?.response?.data?.message);
      }
   }
);

const singgleFileSlice = createSlice({
   name: "file",
   initialState: {
      loading: false,
      data: [],
      fileReader: null,
      error: "",
   },
   reducers: {
      setFileReader: (state, action) => {
         state.fileReader = action.payload;
      },
   },
   extraReducers: (build) => {
      build
         .addCase(singgleFile.pending, (state) => {
            state.loading = true;
         })
         .addCase(singgleFile.fulfilled, (state, action) => {
            (state.loading = false), (state.data = action.payload);
            state.error = "";
         })
         .addCase(singgleFile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});
export const { setFileReader } = singgleFileSlice.actions;
export default singgleFileSlice.reducer;
