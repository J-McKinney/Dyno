import React, { Component } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import LandingStyle from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className={LandingStyle.wrapper}>
          <br />
        </div>
      </>
    );
  }
}

export default Landing;
