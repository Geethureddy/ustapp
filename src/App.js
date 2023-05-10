import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

import AboutUS from "./pages/aboutuspage/AboutUs";
import JoinTribe from "./pages/joinTribepage/JoinTribe";
import OurThinking from "./pages/ourthinkingpage/OurThinking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main_container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/ourthinking" element={<OurThinking />} />
          <Route path="/ourapproach" element={<AboutUS />} />
          <Route path="/jointribe" element={<JoinTribe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
