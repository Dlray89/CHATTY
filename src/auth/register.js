import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

import authServices from "../service/auth.services";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const register = (e) => {
    authServices.register(username, email, password).then((res) => {
      console.log(res);

    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
        Register here
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Register account</Button>
      </form>
    </div>
  );
};

export default Register;
