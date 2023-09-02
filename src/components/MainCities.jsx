import React from "react";
import SearchCity from "./SearchCity";
import AllCities from "./AllCities";
import Hero from "./Hero";

export default function MainCities() {
  return (
    <div>
      <Hero />
      <SearchCity />
      <AllCities />
    </div>
  );
}
