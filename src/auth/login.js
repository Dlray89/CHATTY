import { TextField, Button, Switch } from "@mui/material";
import { makeStyles} from '@mui/styles'
import React, { useState } from "react";
import authServices from "../service/auth.services";
import history from "../utils/history";
import userService from "../service/user.service";


const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom:'30rem'
  },
  login_btn: {
    width: '50%',
    border: 'solid 2px red',
    
  }
}))

const Login = ({ toggleForm }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
const classes = useStyles()
  const login = (e) => {
    authServices
      .login(userName, password)
      .then((res) => {
        console.log(res);
        if (res.token) {
          history.push("/comments");
          window.location.reload();
          localStorage.setItem('user', JSON.stringify(res) )
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("welcome", JSON.stringify(res.message));
          console.log()
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="home-container--right__login-form">
      <form
       className="home-container--right__login-form--form"
        onSubmit={(e) => {
          login();
          e.preventDefault();
        }}
      >
        <h3 style={{fontSize:'2.5rem', marginBottom:'1em', textAlign:'center'}}>Login to your account</h3>
        <TextField
          className={classes.input}
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          InputProps={{
            style: {
              borderRadius: '20px',
              background: '#272626',
              color: 'white',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.452)',
              fontSize: '1.5rem',
              marginBottom:'1em'

          }}}
        />
        <TextField
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            style: {
              borderRadius: '20px',
              background: '#272626',
              color: 'white',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.452)',
              fontSize:'1.5rem'

          }}}
        />
        <div style={{textAlign:'center'}}>
          <p style={{fontSize:"1.2rem", marginTop:'0.5rem', textAlign:'center'}}>Do you need an account? Register Here</p>
          <Switch onClick={() => toggleForm(true)}  />
  </div>
       

        <Button style={{fontSize:'1.3rem', margin:'0 auto'}} className={classes.login_btn} variant="contained" type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
