import React, { useState } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import logo from "../images/Chatty.svg";
import authServices from "../service/auth.services";
import history from "../utils/history";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "red",
    padding: "5px 50px",
  },
  links: {
    textDecoration: "none",
    color: "#0000ff",
    fontSize: "2.5rem",
    textAlign: "right",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "30%",
    margin: "0 auto",
  },
}));

const NavBar = () => {
  const classes = useStyles();
    const token = localStorage.getItem("token");
    const [message, setMessage] = useState(localStorage.getItem('message'))

    const logout = () => {
        authServices.logout()
        history.push('/')
        window.location.reload()
    }
  return (
    <>
      {token ? (
        <>
          <AppBar style={{ background: "white" }} className={classes.root}>
            <Toolbar>
              <div className="nav-toolbar">
                <div className="nav-toolbar--logo-box">
                  <img className="nav-toolbar--logo-box__logo" src={logo} />
                </div>
                <div className="nav-toolbar--link-box">
                                  {" "}
                                  <p>Welcome { message}</p>
                  <Link className={classes.links} to="/">
                    Home
                                  </Link>
                                  <p>Welcome { message}</p>
                  <Button onClick={logout} variant='contained' className={classes.links} to="/">
                    Logout
                  </Button>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </>
      ) : (
        <>
          {" "}
          <AppBar style={{ background: "white" }} className={classes.root}>
            <Toolbar>
              <div className="nav-toolbar">
                <div className="nav-toolbar--logo-box">
                  <img className="nav-toolbar--logo-box__logo" src={logo} />
                                  </div>
                                  <p>Welcome { message}</p>

                <div className="nav-toolbar--link-box">
                  {" "}
                  <Link className={classes.links} to="/">
                    Home
                  </Link>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </>
      )}
    </>
  );
};

export default NavBar;
