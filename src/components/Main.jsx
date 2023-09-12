import React from "react";
import Article from "./Article";
import CallToAction from "./CallToAction";
import Carousel from "./Carousel";

export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-screen flex flex-col justify-center items-center">
        <Article />
        <CallToAction />
      </div>
      <Carousel />
    </div>
  );
}
