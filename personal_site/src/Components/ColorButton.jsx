import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fafafa",
  "&:hover": {
    backgroundImage: "radial-gradient(ellipse, whitesmoke 20%, #303030 120%)",
    color: "Black",
    borderColor: "transparent",
  },
  borderRadius: "25px",
  borderColor: "whitesmoke",
  marginRight: "5px",
  marginLeft: "5px",
}));

export default ColorButton;
