import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Login from "./Login/Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
