import React from "react";
import { CiMoneyBill } from "react-icons/ci";

export default function Itinerary({ itinerary }) {
  return (
    <div className="h-24 bg-blue-400 rounded-lg m-7">
      <h2 className="text-center font-bold text-xl">{itinerary.name}</h2>
      <div className="flex justify-around my-4 ">
        <div className="flex flex-row">
          <div className="self-center">
            <CiMoneyBill />
          </div>
          <p className=""> {itinerary.price}</p>
        </div>
        <p>Duration: {itinerary.duration} hs</p>
      </div>
    </div>
  );
}
