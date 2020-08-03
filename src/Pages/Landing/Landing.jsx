import React, { Component } from "react";
import LandingStyle from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <>
        <div className={LandingStyle.wrapper}>
          <div className={LandingStyle.header}>Header</div>
        </div>
      </>
    );
  }
}

export default Landing;
