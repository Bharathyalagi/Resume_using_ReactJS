import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/profile.jpg"
                alt="Bharath"
              />
            </div>
            <div className="banner-text">
              <h1> Full Stack Developer</h1>
              <hr />
              <p>
                HTML | CSS | BOOTSTRAP | MYSQL | JAVA | SQL | REACT 
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.facebook.com/bharath.yalagi?mibextid=ZbWKwL"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://twitter.com/YalagiBharath?t=dQ-NEINYW15O_0xhXQpQ2A&s=08"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-twitter-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://github.com/Bharathyalagi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/bharath-yalagi-40299424b"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
