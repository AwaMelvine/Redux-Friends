import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  if (!!localStorage.getItem("token")) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
