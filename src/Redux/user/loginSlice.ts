import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name : "userInfo",
    initialState : {
        username : "",
        isLoggedIn : false,
    },
    reducers : {
        handleLogin : (state, action) => {
            return {...state, ...action.payload}
        }
    }
})

export const { handleLogin } = userInfoSlice.actions;
export default userInfoSlice.reducer