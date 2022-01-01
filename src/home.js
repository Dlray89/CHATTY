import { Button } from "@mui/material";
import { makeStyles} from '@mui/styles'
import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

const useStyles = makeStyles((theme) => ({
  loginbtn: {
    width: '10%',
  
  }
}))

const Home = () => {
  const { loginWithRedirect } = useAuth0()
  const classes = useStyles()
  // const toggleForm = () => {
  //   setSwitchForm(true);
  // };

  // const toggleFormBack = () => {
  //   setSwitchForm(false);
  // };

  
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
        
        <div className="home-container--left__login-btn">
              <Button style={{fontSize:'1.5rem'}} className={classes.loginbtn} variant="contained" onClick={() => loginWithRedirect()} >Login</Button>
       </div>
      </div>
      <div className="home-container--right">

      </div>
    </div>
  );
};

export default Home;
