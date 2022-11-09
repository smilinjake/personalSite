import React from "react";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";

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
          <span className="IconBubble">
            <PhoneIcon />
          </span>
        </Grid>
        <Typography className="Tyopgraphy" variant="h5">
          Phone: +1 (936) 635-3826
        </Typography>
        <Typography className="Tyopgraphy" variant="h5">
          Email: smilinjake@gmail.com
        </Typography>
        <Typography className="Tyopgraphy" variant="h5">
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/jacobward96/">My Linkedin</a>
        </Typography>
        <Typography className="Tyopgraphy" variant="h5">
          GitHub: <a href="https://github.com/smilinjake">My Github</a>
        </Typography>
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
      {/* <Grid continer></Grid> */}
    </div>
  );
};

export default ContactMe;
