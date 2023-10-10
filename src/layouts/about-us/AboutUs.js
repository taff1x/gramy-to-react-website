
import React from 'react'
import { PersonCard } from "../../components";
import musicians from "../../data/musicians.json"

import styles from "./AboutUs.module.css";

const AboutUs = () => {

  const image = (imgUrl) => {
    return require(`./../../${imgUrl}`);
  }

  return (
    <div className={styles["container"]}>
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
