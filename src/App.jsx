import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <NavBar />
      <h1 id="aboveTheFold">
        main fold
      </h1>
      <h6 id="cards">links to projects</h6>
    </>
  )
};

export default App;
