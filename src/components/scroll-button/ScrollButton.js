import React, { useState, useEffect } from 'react';
import { faCircleArrowUp }  from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './ScrollButton.module.css'
  
const ScrollButton = () => {
  
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleVisible = () => {
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      scrolled > 30 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener('scroll', handleVisible);

    return () => {
      window.removeEventListener('scroll', handleVisible);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
    
  return (
    <button
      className={styles['scroll-btn']}
      style={{display: visible ? 'inline' : 'none'}}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faCircleArrowUp} size="2x" />
    </button>
  );
}
  
export default ScrollButton;