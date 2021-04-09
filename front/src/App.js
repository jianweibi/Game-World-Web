import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/home.js";
import SignUp from "./Pages/signup";
import SignIn from "./Pages/signin";


function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/signin" component={SignIn} />
              </Switch>
          </Router>
      </div>
  );
}

export default App;