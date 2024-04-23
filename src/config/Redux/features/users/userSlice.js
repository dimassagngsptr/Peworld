import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../../../utils/get/get";

export const getActiveUser = createAsyncThunk(
  "user/getActiveUser",
  async (role, thunkApi) => {
    try {
      const res = await getApi(`${role}/profile`);
      return res?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);
export const getSkills = createAsyncThunk(
  "user/getSkills",
  async (_, thunkApi) => {
    try {
      const res = await getApi("skills");
      return res?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);
//post masukan kedalam parameter
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    activeUser: [],
    skills: [],
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
    builder
      .addCase(getSkills.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload;
        state.error = "";
      })
      .addCase(getSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
