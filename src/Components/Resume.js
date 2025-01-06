import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/profile.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Bharath Yalagi</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is Bharath Yalagi. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Kalkere-560083, Bangalore, Karnataka</p>
            <h5>Phone</h5>
            <p>(+91) 9611557513</p>
            <h5>Email</h5>
            <p>bharathyalagi29738@gmail.com</p>
            
          
          
          </Cell>
          <Cell className="resume-right-col" col={8}>
            
            
           
            

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2017}
              schoolName={"Kakatiya Education Society"}
              degreeName={"10th Std"}
            />

              <Education
              startYear={2017}
              endYear={2019}
              schoolName={"Sachetan PU College"}
              degreeName={"2nd PUC"}
            />
            <Education
              startYear={2019}
              endYear={2023}
              schoolName={"Amc Engineering College"}
              degreeName={"BE In Computer Science and Engineering"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={60} />
            <Skills skill={"SQL Server"} progress={60} />
            <Skills skill={"Java"} progress={50} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Achievments</h2>
            <h6>Graduated From Engineering</h6>
            <h6>Full Stack Web Developer</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
