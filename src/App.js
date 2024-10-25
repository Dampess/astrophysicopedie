// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Home from "./pages/Home";
import Stars from "./pages/Stars"; 
import Galaxies from "./pages/Galaxies"; 
import Laws from "./pages/Laws"; 
import LawDetails from "./pages/LawsDetails";
import Footer from "./components/Footer"; 
import News from "./pages/News";
import Tools from "./pages/Tools";
import Visualizations from "./pages/Visualizations";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/astrophysicopedie" element={<Home />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/galaxies" element={<Galaxies />} />
        <Route path="/laws" element={<Laws />} />
        <Route path="/laws/:title" element={<LawDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/visualizations" element={<Visualizations />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
