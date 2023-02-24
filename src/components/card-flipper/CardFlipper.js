import React from 'react'
import PropTypes from "prop-types";

import styles from "./CardFlipper.module.css";

const CardFlipper = ({ cardStyle, isFlipped, flipDirection, flipBackAndForth, children }) => {
  
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
    },
    front: {
      position: isFlipped ? "absolute" : "relative",
      transform: `${flipDirection === 'horizontal' ? 'rotateY' : 'rotateX'}(${getRotation().front}deg)`,
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
};

CardFlipper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  isFlipped: PropTypes.bool,
  flipDirection: PropTypes.bool,
  flipBackAndForth: PropTypes.bool,
};

export default CardFlipper