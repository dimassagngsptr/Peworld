import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../../../utils/get/get";
import { postApi } from "../../../../utils/post/post";

export const getPortofolio = createAsyncThunk(
   "worker/getPortofolio",
   async (_, thunkApi) => {
      try {
         const res = await getApi("portfolio");
         return res?.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error?.response?.data?.message);
      }
   }
);
export const addPortofolio = createAsyncThunk(
   "worker/addPortofolio",
   async (_, thunkApi) => {
      const { addData } = thunkApi.getState().portofolio;
      console.log(addData);
      try {
         const res = await postApi("portfolio", addData);
         return res?.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error?.response?.data?.message);
      }
   }
);
const portofolioSlice = createSlice({
   name: "portofolio",
   initialState: {
      loading: false,
      data: [],
      addData: {
         application_name: "",
         link_repository: "",
         application: "",
         image: "",
      },
      error: "",
   },
   reducers: {
      setAddData: (state, action) => {
         const { name, value, file_url } = action.payload;
         state.addData.image = file_url;
         state.addData[name] = value;
      },
      setApplication: (state, action) => {
         state.addData.application = action.payload;
      },
   },
   extraReducers: (build) => {
      build
         .addCase(getPortofolio.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getPortofolio.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
         })
         .addCase(getPortofolio.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
      build
         .addCase(addPortofolio.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(addPortofolio.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
         })
         .addCase(addPortofolio.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});
export const { setAddData, setApplication } = portofolioSlice.actions;
export default portofolioSlice.reducer;
