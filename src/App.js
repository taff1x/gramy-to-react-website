
import React from "react";

import { BrowserRouter as Router} from "react-router-dom";
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
        <AboutUs />
        <Gallery />
        <Videos />
        <BottomBar />
      <ScrollButton />
  </Router>
  );
}

export default App;
