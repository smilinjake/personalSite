import React from "react";
import "../App.css";
import ColorButton from "./ColorButton.jsx";

const Home = () => {
  return (
    <div id="Home">
      <div className="HomePage">
        <div className="IntroLine">
          <h1 className="Typography">HI! I'M</h1>
          <div className="BlueBox">
            <h1 className="TypographyH1">
              <strong className="StrongTitle">JAKE</strong>
            </h1>
          </div>
        </div>
        <h2 className="Typography">A FULL STACK WEB DEVELOPER</h2>
      </div>

      <div id="Nav">
        <a className="Link" href="/contact">
          <ColorButton variant="outlined">Contact</ColorButton>
        </a>
        <a className="Link" href="/info">
          <ColorButton variant="outlined">Info</ColorButton>
        </a>
        <a className="Link" href="/resume">
          <ColorButton variant="outlined">Resume</ColorButton>
        </a>
      </div>
    </div>
  );
};

export default Home;
