import React, { useRef } from "react";
import { Link as Anchor, Navigate, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import userActions from "../store/actions/User";

export default function LogInForm() {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const handlerInput = (e) => {
    e.preventDefault();
    const body = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    dispatch(userActions.sign_in(body)).then(() => {
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/");
      }
    });
  };

  const logInWithGoogle = (credentialResponse) => {
    const dataUser = decode(credentialResponse.credential);
    const body = {
      email: dataUser.email,
      password: dataUser.sub,
    };
    dispatch(userActions.sign_in(body)).then(() => {
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/");
      }
    });
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <form className="w-1/3 bg-blue-400 rounded-lg" onSubmit={handlerInput}>
        <div className="p-2 flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Hello! please Sign In</h1>
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
              ref={emailInputRef}
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
              ref={passwordInputRef}
              required
            />
          </div>
          <div className=" bg-white hover:bg-blue-600 rounded-lg font-bold p-2 text-center text-lg mt-2">
            <button type="submit ">Sign In</button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <div className="text-center">
            <p className="font-bold">Or with</p>
            <GoogleLogin
              text="signin_with"
              onSuccess={logInWithGoogle}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <div className=" bg-white hover:bg-blue-600 rounded-lg font-bold p-2 text-center text-lg my-2">
              <Anchor to={"/signup"}>Not registered?</Anchor>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
