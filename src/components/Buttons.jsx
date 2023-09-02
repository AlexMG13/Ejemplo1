import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function Buttons() {
  return (
    <nav className="flex h-full items-center gap-4 mx-4">
      <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Anchor to="/">Home</Anchor>
      </div>
      <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Anchor to="/cities">Cities</Anchor>
      </div>
      <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Anchor to="/">Login</Anchor>
      </div>
    </nav>
  );
}
