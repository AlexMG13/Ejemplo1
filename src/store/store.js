import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/Cities";

export const store = configureStore({
  reducer: {
    citiesReducer: citiesReducer,
  },
});
