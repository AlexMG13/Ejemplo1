import React from "react";
import Button from "./Button";
import { Link as Anchor } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="h-40 flex justify-center items-center my-10">
      <Button name="Click for More Cities Here" />
    </div>
  );
}
