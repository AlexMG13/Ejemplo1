import React from "react";
import Buttons from "./Buttons";

export default function Nav() {
  return (
    <div className="flex flex-row justify-around h-24">
      <img
        className="w-40"
        src="./logo-mytinerary-re.png"
        alt="logo My Tynerary"
      />
      <Buttons />
    </div>
  );
}
