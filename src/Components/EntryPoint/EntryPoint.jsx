import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import EntryStyle from "./EntryPoint.module.css";

class EntryPoint extends Component {
  render() {
    return (
      <>
        <div className={EntryStyle.wrapper}>
          <div className={EntryStyle.techImage}>
            <Container className={EntryStyle.container}>
              <button className={EntryStyle.button}>
                <div>Enter</div>
              </button>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default EntryPoint;
