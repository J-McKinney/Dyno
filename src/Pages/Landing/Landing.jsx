import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LandingStyle from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <>
        <div className={LandingStyle.wrapper}>
          <Container className={LandingStyle.container}>
            Container
            <Row className={LandingStyle.row}>
              Row
              <Col className={LandingStyle.col}>Col</Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Landing;
