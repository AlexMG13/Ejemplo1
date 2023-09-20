import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/User";

const initialState = {
  user: null,
  token: null,
};

const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(userActions.sign_in.fulfilled, (state, action) => {
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(userActions.sign_up.fulfilled, (state, action) => {
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(userActions.sign_up_google.fulfilled, (state, action) => {
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(userActions.authenticate.fulfilled, (state, action) => {
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(userActions.sign_out, (state, action) => {
      return {
        ...initialState,
        user: null,
        token: null,
      };
    })
);
export default userReducer;
