import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "../pages/SignIn";
import Register from "../pages/SignUp";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import NewPost from "../pages/NewPost";

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
        <Route path="/signup" component={Register} />
        <PrivateRoute path="/feed" component={Feed} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/posts" component={NewPost} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
