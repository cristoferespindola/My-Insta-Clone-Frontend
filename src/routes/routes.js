import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "../../src/pages/SignIn";
import Registre from "../../src/pages/SignUp";
import Feed from "../../src/pages/Feed";
import Profile from "../../src/pages/Profile";
import Add from "../../src/pages/AddPubli";

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Registre} />
        <PrivateRoute path="/feed" component={Feed} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/posts" component={Add} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
