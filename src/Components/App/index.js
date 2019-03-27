import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "../Nav";
import LandingPage from "../Landing";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ReadList from "../ReadList";

import * as ROUTES from "../../constants/routes";

import "../../Assets/css/default.min.css";

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.HOME} component={ReadList} />
      </div>
    </Router>
  </div>
);

export default App;
