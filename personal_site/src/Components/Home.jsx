import React from "react";
import "../App.css";
import ColorButton from "./ColorButton.jsx";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <div className="HomePage">
      <Grid className="Home" container item direction="column">
        <span className="HomeBorder">
          <div className="MyImage"></div>
          <h1 className="Tyopgraphy" variant="h1">
            JAKE WARD
          </h1>
          <nav className="links">
            <a className="Link" href="/contact">
              <ColorButton variant="outlined">Contact</ColorButton>
            </a>
            <a className="Link" href="/info">
              <ColorButton variant="outlined">Info</ColorButton>
            </a>
            <a className="Link" href="/resume">
              <ColorButton variant="outlined">Resume</ColorButton>
            </a>
          </nav>
        </span>
      </Grid>
      {/* </Grid> */}
    </div>
  );
};

export default Home;
