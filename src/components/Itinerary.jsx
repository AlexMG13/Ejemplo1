import React from "react";

export default function Itinerary({ itinerary }) {
  return (
    <div className="card w-[80%] bg-primary text-cyan-800">
      <div className="card-body">
        <h2 className="card-title">{itinerary.name}</h2>
        <h2 className="card-title">{itinerary.price}</h2>
      </div>
    </div>
  );
}
