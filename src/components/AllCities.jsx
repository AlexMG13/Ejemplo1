import React from "react";
import { useEffect } from "react";
import Card from "./Card";
import { getAllCities } from "../services/citiesQueries.js";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../store/actions/Cities";

export default function AllCities() {
  let citiesInStore = useSelector((store) => store.citiesReducer.cities);
  let citiesFilteredInStore = useSelector(
    (store) => store.citiesReducer.cityFiltered
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getAllCities()
      .then((data) => {
        dispatch(citiesActions.add_cities(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full flex flex-col justify-center m-4">
      <div className="flex flex-wrap gap-3">
        {citiesInStore?.map((city, i) => (
          <Card key={i} city={city} />
        ))}
      </div>
    </div>
  );
}
