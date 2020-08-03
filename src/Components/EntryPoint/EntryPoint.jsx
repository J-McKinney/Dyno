import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import EntryStyle from "./EntryPoint.module.css";

class EntryPoint extends Component {
  render() {
    return (
      <>
        <div className={EntryStyle.wrapper}>
          <Fade delay={1000}>
            <div className={EntryStyle.techImage}>
              <Container className={EntryStyle.container}>
                <Fade delay={2000}>
                  <button className={EntryStyle.button}>Enter</button>
                </Fade>
              </Container>
            </div>
          </Fade>
        </div>
      </>
    );
  }
}

export default EntryPoint;
