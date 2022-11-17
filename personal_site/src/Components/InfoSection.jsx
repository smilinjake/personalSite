import React from "react";
import "../App.css";
import ColorButton from "./ColorButton.jsx";
import Grid from "@mui/material/Grid";

const InfoSection = () => {
  return (
    <div className="Info-section">
      <Grid className="Info" container item direction="column">
        <h3 className="Tyopgraphy">Web Developer</h3>
        <h4 className="Tyopgraphy">Currently looking for remote work</h4>
        <div>
          <a className="Link" href="/contact">
            <ColorButton variant="outlined">Contact</ColorButton>
          </a>
          <a className="Link" href="/resume">
            <ColorButton variant="outlined">Resume</ColorButton>
          </a>
          <a className="Link" href="/">
            <ColorButton variant="outlined">Home</ColorButton>
          </a>
        </div>
      </Grid>
    </div>
  );
};

export default InfoSection;
