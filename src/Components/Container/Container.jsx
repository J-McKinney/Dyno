import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContainerStyle from "./Container.module.css";

class ContainerPage extends Component {
  render() {
    return (
      <>
        <div className={ContainerStyle.wrapper}>
          <Container className={ContainerStyle.container}>
            Container
            <Row className={ContainerStyle.row}>
              Row
              <Col className={ContainerStyle.col}>Col</Col>
            </Row>
          </Container>
        </div>
        <br />
        <div className={ContainerStyle.openWrapper}>
          <Container className={ContainerStyle.openContainer}>
            openContainer
            <Row className={ContainerStyle.openRow}>
              openRow
              <Col className={ContainerStyle.openCol}>openCol</Col>
            </Row>
          </Container>
        </div>
        <br />
        <div className={ContainerStyle.closedWrapper}>
          <Container className={ContainerStyle.closedContainer}>
            closedContainer
            <Row className={ContainerStyle.closedRow}>
              closedRow
              <Col className={ContainerStyle.closedCol}>closedCol</Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default ContainerPage;
