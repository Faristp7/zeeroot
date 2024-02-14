import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./user/loginSlice";

const rootReducer = combineReducers({
  user: loginSlice,
});

export default rootReducer;
