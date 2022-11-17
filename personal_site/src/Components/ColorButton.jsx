import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fafafa",
  "&:hover": {
    backgroundColor: "whitesmoke",
    color: "Black",
    borderColor: "whitesmoke",
  },
  borderRadius: "25px",
  borderColor: "whitesmoke",
  marginRight: "5px",
  marginLeft: "5px",
}));

export default ColorButton;
