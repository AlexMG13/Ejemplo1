import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const add_cities = createAction("add_cities", (array) => {
  return {
    payload: {
      cities: array,
    },
  };
});
const add_cities_async = createAsyncThunk("add_cities_async", async () => {
  try {
    let cities = await axios("http://localhost:3030/api/cities");
    return cities.data;
  } catch (err) {
    console.log(err);
  }
});
const add_city = createAction("add_city", (city) => {
  return {
    payload: {
      city: city,
    },
  };
});
const add_city_filtered = createAction("add_city_filtered", (search) => {
  return {
    payload: {
      inputValue: search,
    },
  };
});

const citiesActions = {
  add_cities,
  add_city,
  add_city_filtered,
  add_cities_async,
};
export default citiesActions;
