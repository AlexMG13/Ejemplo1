import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/User";

const initialState = {
  user: {
    email: "",
    _id: "",
  },
};

const userReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(userActions.sign_in, (state, action) => {
      return { user: action.payload.user };
    })
    .addCase(userActions.sign_up.fulfilled, (stateActual, action) => {
      return {
        user: action.payload.user,
      };
    })
    .addCase(userActions.authenticate.fulfilled, (state, action) => {
      return {
        user: action.payload,
      };
    })
    .addCase(userActions.sign_out.fulfilled, (state, action) => {
      return initialState;
    });
});
export default userReducer;
