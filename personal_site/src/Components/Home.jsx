import React from "react";
// import Typography from "@mui/material/Typography";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const ColorButton = styled(Button)(({ theme }) => ({
  // color: theme.palette.getContrastText('#fafafa'),
  color: "#fafafa",
  // backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: "#fafafa",
  },
  borderRadius: "25px",
  borderColor: "#fafafa",
  marginRight: "5px",
  marginLeft: "5px",
}));
const Home = () => {
  return (
    <div className="HomePage">
      {/* <Grid className="HomeBorder" container item direction="row"> */}
      <Grid className="Home" container item direction="column">
        <span className="HomeBorder">
          <div className="MyImage"></div>
          <h1 className="Tyopgraphy" variant="h1">
            JAKE WARD
          </h1>
          <nav className="links">
            <a href="/contact">
              <ColorButton variant="outlined">Contact</ColorButton>
            </a>
            <a href="/info">
              <ColorButton variant="outlined">Info</ColorButton>
            </a>
            <a href="/resume">
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
