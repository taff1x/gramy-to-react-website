
import React from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollButton } from './components';
import { LandingPage, Header, Socials, AboutUs, Navbar, Gallery, Videos } from './layouts'

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
    <Videos />
    <ScrollButton />
  </Router>
  );
}

export default App;
