import React from "react";

export default function Itinerary({ itinerary }) {
  return (
    <div className="card w-[80%] bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{itinerary.name}</h2>
      </div>
    </div>
  );
}
