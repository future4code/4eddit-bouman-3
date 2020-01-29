import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import FeedPage from "../FeedPage";
import PostPage from "../PostPage";

export const routes = {
  root: "/",
  signup: "/signup",
  feed: "/feed",
  post: "/post",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} exact />
        <Route path={routes.signup} component={SignupPage} exact />
        <Route path={routes.feed} component={FeedPage} exact />
        <Route path={routes.post} component={PostPage} exact /> 
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;