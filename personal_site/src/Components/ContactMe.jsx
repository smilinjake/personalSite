import React from "react";
import "../App.css";
import ColorButton from "./ColorButton.jsx";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";

const ContactMe = () => {
  return (
    <>
      <div className="HomeIconPosition">
        <a href="/">
          <div className="HomeButton">
            <HomeIcon fontSize="large" className="HomeIcon" />
          </div>
        </a>
      </div>
      <div className="Contact-Body">
        {/* <Grid container direction="column" className="contact"> */}
        <div className="Contact-Row">
          <div className="Left-Side">
            <span className="Contact-Block">
              <span className="IconBubble">
                <div className="Circle">
                  <PhoneIcon fontSize="large" className="BiggerIcon" />
                </div>
              </span>
              <div>
                <h3>PHONE</h3>
                <h4>+1 (936) 635-3826</h4>
              </div>
            </span>
            <span className="Contact-Block">
              <a
                className="ContactBubbleLink"
                href="mailto:smilinjake@gmail.com"
              >
                <span className="IconBubble">
                  <EmailOutlinedIcon fontSize="large" className="ButtonLink" />
                </span>
              </a>
              <div className="ContactColumn">
                <h3>EMAIL</h3>
                <a
                  className="ContactBubbleLink"
                  href="mailto:smilinjake@gmail.com"
                >
                  SMILINJAKE@GMAIL.COM
                </a>
              </div>
            </span>
            <span className="Contact-Block">
              <a
                className="ContactBubbleLink"
                href="https://www.linkedin.com/in/jacobward96/"
              >
                <span className="LinkedinBlock">
                  <LinkedInIcon fontSize="large" className="LinkedIn" />
                </span>
              </a>
              <div className="ContactColumn">
                <h3>LINKEDIN</h3>
                <a href="https://www.linkedin.com/in/jacobward96/">
                  JACOB WARD
                </a>
              </div>
            </span>
            <span className="Contact-Block">
              <a href="https://github.com/smilinjake">
                <span className="IconBubble">
                  <GitHubIcon fontSize="large" className="ButtonLink" />
                </span>
              </a>
              <div className="ContactColumn">
                <h3>GITHUB</h3>
                <a href="https://github.com/smilinjake">SMILINJAKE</a>
              </div>
            </span>
          </div>
          <div className="Right-Side">
            <div className="Right-Row">
              <div className="LittleRow">
                <div className="BlueBoxContact">
                  <h1 className="TypographyH1">
                    <strong>GET IN</strong>
                  </h1>
                </div>
              </div>
              <div className="LittleRow">
                <h1 className="TypographyBolder">TOUCH</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <a className="Link" href="/resume">
            <ColorButton variant="outlined">Resume</ColorButton>
          </a>
          <a className="Link" href="/info">
            <ColorButton variant="outlined">Info</ColorButton>
          </a>
          <a className="Link" href="/">
            <ColorButton variant="outlined">Home</ColorButton>
          </a>
        </div>
        {/* </Grid> */}
      </div>
    </>
  );
};

export default ContactMe;
