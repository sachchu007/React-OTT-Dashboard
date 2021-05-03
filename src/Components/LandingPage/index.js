import { AppBar, Button, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../Home/index";
import Saved from "../Saved/index";

const useStyles = makeStyles((theme) => ({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  login: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const [value, setvalue] = useState(0);
  const handleChange = (event, newvalue) => {
    setvalue(newvalue);
  };
  const [auth, setauth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      setauth(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    setauth(false);
  };
  return (
    <>
      <AppBar color="primary" className={classes.header} position="sticky">
        <Tabs value={value} indicatorColor="secondary" onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="Saved" disabled={!auth} />
        </Tabs>
        {auth ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button>
            <Link to="/login" className={classes.login}>
              LOGIN
            </Link>
          </Button>
        )}
      </AppBar>
      <Home value={value} index={0} />
      <Saved value={value} index={1} />
    </>
  );
};

export default LandingPage;
