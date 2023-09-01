import { createAction } from "@reduxjs/toolkit";

const add_cities = createAction("add_cities", (array) => {
  return {
    payload: {
      cities: array,
    },
  };
});
const add_city = createAction("add_city", (city) => {
  return {
    payload: {
      city: city,
    },
  };
});
const add_city_filtered = createAction("add_city_filtered", (array) => {
  return {
    payload: {
      cities: array,
    },
  };
});

const citiesActions = { add_cities, add_city, add_city_filtered };
export default citiesActions;
