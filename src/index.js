import React from "react";
import ReactDOM from "react-dom";
import "./styling/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dapthedev.us.auth0.com"
    clientId="Cd1qTsEQOhzTTOo2ASUPjGhSdrxE35Yk"
    redirectUri='http://localhost:3000/comments'
    audience="https://dapthedev.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
