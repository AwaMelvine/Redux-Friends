import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/friends/FriendsList";
import ProtectedRoute from "./ProtectedRoute";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProtectedRoute exact path="/" component={FriendsList} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
