import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Route to="/login" component={Login} />
    </div>
  );
}

export default App;
