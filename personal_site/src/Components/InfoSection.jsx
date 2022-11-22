import React from "react";
import "../App.css";
import ColorButton from "./ColorButton.jsx";
import Grid from "@mui/material/Grid";

const InfoSection = () => {
  return (
    <div className="Info-section">
      <Grid className="Info" container item direction="column">
        <h2 className="Typography">A Little Bit About Me:</h2>
        <h3 className="Typography">I am a full stack web developer.</h3>
        <p className="Typography">
          I wasn't always a <strong>web developer</strong>. I was raised in a
          small town in Texas called Lufkin. My father owns a meat market there
          and thats what I thought I would be doing for my life. I worked there
          for <strong>10 years</strong>. But I always wanted to leave my home
          town and go see the world. My best friends brother was in web
          development and since I love making things I decided to take the
          plunge and make a career change. I started my journey in web
          development about 4 years ago. I{" "}
          <strong>graduated from Hack Reactor</strong> in July of 2021. I got my
          first job at a company called <strong>Cynopsis Solutions</strong> the
          following Febuary (after taking a break from it all to visit with my
          now fiance in france). I absolutely loved it. Then out of the blue
          Cynopsis closed all offices outside of Singapore. So here I am now,{" "}
          <strong>you're all caught up</strong>!
        </p>
        <p className="Typography">
          I wasn't always a web developer. I was raised in Lufkin, Texas. family
          business meat market My father owns a meat market there and thats what
          I thought I would be doing for my life. I worked there for 10 years.
          But I always wanted to leave my home town and go see the world. My
          best friends brother was in web development and since I love making
          things I decided to take the plunge and make a career change. I
          started my journey in web development about 4 years ago. I graduated
          from Hack Reactor in July of 2021. I got my first job at a company
          called Cynopsis Solutions the following Febuary (after taking a break
          from it all to visit with my now fiance in france). I absolutely loved
          it. Then out of the blue Cynopsis closed all offices outside of
          Singapore. So here I am now, you're all caught up!
        </p>
        <h3 className="Typography">I am currently looking for remote work</h3>
        <div>
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
      </Grid>
    </div>
  );
};

export default InfoSection;
