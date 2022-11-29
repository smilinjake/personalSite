import React from "react";
import "../App.css";
import ColorButton from "./ColorButton.jsx";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";

const InfoSection = () => {
  return (
    <>
      <div className="HomeIconPosition">
        <a href="/">
          <div className="HomeButton">
            <HomeIcon fontSize="large" className="HomeIcon" />
          </div>
        </a>
      </div>

      <div className="Info-section">
        {/* <Grid className="Info" container item direction="column"> */}
        <div className="Info">
          <div className="InfoRow-1">
            <div className="InfoColumn-1">
              <div className="InfoRow-1">
                <div className="BlueBoxInfo">
                  <h1 className="TypographyH1">
                    <strong className="StrongTitle">ABOUT</strong>
                  </h1>
                </div>
                <h1 className="TypographyH1Info">ME</h1>
              </div>
              <h3 className="Typography">I am a full stack web developer.</h3>
              <p className="Typography">
                I wasn't always a <strong>web developer</strong>. But I've
                always loved <strong>making things</strong> and working with my
                hands. Originally I'm from Texas and spent ten years working for
                my father in a <strong>meat market</strong>. It wasn't my dream
                to take over the family business so I saved and practiced and
                was accepted into <strong>Hack Reactor</strong>, a fantastic{" "}
                <strong>full stack bootcamp</strong> in Austin, Texas. After
                graduating, I was offered a position at{" "}
                <strong>Cynopsis Solutions</strong>, where I worked for 7 months
                until the completion of our project. Now that is complete and{" "}
                <strong>I am currently looking for remote work</strong>!
              </p>
            </div>
          </div>
          {/* <p className="Typography">
            I wasn't always a web developer. I was raised in Lufkin, Texas.
            family business meat market My father owns a meat market there and
            thats what I thought I would be doing for my life. I worked there
            for 10 years. But I always wanted to leave my home town and go see
            the world. My best friends brother was in web development and since
            I love making things I decided to take the plunge and make a career
            change. I started my journey in web development about 4 years ago. I
            graduated from Hack Reactor in July of 2021. I got my first job at a
            company called Cynopsis Solutions the following Febuary (after
            taking a break from it all to visit with my now fiance in france). I
            absolutely loved it. Then out of the blue Cynopsis closed all
            offices outside of Singapore. So here I am now, you're all caught
            up!
          </p> */}
          {/* <h3 className="Typography">I am currently looking for remote work</h3> */}
          <div className="links">
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
          {/* </Grid> */}
        </div>
      </div>
    </>
  );
};

export default InfoSection;
