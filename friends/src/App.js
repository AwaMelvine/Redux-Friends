import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/friends/FriendsList";

function App() {
  return (
    <div className="App">
      <Route exact to="/" render={props => <FriendsList {...props} />} />
      <Route to="/login" component={Login} />
    </div>
  );
}

export default App;
