import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../../utils/get/get";

export const getActiveUser = createAsyncThunk(
  "users/getActiveUser",
  async (role, { getState }) => {
    const state = getState().user;
    if (state.loading !== "pending") {
      return;
    }
    const response = await getApi(`${role}/profile`);
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: "idle",
    activeUser: [],
    currentRequestId: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActiveUser.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getActiveUser.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.activeUser = action.payload;
          console.log(action);
          state.currentRequestId = undefined;
        }
      })
      .addCase(getActiveUser.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export default userSlice.reducer;
