import React, { useRef } from "react";
import { Link as Anchor } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

export default function LogInForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handlerInput = () => {
    axios
      .post("http://localhost:3030/api/user/login", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        return response.data.user;
      });
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <form className="w-1/3 bg-blue-400 rounded-lg">
        <div className="p-2 flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Hello! please Log In</h1>
          <p className="text-gray-200">Keep enjoying and sharing!</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="my-2">
            <label htmlFor="email" className="block font-bold text-lg">
              Email:
            </label>
            <input
              type="email"
              placeholder="enter email"
              id="email"
              name="email"
              className="rounded-lg"
              required
            />
          </div>
          <div className="my-2">
            <label htmlFor="password" className="block font-bold text-lg">
              Password:
            </label>
            <input
              type="password"
              placeholder="enter password"
              id="password"
              name="password"
              className="rounded-lg"
              required
            />
          </div>
          <div className=" bg-white hover:bg-blue-600 rounded-lg font-bold p-2 text-center text-lg mt-2">
            <Anchor to="/">Log In</Anchor>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <div className="text-center">
            <p className="font-bold">Or with</p>
            <div className="bg-white hover:bg-blue-600 rounded-lg font-bold p-2 text-center text-lg flex flex-row justify-center items-center mt-2 gap-1">
              <FcGoogle />
              <Anchor to="/">Google</Anchor>
            </div>
          </div>
          <div className="bg-white hover:bg-blue-600 rounded-lg font-bold p-2 text-center text-lg my-4">
            <Anchor to="/signup">Not registered yet?</Anchor>
          </div>
        </div>
      </form>
    </main>
  );
}
