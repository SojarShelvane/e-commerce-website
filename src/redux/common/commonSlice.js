import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHeaderMenuList } from "./commonAPI";

// First, create the thunk
export const fetchHeaderMenuList = createAsyncThunk(
  "common/fetchHeaderMenuList",
  async () => {
    const response = await getHeaderMenuList();
    return response.data;
  }
);

const initialState = {
  status: "idel",
  headerMenus: [],
  error: null,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeaderMenuList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchHeaderMenuList.fulfilled, (state, action) => {
        state.headerMenus = action.payload;
        state.status = "successed";
      })
      .addCase(fetchHeaderMenuList.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });
  },
});

export default commonSlice.reducer;
