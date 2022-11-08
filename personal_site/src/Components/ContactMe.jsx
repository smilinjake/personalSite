import React from "react";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

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
      <Typography className="Tyopgraphy" variant="h5">
        Contact Me
      </Typography>
      <div>
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
    </div>
  );
};

export default ContactMe;
