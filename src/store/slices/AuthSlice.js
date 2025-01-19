import { createSlice } from "@reduxjs/toolkit";

const isLoggedInFromLocalStorage =
  localStorage.getItem("isLoggedIn") == "true";

const initialState = {
  isLoggedIn: isLoggedInFromLocalStorage,
  user: null,
};
const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.setItem("isLoggedIn",false);
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
