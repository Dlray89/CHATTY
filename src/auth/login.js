import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import authServices from "../service/auth.services";



const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    authServices.login(userName, password).then((res) => {
      console.log(res)
  
     
    }).catch(err => {
        console.log(err.message)
      })
  };

  return (
    <div style={{ marginTop: "5em" }}>
      <div
        style={{
          margin: "0 auto",
          width: "20%",
          fontSize: "3rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <form onSubmit={(e) => { login();e.preventDefault();
}}>
        <TextField
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
