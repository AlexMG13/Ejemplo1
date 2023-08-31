import React from "react";
import { useEffect } from "react";
import Card from "./Card";
import { getAllCities } from "../services/citiesQueries.js";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../store/actions/Cities";

export default function AllCities() {
  let citiesInStore = useSelector((store) => store.citiesReducer.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCities()
      .then((data) => {
        dispatch(citiesActions.add_cities(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap gap-3 m-4">
        {citiesInStore?.map((city, i) => (
          <Card key={i} city={city} />
        ))}
      </div>
    </div>
  );
}
