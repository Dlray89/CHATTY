import { Button, Switch, TextField } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

import authServices from "../service/auth.services";
import history from "../utils/history";

// const useStyles = makeStyles((theme) => ({
//   input: {
//     marginBottom: "30rem",
//   },
//   login_btn: {
//     width: "50%",
//     border: "solid 2px red",
//   },
// }));

const Register = ({ toggleFormBack }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState('')
//   const classes = useStyles();

  const register = (e) => {
    authServices.register(username, password).then((res) => {
      console.log(res, "data");
      history.push("/comments");
      window.location.reload();
      localStorage.setItem("username", res.username);
    });
  };
  return (
    <div className="home-container--right__login-form">
      <form
        className="home-container--right__login-form--form"
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
        <h3
          style={{
            fontSize: "2.5rem",
            marginBottom: "1em",
            textAlign: "center",
          }}
        >
          Sign-up for an account
        </h3>
        <TextField
          InputProps={{
            style: {
              borderRadius: "20px",
              background: "#272626",
              color: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.452)",
                  fontSize: "1.5rem",
                  marginBottom:'1em'
            },
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose an username"
        />
        {/* <TextField value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'  /> */}
              <TextField
                  placeholder="Choose an password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            style: {
              borderRadius: "20px",
              background: "#272626",
              color: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.452)",
                  fontSize: "1.5rem",
              
            },
          }}
        />
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "1.2rem",
              marginTop: "0.5rem",
              textAlign: "center",
            }}
          >
            Do you have an account? Login Here
          </p>
          <Switch onClick={() => toggleFormBack(false)} />
        </div>
        <Button variant="contained" style={{ fontSize: "1.3rem", margin: "0 auto" }} type="submit">
          Register account
        </Button>
      </form>
    </div>
  );
};

export default Register;
