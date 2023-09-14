import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider store={store}>
    <GoogleOAuthProvider clientId="1017694633396-l0rctqg19cf4ka7bt8luf73jcb7rq35o.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
  //</React.StrictMode>,
);
