import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../../utils/post/post";
import { isSpace } from "../../../../utils/validateInput/validate";

export const addSkill = createAsyncThunk(
   "worker/addSkill",
   async (_, thunkApi) => {
      const { skill_name } = thunkApi.getState().addSkill;
      const validInput = isSpace(skill_name);
      if (validInput) {
         alert("gaboleh kosong");
         return thunkApi.rejectWithValue("skill tidak boleh kosong");
      }
      try {
         const res = await postApi("skills", { skill_name });
         return res?.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error?.response?.data?.message);
      }
   }
);

const addSkillSlice = createSlice({
   name: "addSkill",
   initialState: {
      loading: false,
      skill_name: "",
      data: [],
      error: "",
      message: "",
   },
   reducers: {
      onChangeSkill: (state, action) => {
         state.skill_name = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(addSkill.pending, (state) => {
            state.loading = true;
         })
         .addCase(addSkill.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.loading = false;
            state.data = data;
            state.error = "";
         })
         .addCase(addSkill.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});
export const { onChangeSkill } = addSkillSlice.actions;
export default addSkillSlice.reducer;
