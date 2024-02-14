import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "userInfo",
  initialState: {
    username: "",
    isLoggedIn: false,
  },
  reducers: {
    handleLogin: (_state, action) => {
      return { ...action.payload };
    },
  },
});

export const { handleLogin } = loginSlice.actions;
export default loginSlice.reducer;

export type RootState = {
  userInfo: {
    username: string;
    isLoggedIn: boolean;
  };
};
