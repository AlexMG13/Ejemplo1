import React from "react";
import { CiMoneyBill } from "react-icons/ci";

export default function Itinerary({ itinerary }) {
  return (
    <div className="bg-blue-400 rounded-lg m-7 w-full">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center font-bold text-2xl">{itinerary.name}</h2>
      </div>
      <div>
        <div className="flex flex-row justify-around my-4 items-center font-bold">
          <div className="flex flex-col justify-center items-center m-4 p-4">
            <figure>
              <img
                className="w-24 h-24 rounded-full"
                src={itinerary.photo}
                alt={itinerary.name}
              />
            </figure>
            <p className="font-bold">{itinerary.person}</p>
          </div>
          <div className="flex flex-row">
            <div className="self-center">
              <CiMoneyBill />
            </div>
            <p> {itinerary.price}</p>
          </div>
          <p>Duration: {itinerary.duration} hs</p>
        </div>
      </div>
    </div>
  );
}
