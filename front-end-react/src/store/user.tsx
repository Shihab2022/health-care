/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  info: null,
  token: null,
  loading: false,
  cities: [],
  credits: 0,
};

export const commonSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // SET_USER: (state: { info: any; }, action: { user: any; }) => {
    //   state.info = action.user;
    // },
    SET_TOKEN: (state: any, action: any) => {
      console.log({"action.token":action.token})
      state.token = action.token;
    },
    SET_ORG_NAME: (state: { info: any; }, action: { payload: any; }) => {
      state.info = { ...state?.info, organisation: action?.payload };
    },
    SET_USER_PROFILE_IMAGE: (state: { info: any; }, action: { payload: any; }) => {
      state.info = { ...state?.info, profileImage: action?.payload };
    },
  },
});


export const {
  SET_TOKEN,
//   SET_USER,
//   SET_CREDITS,
  SET_ORG_NAME,
  SET_USER_PROFILE_IMAGE,
} = commonSlice.actions;

export default commonSlice.reducer;