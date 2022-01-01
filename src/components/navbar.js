import React, { useEffect, useState } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useAuth0 } from "@auth0/auth0-react";

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

  const { user, isAuthenticated, logout, getAccessTokenSilently } = useAuth0();
  const [userMetaData,  setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dapthedev.us.auth0.com";
      
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
       localStorage.setItem('token', accessToken)
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <AppBar style={{ background: "white" }} className={classes.root}>5
        {console.log(user)}
        <Toolbar>
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p style={{border:'solid 2px red', fontSize:'3rem', color:'black'}}>
              {userMetaData ? (
                <> Welcome to Chatty { userMetaData.theme}</>
              ) : (
                "no user data"
              )}
            </p>
          </div>
          <Button onClick={() => logout()}>Logout</Button>
        </Toolbar>
      </AppBar>
    )
  );
};

export default NavBar;
