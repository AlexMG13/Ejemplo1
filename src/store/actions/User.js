import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sign_in = createAsyncThunk("sign_in", async (payload) => {
  try {
    let { email, password } = payload;
    const user = await axios
      .post("http://localhost:3030/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        return response.data.user;
      })
      .catch((error) =>
        error.response.data.message.foreach((message) => console.log(message))
      );

    return { user: user };
  } catch (error) {
    console.log(error.message);
  }
});

const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    let token = localStorage.getItem("token");
    let user = await axios
      .post("http://localhost:3030/api/user/authenticated", null, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log("Authenticated succesfull");
        localStorage.setItem("token", response.data.token);
        return response.data.user;
      });
    return {
      user: user,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const sign_out = createAsyncThunk("sign_out", async () => {
  try {
    axios.post("http://localhost:3030/api/user/sign_out").then((response) => {
      localStorage.removeItem("token");
    });
  } catch (error) {
    console.log(error.message);
  }
});

const userActions = {
  sign_in,
  authenticate,
  sign_out,
};

export default userActions;
