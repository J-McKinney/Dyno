import React, { Component } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import LandingStyle from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <div className={LandingStyle.wrapper}>
        <NavBar />
        <Container className={LandingStyle.container}></Container>
      </div>
    );
  }
}

export default Landing;
