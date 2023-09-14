import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-center m-4">
      <div
        className="w-[90%] h-96"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80')",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-white lg:text-black text-4xl text-center font-bold mt-6">
          Cities
        </h2>
        <h3 className="text-white lg:text-black text-2xl text-center my-2">
          Collection of the most beautiful places and experiences
        </h3>
      </div>
    </div>
  );
}
