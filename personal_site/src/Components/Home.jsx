import React from "react";
import Typography from "@mui/material/Typography";
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
      <Grid className="Home" container item direction="column">
        <img
          className="MyImage"
          src="/images/websiteImage.jpeg"
          alt="me"
          height="250"
          width="250"
        ></img>
        <Typography className="Tyopgraphy" variant="h5">
          Web Developer
        </Typography>
        <Typography className="Tyopgraphy" variant="h1">
          JAKE WARD
        </Typography>
        <nav className="links">
          <ColorButton variant="outlined">
            <Link className="Link" to="/contact">
              Contact
            </Link>
          </ColorButton>
          <ColorButton variant="outlined">
            <Link className="Link" to="/info">
              Info
            </Link>
          </ColorButton>
          <ColorButton variant="outlined">
            <Link className="Link" to="/resume">
              Resume
            </Link>
          </ColorButton>
        </nav>
      </Grid>
    </div>
  );
};

export default Home;
