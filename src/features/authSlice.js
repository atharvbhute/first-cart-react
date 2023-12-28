import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  signUpError : ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
    },

    setSignUpError : (state, action) => {
      state.signUpError = action.payload.error;
    }
  },
});

export const { login, logout, setSignUpError } = authSlice.actions;
export default authSlice.reducer;
