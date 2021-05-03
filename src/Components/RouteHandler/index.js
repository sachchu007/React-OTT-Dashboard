import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "../Login/index";
import MainPage from "../LandingPage/index";

const RouteHandler = () => {
  console.log(localStorage.getItem("authenticated"))
  return (
    <Switch>
      <Route
        path="/login"
        render={() => 
          (localStorage.getItem("authenticated")) ? (<Redirect to='/'/>) : (<Login/>)
        }
      />
      <Route path="/" exact component={MainPage} />
    </Switch>
  );
};

export default RouteHandler;
