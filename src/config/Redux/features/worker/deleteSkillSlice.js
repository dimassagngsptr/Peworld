import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteApi } from "../../../../utils/delete/delete";

export const deleteSkill = createAsyncThunk(
   "worker/deleteSkill",
   async (id, thunkApi) => {
      try {
         const res = await deleteApi(`skills/${id}`);
         return { data: res?.data, id };
      } catch (error) {
         return thunkApi.rejectWithValue(error?.response?.data?.message);
      }
   }
);

const deleteSkillSlice = createSlice({
   name: "deleteSkill",
   initialState: {
      loading: null,
      data: [],
      error: "",
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(deleteSkill.pending, (state, action) => {
            state.loading = action.meta.arg;
            console.log(action.meta.arg);
         })
         .addCase(deleteSkill.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.loading = null;
            state.data = data;
            state.error = "";
         })
         .addCase(deleteSkill.rejected, (state, action) => {
            state.loading = null;
            state.error = action.error.message;
         });
   },
});
export default deleteSkillSlice.reducer;
