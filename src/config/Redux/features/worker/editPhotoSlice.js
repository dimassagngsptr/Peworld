import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { put } from "../../../../utils/update/edit";

export const editPhoto = createAsyncThunk(
   "worker/editPhoto",
   async (_, thunkApi) => {
      const { data } = thunkApi.getState().editPhoto;
      try {
         let formData = new FormData();
         formData.append("photo", data?.apiPhoto);
         const res = await put("workers/profile/photo", formData);
         return res?.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error?.response?.data?.message);
      }
   }
);

const editPhotoSlice = createSlice({
   name: "editPhoto",
   initialState: {
      loading: false,
      data: {
         bgPhoto: null,
         apiPhoto: null,
      },
      response: {},
      error: "",
   },
   reducers: {
      setBgPhoto: (state, action) => {
         state.data.bgPhoto = action.payload;
      },
      setApiPhoto: (state, action) => {
         state.data.apiPhoto = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(editPhoto.pending, (state) => {
            state.loading = true;
         })
         .addCase(editPhoto.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
            state.error = "";
         })
         .addCase(editPhoto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export const { setBgPhoto, setApiPhoto } = editPhotoSlice.actions;
export default editPhotoSlice.reducer;
