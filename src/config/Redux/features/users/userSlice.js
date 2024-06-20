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
export const getExperience = createAsyncThunk(
  "user/getExperience",
  async (_, thunkApi) => {
    try {
      const res = await getApi("experience");
      return res?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);
function pickDataFromInitialState(initialState, data) {
  const pickedData = {};
  for (const key in initialState) {
    if (key in data) {
      pickedData[key] = data[key];
    } else {
      pickedData[key] = initialState[key];
    }
  }
  return pickedData;
}
//post masukan kedalam parameter
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    activeUser: [],
    editData: {
      name: "",
      domicile: "",
      job_desk: "",
      workplace: "",
      description: "",
    },
    skills: [],
    experience: [],
    error: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      const { name, value } = action.payload;
      state.editData[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getActiveUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActiveUser.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.loading = false;
        state.activeUser = data;
        state.editData = pickDataFromInitialState(state.editData, data);
        state.error = "";
      })
      .addCase(getActiveUser.rejected, (state, action) => {
        state.loading = false;
        // localStorage.removeItem("token");
        // localStorage.removeItem("refreshToken");
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
    builder
      .addCase(getExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.experience = action.payload;
        state.error = "";
      })
      .addCase(getExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setInputValue } = userSlice.actions;
export default userSlice.reducer;
