import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Users from "./Users";
import UserPage from "./UserPage";

class App extends Component {
  render = () => {
    return (
        <>
          <Nav />
          <div className="container">
            <Router>
              <div>
                <Switch>
                  <Route path="/user/:id" component={UserPage} />
                  <Route path="/" component={Users} />
                </Switch>
              </div>
            </Router>
          </div>
        </>
    );
  };
}

export default App;