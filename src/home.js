import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";

const Home = () => {
  const [switchForm, setSwitchForm] = useState(false);

  const toggleForm = () => {
    setSwitchForm(true);
  };

  const toggleFormBack = () => {
    setSwitchForm(false);
  };
  return (
    <div className="home-container">
      <div className="home-container--left">
        <h1 className="home-container--left__title">Welcome to Chatty</h1>
        <p className="home-container--left__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="home-container--right">
        {switchForm ? (
          <Register toggleFormBack={setSwitchForm} />
        ) : (
          <Login toggleForm={setSwitchForm} />
        )}
      </div>
    </div>
  );
};

export default Home;
