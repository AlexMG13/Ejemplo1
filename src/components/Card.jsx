import React from "react";
import { Link as Anchor } from 'react-router-dom'

export default function Card({ props }) {
  return (
    <div className="card w-64 bg-base-100 image-full">
      <figure>
        <img
          src={props.photo}
          alt={props.name}
        />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title">{props.name}</h2>
        <div className="card-actions text-cyan-500">
          <Anchor to={`/city/${props._id}`} >Details</Anchor>
        </div>
      </div>
    </div>
  );
}