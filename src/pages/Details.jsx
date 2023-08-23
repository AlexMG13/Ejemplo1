import React from "react";
import { useState,useEffect,useParams } from 'react'

export default function Details({ city }) {
  /* const { id } = useParams();
  const [city, setCity] = useState({});
  useEffect(() => {
    setCity(props.find((item) => item._id === id));
  },[]); */
  return (
    <div>Anda o no </div>
    /* <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={city.photo} alt={city.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{city.name}</h2>
        <p>{city.description}</p>
      </div>
      <div>
        <h2 className='text-black text-2xl text-center'>Under Construction...</h2>
      </div>
    </div> */
  );
}
