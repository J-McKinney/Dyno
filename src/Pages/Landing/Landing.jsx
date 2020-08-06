import React, { Component } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyPic from "../../images/MeDuh.JPG";
import Confetti from "../../images/ConfettiEffectPic.PNG";
import Cracked from "../../images/CrackedFontPic.PNG";
import Stars from "../../images/InfiniteStarsPic.PNG";
import Box from "../../images/InfinityBoxPic.PNG";
import Water from "../../images/RealWaterPic.PNG";
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
                className={LandingStyle.me}
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
              <h1>Animated Projects:</h1>
            </Row>
            <Col className={LandingStyle.thirdCol}>
              <a
                href="https://j-mckinney.github.io/ConfettiEffect/"
                className={LandingStyle.a}
              >
                <img
                  className={LandingStyle.myPic}
                  src={Confetti}
                  alt="Confetti Effect"
                />
              </a>
            </Col>
            <Col className={LandingStyle.fourthCol}>
              <a
                href="https://j-mckinney.github.io/CrackedFont/"
                className={LandingStyle.a}
              >
                <img
                  className={LandingStyle.myPic}
                  src={Cracked}
                  alt="Cracked Effect"
                />
              </a>
            </Col>
          </Row>
          <Row className={LandingStyle.fourthRow}>
            <Col className={LandingStyle.fifthCol}>
              <a
                href="https://j-mckinney.github.io/InfinityStars/"
                className={LandingStyle.a}
              >
                <img
                  className={LandingStyle.myPic}
                  src={Stars}
                  alt="Infinite Stars Effect"
                />
              </a>
            </Col>
            <Col className={LandingStyle.sixthCol}>
              <a
                href="https://j-mckinney.github.io/InfinityBox/"
                className={LandingStyle.a}
              >
                <img
                  className={LandingStyle.myPic}
                  src={Box}
                  alt="Infinity Box Effect"
                />
              </a>
            </Col>
          </Row>
          <Row className={LandingStyle.fifthRow}>
            <Col className={LandingStyle.seventhCol}>
              <a
                href="https://j-mckinney.github.io/Realistic-Water-Effect/"
                className={LandingStyle.a}
              >
                <img
                  className={LandingStyle.myPic}
                  src={Water}
                  alt="Realistic Water Effect"
                />
              </a>
            </Col>
            <Col className={LandingStyle.eigthCol}>
              <a href="#-action" className={LandingStyle.a}>
                <img className={LandingStyle.myPic} src={""} alt="" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
