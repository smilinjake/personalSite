import React from "react";
import "../App.css";
import ColorButton from "./ColorButton.jsx";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactMe = () => {
  return (
    <div className="Contact-me">
      <Grid container direction="column" className="contact">
        <h2 className="Typography">Contact Me:</h2>
        <Grid className="ContactIcons" container item direction="row">
          <span className="Centered">
            <span className="IconBubble">
              <PhoneIcon fontSize="large" />
            </span>
            <h4>PHONE</h4>
            <h3>+1 (936) 635-3826</h3>
          </span>
          <span className="Centered">
            <a className="ContactBubbleLink" href="mailto:smilinjake@gmail.com">
              <span className="IconBubble">
                <EmailIcon fontSize="large" className="ButtonLink" />
              </span>
            </a>
            <h4>EMAIL</h4>
            <a className="ContactBubbleLink" href="mailto:smilinjake@gmail.com">
              Smilinjake@gmail.com
            </a>
          </span>
          <span className="Centered">
            <a
              className="ContactBubbleLink"
              href="https://www.linkedin.com/in/jacobward96/"
            >
              <span className="IconBubble">
                <LinkedInIcon fontSize="large" className="ButtonLink" />
              </span>
            </a>
            <h4>LINKEDIN</h4>
            <a href="https://www.linkedin.com/in/jacobward96/">My Linkedin</a>
          </span>
          <span className="Centered">
            <a href="https://github.com/smilinjake">
              <span className="IconBubble">
                <GitHubIcon fontSize="large" className="ButtonLink" />
              </span>
            </a>
            <h4>GITHUB</h4>
            <a href="https://github.com/smilinjake">My Github</a>
          </span>
        </Grid>
        <div>
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
      </Grid>
    </div>
  );
};

export default ContactMe;
