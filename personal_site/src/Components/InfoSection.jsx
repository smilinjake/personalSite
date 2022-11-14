import React from "react";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

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

const InfoSection = () => {
  return (
    <div className="Info-section">
      <Grid className="Info" container item direction="column">
        <Typography className="Tyopgraphy" variant="h5">
          Web Developer
        </Typography>
        <Typography className="Tyopgraphy" variant="h6">
          Currently looking for remote work
        </Typography>
        <img
          className="MyImage"
          src="/images/cssLogo.png"
          alt="me"
          height="75"
          width="75"
        ></img>
        <img
          className="MyImage"
          src="/images/html5Logo.png"
          alt="me"
          height="75"
          width="75"
        ></img>
        <img
          className="MyImage"
          src="/images/jsLogo.jpg"
          alt="me"
          height="75"
          width="75"
        ></img>
        <img
          className="MyImage"
          src="/images/postgresLogo.png"
          alt="me"
          height="75"
          width="75"
        ></img>
        <img
          className="MyImage"
          src="/images/postmanLogo.png"
          alt="me"
          height="75"
          width="75"
        ></img>
        <div>
          <ColorButton variant="outlined">
            <Link className="Link" to="/contact">
              Contact
            </Link>
          </ColorButton>
          <ColorButton variant="outlined">
            <Link className="Link" to="/resume">
              Resume
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

export default InfoSection;
