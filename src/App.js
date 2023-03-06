
import React from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, LandingPage, Header, Socials, AboutUs, ScrollButton, Gallery } from './components';

// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';

import './App.css';

function App() {
  return (
  <Router>
    <Header>
      <Navbar />
      <LandingPage />
    </Header>
    <Socials />
    <AboutUs />
    <Gallery />
    <ScrollButton />
  </Router>
  );
}

export default App;
