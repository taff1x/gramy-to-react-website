import React from 'react'
import PropTypes from "prop-types";

import styles from "./CardFlipper.module.css";

const CardFlipper = ({ cardStyle, isFlipped, flipDirection, flipBackAndForth, timeFlipForward, timeFlipBackward, children }) => {
  
  const getRotation = () => {  
    return {
      back: isFlipped ? 0 : (flipBackAndForth ? -180 : 180),
      front: isFlipped ? 180 : 0,
    }
  }
  
  let dynamicStyles = {
    back: {
      position: isFlipped ? "relative" : "absolute",
      transform: `${flipDirection === 'horizontal' ? 'rotateY' : 'rotateX'}(${getRotation().back}deg)`,
      transition: `${timeFlipBackward}s`
    },
    front: {
      position: isFlipped ? "absolute" : "relative",
      transform: `${flipDirection === 'horizontal' ? 'rotateY' : 'rotateX'}(${getRotation().front}deg)`,
      transition: `${timeFlipForward}s`
    },
  };

  return (
    <div className={styles["card"]} style={ cardStyle }>
      <div className={styles["flip"]}>
        <div className={styles["front"]} style={dynamicStyles.front}>
          {children[0]}
        </div>
        <div className={styles["back"]} style={dynamicStyles.back}>
          {children[1]}
        </div>
      </div>
    </div>
  );
};

CardFlipper.defaultProps = {
  cardStyle: {},
  flipDirection: 'horizontal',
  isFlipped: false,
  flipBackAndForth: true,
  timeFlipForward: 1,
  timeFlipBackward: 1,
};

CardFlipper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  isFlipped: PropTypes.bool,
  flipDirection: PropTypes.string,
  flipBackAndForth: PropTypes.bool,
  timeFlipForward: PropTypes.number,
  timeFlipBackward: PropTypes.number,
};

export default CardFlipper;