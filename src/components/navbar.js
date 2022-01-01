import React, { useEffect } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";


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
  logoutBtn: {
    fontSize:'1.2rem'
  }
}));

const NavBar = ({user, userMetaData, setUserMetadata, isAuthenticated, logout, getAccessTokenSilently}) => {
  const classes = useStyles();



  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dapthedev.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        localStorage.setItem("token", accessToken);

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
  }, [getAccessTokenSilently, user?.sub, setUserMetadata]);

  return (
    isAuthenticated && (
      <AppBar style={{ background: "white" }} className={classes.root}>
        5{console.log(user)}
        <Toolbar>
          <div className="nav-toolbar">
            <img
              className="nav-toolbar--img"
              src={user.picture}
              alt={user.name}
            />
            <>
              {userMetaData ? (
                <p
                className="nav-toolbar--nav-titles"
             
                >
                  {" "}
                  Welcome to Chatty {user.name}
                </p>
              ) : (
                "no user data"
              )}
            </>    <Button className={classes.logoutBtn} variant="contained" onClick={() => logout()}>Logout</Button>
          </div>
      
        </Toolbar>
      </AppBar>
    )
  );
};

export default NavBar;
