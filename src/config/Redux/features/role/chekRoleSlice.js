import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../../../utils/get/get";
import bcrypt from "bcryptjs";

export const checkRoleUser = createAsyncThunk(
  "role/getRoleUser",
  async (_, thunkApi) => {
    try {
      const res = await getApi("auth/check-role");
      return res?.data
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);
const checkRoleSlice = createSlice({
  name: "role",
  initialState: {
    loading: false,
    role: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkRoleUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkRoleUser.fulfilled, (state, action) => {
        const { role } = action.payload.data.data;
        state.loading = false;
        state.role = action.payload;
        if (role) {
          localStorage.setItem("role", bcrypt.hashSync(role, 10));
        }
        state.error = "";
      })
      .addCase(checkRoleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default checkRoleSlice.reducer;
