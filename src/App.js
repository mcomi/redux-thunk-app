import React from "react";
import "./styles/globals.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./features/User/Login";
import Dashboard from "./features/User/Dashboard";
import List from "./features/Appointment/List";
import { PrivateRoute } from "./helpers/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Login} path="/login" />
          <PrivateRoute exact component={Dashboard} path="/" />
          <PrivateRoute exact component={List} path="/appoinments" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
