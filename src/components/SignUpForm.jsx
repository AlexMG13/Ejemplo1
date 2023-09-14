import React, { useEffect, useRef, useState } from "react";
import { getContries } from "../services/citiesQueries";
import { Link as Anchor } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import decode from "jwt-decode";
import axios from "axios";
import { useDispatch } from "react-redux";
import userActions from "../store/actions/User";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const lastnameInputRef = useRef();
  const photoInputRef = useRef();
  const countryInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [countries, setContries] = useState([]);
  useEffect(() => {
    getContries()
      .then((response) => setContries(response.data))
      .catch((err) => console.log(err));
  }, []);

  const signUpWithGoogle = (credentialResponse) => {
    const dataUser = decode(credentialResponse.credential);
    const body = {
      name: dataUser.name,
      email: dataUser.email,
      password: dataUser.sub,
      photo: dataUser.picture,
    };
    dispatch(userActions.sign_up(body)).then((response) => {
      if (response.payload.success) {
        navigate("/");
      }
    });
  };
  const signUp = () => {
    const body = {
      name: nameInputRef,
      email: emailInputRef.current.value,
      password: passwordInputRef,
      photo: photoInputRef,
      country: countryInputRef,
    };
    dispatch(userActions.sign_up(body));
  };

  return (
    <main className="flex justify-center items-center h-[80%]">
      <form className="md:w-2/3 bg-blue-400 lg:bg-blue-400 flex w-1/2 p-3 rounded-lg gap-3">
        <div className="flex-1">
          <div>
            <h1 className="text-3xl pb-2 font-bold">Let&#39;s get started!</h1>
            <p className="text-gray-700">
              Enjoy looking and creating itineraries for any city with the
              community
            </p>
          </div>
          <div className="py-2">
            <label className="block text-lg" htmlFor="name">
              Name:
            </label>
            <input
              placeholder="Name"
              className="rounded-md w-2/3 p-2 focus:ring-blue-400 focus:border-blue-400"
              type="text"
              id="name"
              name="name"
              ref={nameInputRef}
              required
            />
          </div>
          <div className="pb-2">
            <label className="block text-lg" htmlFor="lastname">
              Lastname:
            </label>
            <input
              placeholder="Lastname"
              className="rounded-md w-2/3 p-2"
              type="text"
              id="lastname"
              name="lastname"
              ref={lastnameInputRef}
            />
          </div>
          <div className="pb-2">
            <label className="block text-lg" htmlFor="email">
              Email:
            </label>
            <input
              placeholder="Email"
              className="rounded-md w-2/3 p-2"
              type="email"
              id="email"
              name="email"
              ref={emailInputRef}
              required
            />
          </div>
          <div className="pb-2">
            <label className="block text-lg" htmlFor="password">
              Password:
            </label>
            <input
              placeholder="Password"
              className="rounded-md w-2/3 p-2"
              type="password"
              id="password"
              name="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <div className="pb-2">
            <label className="block text-lg" htmlFor="url">
              Photo:
            </label>
            <input
              placeholder="URL of photo"
              className="rounded-md w-2/3 p-2"
              type="url"
              id="url"
              name="url"
              ref={photoInputRef}
              required
            />
          </div>
          <div className="pb-2">
            <select
              className="my-3 rounded-md w-2/3 p-2"
              id="country"
              name="country"
              ref={countryInputRef}
              required
            >
              <option value="country">Country</option>
              {countries.map((country, i) => (
                <option key={i} value={country.country}>
                  {country.country}
                </option>
              ))}
            </select>
          </div>
          <button
            className="bg-white hover:bg-blue-600 w-1/2 rounded-lg p-2 text-lg font-bold"
            type="submit"
            onClick={signUp}
          >
            Register now
          </button>
        </div>
        <div className="flex-1 relative self-center">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1638271264550-32286ed1219b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="buenos aires"
          />
          <div className="bg-white hover:bg-blue-600 rounded-lg font-bold p-2 text-center mt-8 text-lg">
            <Anchor to="/login">Already register?</Anchor>
          </div>
          <div className="mt-2">
            <GoogleLogin
              text="signup_with"
              onSuccess={signUpWithGoogle}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            ;
          </div>
        </div>
      </form>
    </main>
  );
}
