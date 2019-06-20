import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/friends/FriendsList";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <ProtectedRoute exact to="/" component={FriendsList} />
      <Route to="/login" component={Login} />
    </div>
  );
}

export default App;
