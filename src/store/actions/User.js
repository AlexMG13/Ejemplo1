import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sign_in = createAsyncThunk("sign_in", async (body) => {
  try {
    const response = await axios.post(
      "http://localhost:3030/api/user/login",
      body
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:3030/api/user/authenticated",
      null,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return {
      user: response.data.user,
      token: token,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const sign_out = createAction("sign_out", () => {
  localStorage.removeItem("token");
  return {
    payload: null,
  };
});

const sign_up = createAsyncThunk("sign_up", async (obj) => {
  try {
    const response = await axios.post(
      "http://localhost:3030/api/user/register",
      obj
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const sign_up_google = createAsyncThunk("sign_up_google", async (obj) => {
  try {
    const response = await axios.post(
      "http://localhost:3030/api/user/registergoogle",
      obj
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const userActions = {
  sign_in,
  authenticate,
  sign_out,
  sign_up,
  sign_up_google,
};

export default userActions;
