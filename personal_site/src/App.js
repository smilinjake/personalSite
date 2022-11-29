import "./App.css";
import Home from "./Components/Home.jsx";
import HomeIcon from "@mui/icons-material/Home";
import ColorButton from "./Components/ColorButton.jsx";

function App() {
  let topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="Body">
      <div
        className="HomeIconPosition"
        onClick={() => {
          topFunction();
        }}
      >
        <div className="HomeButton">
          <HomeIcon fontSize="large" className="HomeIcon" />
        </div>
      </div>
      <Home />
      <div id="Nav">
        {/* <nav className="links-home"> */}
        <a className="Link" href="/contact">
          <ColorButton variant="outlined">Contact</ColorButton>
        </a>
        <a className="Link" href="/info">
          <ColorButton variant="outlined">Info</ColorButton>
        </a>
        <a className="Link" href="/resume">
          <ColorButton variant="outlined">Resume</ColorButton>
        </a>
        {/* </nav> */}
      </div>
    </div>
  );
}

export default App;
