
import React from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, LandingPage, Header, Socials, AboutUs } from './components';

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
  </Router>
  );
}

export default App;
