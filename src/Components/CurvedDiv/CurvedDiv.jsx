import React, { Component } from "react";
import styles from "./CurvedDiv.module.css";

class CurvedDiv extends Component {
  render() {
    return (
      <>
        <div id={styles.curvedDivWrapper}>
          <div className={styles.curvedDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#282c34"
                fillOpacity="1"
                d="M0,320L48,293.3C96,267,192,213,288,181.3C384,149,480,139,576,165.3C672,192,768,256,864,261.3C960,267,1056,213,1152,192C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <h1>Jesse McKinney</h1>
            <p>
              {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci
                lorem, porttitor nec vulputate sit amet, fermentum a purus....*/}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#282c34"
                fillOpacity="1"
                d="M0,320L48,293.3C96,267,192,213,288,181.3C384,149,480,139,576,165.3C672,192,768,256,864,261.3C960,267,1056,213,1152,192C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </>
    );
  }
}

export default CurvedDiv;
