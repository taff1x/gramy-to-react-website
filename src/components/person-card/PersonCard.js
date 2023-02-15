import React from "react";
import styles from "./PersonCard.module.css";

const PersonCard = ({ name, imgUrl, note, handleFlip}) => {
  return (
    <div className={styles["person"]}>
      <h2>{name}</h2>
      <img className={styles["person__img"]} src={imgUrl} alt={name} />
      <p>{note}</p>
      <button onClick={() => handleFlip()}>
        Flip me biatch
      </button>
    </div>
  );
};

export default PersonCard;
