import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function Card({ city }) {
  return (
    <div className="card w-64 bg-base-100 image-full">
      <figure>
        <img src={city.photo} alt={city.name} />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title">{city.name}</h2>
        <div className="card-actions text-cyan-500">
          <Anchor to={`/city/${city._id}`}>Details</Anchor>
        </div>
      </div>
    </div>
  );
}
