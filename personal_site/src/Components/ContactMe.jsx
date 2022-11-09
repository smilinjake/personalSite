import React from "react";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fafafa",
  "&:hover": {
    backgroundColor: "#fafafa",
  },
  borderRadius: "25px",
  borderColor: "#fafafa",
  marginRight: "5px",
  marginLeft: "5px",
}));

const ContactMe = () => {
  return (
    <div className="Contact-me">
      <Grid container direction="column" className="contact">
        <h2 className="Tyopgraphy">Contact Me:</h2>
        {/* <Typography className="Tyopgraphy" variant="h2">
          Contact Me:
        </Typography> */}
        <Grid className="ContactIcons" container item direction="row">
          <span className="Centered">
            <span className="IconBubble">
              <PhoneIcon fontSize="large" />
            </span>
            <h4>PHONE</h4>
            <h3>+1 (936) 635-3826</h3>
          </span>
          <span className="Centered">
            <span className="IconBubble">
              <EmailIcon fontSize="large" />
            </span>
            <h4>EMAIL</h4>
            <h3>Smilinjake@gmail.com</h3>
          </span>
          <span className="Centered">
            <span className="IconBubble">
              <LinkedInIcon fontSize="large" />
            </span>
            <h4>LINKEDIN</h4>
            <a href="https://www.linkedin.com/in/jacobward96/">My Linkedin</a>
          </span>
          <span className="Centered">
            <span className="IconBubble">
              <GitHubIcon fontSize="large" />
            </span>
            <h4>GITHUB</h4>
            <a href="https://github.com/smilinjake">My Github</a>
          </span>
        </Grid>
        <div>
          <ColorButton variant="outlined">
            <Link className="Link" to="/resume">
              Resume
            </Link>
          </ColorButton>
          <ColorButton variant="outlined">
            <Link className="Link" to="/info">
              Info
            </Link>
          </ColorButton>
          <ColorButton variant="outlined">
            <Link className="Link" to="/">
              Home
            </Link>
          </ColorButton>
        </div>
      </Grid>
    </div>
  );
};

export default ContactMe;
