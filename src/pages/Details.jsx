import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCity } from "../services/citiesQueries.js";
import Itinerary from "../components/Itinerary.jsx";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../store/actions/Cities";

export default function Details() {
  let cityInStore = useSelector((store) => store.citiesReducer.city);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getCity(id)
      .then((data) => dispatch(citiesActions.add_city(data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex justify-center flex-col mx-10">
      <div className="card lg:card-side bg-base-100">
        <figure>
          <img src={cityInStore.photo} alt={cityInStore.name} />
        </figure>
        <div className="card-body w-[70%] self-center">
          <h2 className="card-title">{cityInStore.name}</h2>
          <p>{cityInStore.description}</p>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        {cityInStore.itineraries?.map((itinerary, i) => (
          <Itinerary itinerary={itinerary} key={i} />
        ))}
      </div>
    </div>
  );
}
