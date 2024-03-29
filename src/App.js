import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Logo from "./Components/Logo";
import NavBar from "./Components/NavBar";
import AllCountries from "./Components/AllCountries";
import CountryInfo from "./Components/CountryInfo";


function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <Logo/>
        </div>
      </div>
      <div>
        <NavBar/>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/About" element={<About />} />
          <Route path="/country/:name" element={<CountryInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
