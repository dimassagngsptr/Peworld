import { createAsyncThunk } from "@reduxjs/toolkit";
import { put } from "../../../../../utils/update/edit";

export const editWorkerSlice = createAsyncThunk(
  "worker/editProfile",
  async (data, thunkApi) => {
    try {
      const res = await put()
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);
