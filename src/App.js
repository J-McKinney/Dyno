import React, { Component } from "react";
import CurvedDiv from "./Components/CurvedDiv/CurvedDiv";
// import logo from "./logo.svg";
// import logo from "./images/hypnosis.png";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    console.log("Hello World");
  }

  render() {
    return (
      <>
        <div className="App">
          {/*<header className="App-header">
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
          </header>*/}
          <CurvedDiv />
          <br />
        </div>
      </>
    );
  }
}

export default App;
