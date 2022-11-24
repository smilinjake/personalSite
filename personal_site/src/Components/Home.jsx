import React from "react";
import "../App.css";
import ColorButton from "./ColorButton.jsx";
import HomeIcon from "@mui/icons-material/Home";

const Home = () => {
  return (
    <>
      <div className="HomeIconPosition">
        <div className="HomeButton">
          <HomeIcon fontSize="large" className="HomeIcon" />
        </div>
      </div>
      <div className="HomePage">
        <div className="Intro">
          <div className="IntroLine">
            <h1 className="Typography">HI! I'M</h1>
            <div className="BlueBox">
              <h1 className="TypographyH1">
                <strong>JAKE</strong>
              </h1>
            </div>
          </div>
          <h2 className="Typography">A FULL STACK WEB DEVELOPER</h2>
        </div>
        <nav className="links-home">
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
      </div>
    </>
  );
};

export default Home;
