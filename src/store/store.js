import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/Cities";
import userReducer from "./reducers/User";

export const store = configureStore({
  reducer: {
    citiesReducer: citiesReducer,
    userReducer: userReducer,
  },
});
