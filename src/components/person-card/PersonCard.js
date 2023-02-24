import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'

import { CardFlipper } from '../../components';

import styles from "./PersonCard.module.css";

const CardFront = ({ name, imgUrl, note, handleFlip, handleFadeIn }) => {
  
  return (
    // FRONT OF THE CARD
    <div className={styles["person"]}>
      <figure>
        <figcaption>{name}</figcaption>
        <div className={styles["img__container"]}>
          <img className={styles["img"]} src={imgUrl} alt={name} />
        </div>
      </figure>
      <p>{note.map( (skill, index, arr) => (
        <>
          <span key={index}>#</span>{skill}{index !== arr.length-1 ? ' ' : ''}   
        </>    
      ))}</p>
      <button onClick={ () => { handleFlip() ; handleFadeIn(1)} }>
        Dowiedz się więcej
      </button>
    </div>
  );
};


const CardBack = ({ name, imgUrl, note, fullNote, handleFlip, handleFadeIn, fadeIn }) => {
  return (
    // BACK OF THE CARD
    <div className={`${styles["person"]} ${styles["back"]}`}>
      <figure>
        <figcaption>{name}</figcaption>
        <div className={styles["img__container"]}>
          <img className={styles["img"]} src={imgUrl} alt={name} />
          <p style={{ opacity: fadeIn, transitionDuration: fadeIn ? `${2}s` : `${0}s` }}>{fullNote}</p>
        </div>
      </figure>
      <p>{note.map( (skill, index, arr) => (
        <>
          <span key={index}>#</span>{skill}{index !== arr.length-1 ? ' ' : ''}   
        </>      
      ))}</p>
      <button onClick={() => { handleFlip() ; handleFadeIn(0) }}>
        Wróć
      </button>
    </div>
  )
}

const PersonCard = ({ name, imgUrl, note, fullNote }) => {

  const [flip, setFlip] = useState(false);
  const [fadeIn, setFadeIn] = useState(0);

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isLaptopOrBigger = useMediaQuery({ query: '(min-width: 1200px)' });

  const cardStyle = {
    width : isLaptopOrBigger ? '31%' : isTablet ? '46%' : '90%',
  }
  
  const handleFlip = () => {
    setFlip(!flip);
  }
  
  const handleFadeIn = (opacity) => {
    setFadeIn(opacity);
  }
  
  return (
    <CardFlipper cardStyle={cardStyle} isFlipped={flip} flipDirection="horizontal" flipBackAndForth={false} >
      <CardFront name={name} imgUrl={imgUrl} note={note} handleFlip={handleFlip} handleFadeIn={handleFadeIn} />
      <CardBack name={name} imgUrl={imgUrl} note={note} fullNote={fullNote} handleFlip={handleFlip} fadeIn={fadeIn} handleFadeIn={handleFadeIn} />
    </CardFlipper>
  )
}

export default PersonCard;
