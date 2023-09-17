import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
        Swal.fire({
          icon: "success",
          title: "Sign In correctly",
        });
        return response.data;
      })
<<<<<<< HEAD
      .catch((error) =>
        error.response.data.message.forEach((message) => console.log(message))
      );

    return { user: user, message: console.log(user) };
=======
      .catch((error) => {
        let errorMesage = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Could not been logged",
          text: errorMesage,
        });
      });
    return { user: user };
>>>>>>> sprint-4
  } catch (error) {
    console.log(error);
  }
});

const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    let token = localStorage.getItem("token");
    const user = await axios
      .post("http://localhost:3030/api/user/authenticated", null, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
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
    axios.post("http://localhost:3030/api/user/signout").then(() => {
      localStorage.removeItem("token");
    });
  } catch (error) {
    console.log(error);
  }
});

export const sign_up = createAsyncThunk("sign_up", async (obj) => {
  try {
    const user = await axios
      .post("http://localhost:3030/api/user/register", obj)
      .then(() => {
        Swal.fire({
          title: "Welcome",
          text: "User created!",
          footer: '<a href="/login">Please Singn In!</a>',
        });
      })
      .catch((error) => {
        let errorMesage = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Could not been created",
          text: errorMesage,
        });
      });
    return user.data;
  } catch (error) {
    console.log(error);
  }
});

const userActions = {
  sign_in,
  authenticate,
  sign_out,
  sign_up,
};

export default userActions;
