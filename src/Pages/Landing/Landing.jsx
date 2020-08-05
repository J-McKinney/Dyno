import React, { Component } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyPic from "../../images/MeDuh.JPG";
import LandingStyle from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <div className={LandingStyle.wrapper}>
        {/* NAVBAR */}
        <NavBar />
        {/* FIRST LANDING CONTAINER*/}
        <Container className={LandingStyle.firstContainer}>
          <Row className={LandingStyle.firstRow}>
            <Col className={LandingStyle.firstCol}>
              <h2 className={LandingStyle.firstH2}>My Work: </h2>
              <p className={LandingStyle.firstP}>
                I look forward to each and every project I begin. Whether it is
                an assignment or a self-motivated project, I take both very
                seriously. From the starting snippet of code to the final
                finishing touches of a new app, each moment offers an
                opportunity for growth and improvement. Learning to design,
                build, and write code. Has been one of my biggest projects, to
                this day...
              </p>
            </Col>
            <Col className={LandingStyle.secondCol}>
              <img
                className={LandingStyle.myPic}
                src={MyPic}
                alt="Jesse McKinney"
              />
            </Col>
          </Row>
        </Container>
        {/* SECOND LANDING CONTAINER */}
        <Container className={LandingStyle.secondContainer}>
          <Row className={LandingStyle.secondRow}>
            <Row className={LandingStyle.thirdRow}>
              <h1>Projects:</h1>
            </Row>
            <Col className={LandingStyle.thirdCol}></Col>
            <Col className={LandingStyle.fourthCol}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
