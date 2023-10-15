
import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks';
import { PersonCard } from "../../components";
import musicians from "../../data/musicians.json"

import styles from "./AboutUs.module.css";

const AboutUs = ({ isScrolling, sectionName, setActiveSection }) => {
  const aboutRef = useRef(null);

  // Use the custom hook to log when the AboutUs becomes visible
  useIntersectionObserver(
    isScrolling,
    aboutRef,
    () => {
      setActiveSection(sectionName);
    },
    0.15
  );

  const image = (imgUrl) => {
    return require(`./../../${imgUrl}`);
  }

  return (
    <div className={styles["container"]} id="about" ref={aboutRef}>
      {
        musicians.map( (musician) => {
          return (
            <PersonCard
              key={musician.id}
              name={musician.name}
              imgUrl={image(musician.imgUrl)}
              note={musician.note}
              fullNote={musician.fullNote}
            />
          )
        }
        ) 
      }
    </div>
  );
};

export default AboutUs;
