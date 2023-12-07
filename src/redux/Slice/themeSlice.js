import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "black",
  reducers: {
    changeTheme: (state) => (state === "white" ? "black" : "white"),
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
