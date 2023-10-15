
import React, { useState } from "react";

import { useUpdateHash } from "./hooks";
import { ScrollButton } from './components';
import { LandingPage, Header, Socials, AboutUs, Navbar, Gallery, Videos, BottomBar} from './layouts'

import './App.css';

function App() {

  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  
  useUpdateHash(activeSection);

  const handleScrolling = () => {
    setIsScrolling(true);

    // Clear the flag after scrolling ends
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <>
      <Header>
        <Navbar isScrolling={isScrolling} sectionName='home' setActiveSection={setActiveSection} handleScrolling={handleScrolling} />
        <LandingPage />
      </Header>
      <Socials />
      <AboutUs isScrolling={isScrolling} sectionName='about' setActiveSection={setActiveSection} />
      <Gallery isScrolling={isScrolling} sectionName='gallery' setActiveSection={setActiveSection} />
      <Videos isScrolling={isScrolling} sectionName='videos' setActiveSection={setActiveSection} />
      <BottomBar isScrolling={isScrolling} sectionName='contact' setActiveSection={setActiveSection} />
      <ScrollButton />
    </>
  );
}

export default App;
