import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "black",
  reducers: {
    changeTheme: (state) => (state === "white" ? "black" : "white"),
  },
});

// this is for dispatch
export const { changeTheme } = themeSlice.actions;

// this is for configureStore
export default themeSlice.reducer;
