import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-10">
      <Anchor to="/cities">Click for more cities</Anchor>
    </div>
  );
}
