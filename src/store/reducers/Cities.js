import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/Cities";

const initialState = {
  cities: [
    {
      name: "",
      country: "",
      photo: "",
      description: "",
      itineraries: [],
    },
  ],
  city: [
    {
      name: "",
      country: "",
      photo: "",
      description: "",
      itineraries: [],
    },
  ],
  cityFiltered: [
    {
      name: "",
      country: "",
      photo: "",
      description: "",
      itineraries: [],
    },
  ],
};

const citiesReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(citiesActions.add_cities, (state, action) => {
      const newState = { ...state, cities: action.payload.cities };
      return newState;
    })
    .addCase(citiesActions.add_city, (state, action) => {
      const newState = { ...state, city: action.payload.city };
      return newState;
    })
    .addCase(citiesActions.add_city_filtered, (state, action) => {
      const newState = { ...state, cityFiltered: action.payload.cities };
      return newState;
    });
});

export default citiesReducer;
