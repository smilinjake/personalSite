import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ContactMe from "./Components/ContactMe.jsx";
// import InfoSection from "./Components/InfoSection.jsx";
// import Resume from "./Components/Resume.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="info" element={<InfoSection />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </BrowserRouter> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
