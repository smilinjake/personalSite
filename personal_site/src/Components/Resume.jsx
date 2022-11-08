import React from "react";
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
const Resume = () => {
  return (
    <div className="HomePage">
      <Grid className="Home" container item direction="column">
        <img
          className="MyResume"
          src="/images/Resume.png"
          alt="me"
          height="700"
          // width="250"
        ></img>
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
            <Link className="Link" to="/home">
              Home
            </Link>
          </ColorButton>
        </nav>
      </Grid>
    </div>
  );
};

export default Resume;
