import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EntryPoint from "./Pages/EntryPoint/EntryPoint";
import Landing from "./Pages/Landing/Landing";
import Error404 from "./Pages/Error/Error";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    // console.log("Hello World");
  }

  render() {
    return (
      <>
        <Router basename="/">
          <Switch>
            <Route exact path="/Dyno" component={EntryPoint} />
            <Route path="/Landing" component={Landing} />
            <Route component={Error404} />
          </Switch>
        </Router>
        {/*<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>*/}
      </>
    );
  }
}

export default App;
