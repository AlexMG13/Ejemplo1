import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import userActions from "../store/actions/User";

export default function Buttons() {
  const user = useSelector((store) => store.userReducer.user);
  const dispatch = useDispatch();
  return (
    <nav className="flex h-full items-center gap-4 mx-4">
      <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Anchor to="/">Home</Anchor>
      </div>
      <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Anchor to="/cities">Cities</Anchor>
      </div>
      {user ? (
        <button
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(userActions.sign_out())}
        >
          Sign Out
        </button>
      ) : (
        <>
          <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Anchor to="/login">Sign In</Anchor>
          </div>
          <div className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Anchor to="/signup">Sign Up</Anchor>
          </div>
        </>
      )}
    </nav>
  );
}
