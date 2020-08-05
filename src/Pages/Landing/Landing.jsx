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
        <NavBar />
        <Container className={LandingStyle.firstContainer}>
          <Row className={LandingStyle.firstRow}>
            <Col className={LandingStyle.firstCol}>
              <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem
                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
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
      </div>
    );
  }
}

export default Landing;
