import React from 'react';
import { faMoon, faSun }  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './DarkLightMode.module.css';
  
const DarkLightMode = ( { curTheme, handleTheme }) => {
  
  const retTheme = curTheme === 'dark' ? 'light' : 'dark';
  
  
  return (
    <button
      className={styles['mode-btn']}
      onClick={() => handleTheme(retTheme)}
    >
      {curTheme === 'dark' && <FontAwesomeIcon icon={faMoon} size="1x" />}
      {curTheme === 'light' && <FontAwesomeIcon icon={faSun} size="1x" />}
    </button>
  );
}
  
export default DarkLightMode;