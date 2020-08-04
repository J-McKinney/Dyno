import React, { Component } from "react";
import AboutStyle from "./About.module.css";

class About extends Component {
  state = {};

  componentDidMount() {
    console.log("About Page");
  }
  render() {
    return (
      <>
        <div className={AboutStyle.wrapper}></div>
      </>
    );
  }
}

export default About;
