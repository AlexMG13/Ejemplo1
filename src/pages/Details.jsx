import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCity } from '../services/citiesQueries.js'

export default function Details() {
  const [city, setCity] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getCity(id)
      .then((response) => setCity(response))
      .catch((err)=>console.log(err))
  },[]) ;
  return (
    <div className="flex justify-center flex-col mx-10">
      <div className="card lg:card-side bg-base-100">
        <figure>
          <img src={city.photo} alt={city.name} />
        </figure>
        <div className="card-body w-[70%] self-center">
          <h2 className="card-title">{city.name}</h2>
          <p>{city.description}</p>
        </div>
      </div>
        <div className="my-48">
          <h2 className="text-black text-2xl text-center">
            Under Construction...
          </h2>
        </div>
    </div>
  );
}