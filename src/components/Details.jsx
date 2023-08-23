import React from "react";

export default function Details({ props }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={props.photo}
          alt={props.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
