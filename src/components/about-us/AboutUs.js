import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { PersonCard } from '../../components';

import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  }

  return (
    <div className={styles['container']}>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <PersonCard
          handleFlip={handleFlip}
          name={"Mariusz"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster"
        />
        <PersonCard 
          handleFlip={handleFlip}
          name={"Waldek"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster 2"
        />
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <PersonCard
          handleFlip={handleFlip}
          name={"Mariusz"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster"
        />
        <PersonCard 
          handleFlip={handleFlip}
          name={"Waldek"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster 2"
        />
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <PersonCard
          handleFlip={handleFlip}
          name={"Mariusz"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster"
        />
        <PersonCard 
          handleFlip={handleFlip}
          name={"Waldek"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster 2"
        />
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <PersonCard
          handleFlip={handleFlip}
          name={"Mariusz"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster"
        />
        <PersonCard 
          handleFlip={handleFlip}
          name={"Waldek"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster 2"
        />
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <PersonCard
          handleFlip={handleFlip}
          name={"Mariusz"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster"
        />
        <PersonCard 
          handleFlip={handleFlip}
          name={"Waldek"}
          imgUrl='http://placekitten.com/g/200/300'
          note="Eloszka tu majster 2"
        />
      </ReactCardFlip>
    </div>
  );
};

export default AboutUs;
