import React from "react";

export default function Article() {
  return (
    <div className="flex flex-col w-1/2  justify-center items-center mt-20">
      <div className="flex flex-row">
        <div className="flex-col justify-around">
          <h1 className="text-2xl font-bold">Find the perfect destination</h1>
          <p className="text-base my-4 mr-2">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easir.
          </p>
        </div>
        <img
          className="w-60 h-60 rounded object-cover"
          src="https://images.unsplash.com/photo-1663851753121-abd417bfb0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          alt="montana image"
        />
      </div>
    </div>
  );
}
