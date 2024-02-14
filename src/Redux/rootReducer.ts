import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./user/loginSlice";

const rootReducer = combineReducers({
  userInfo: loginSlice,
});

export default rootReducer;
