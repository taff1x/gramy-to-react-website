
import React from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ScrollButton } from './components';
import { LandingPage, Header, Socials, AboutUs, Navbar, Gallery, Videos, BottomBar } from './layouts'

import './App.css';

function App() {
  return (
    <Router>
      <Header>
        <Navbar />
        <LandingPage />
      </Header>
      <Socials />
      <Routes>
        <Route exact path="/" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<BottomBar />} />
      </Routes>
      <ScrollButton />
  </Router>
  );
}

export default App;
