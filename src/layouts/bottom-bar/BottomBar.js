import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faCircleArrowUp }  from "@fortawesome/free-solid-svg-icons"

import styles from './BottomBar.module.css'

const scrollToTop = () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
};

const BottomBar = () => {
  return (
    <div className={styles["bottom-bar"]}>
      <div className={styles["bottom-bar-content"]}>
        <div className={styles["contact-info"]}>
          <a href="tel:+48508648037">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <span>508-648-037</span>
          </a>
        </div>
        <div className={styles["social-links"]}>
          <a href="https://www.youtube.com/@gramyto9959" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com/Zesp%C3%B3%C5%82-GraMy-To-103478001700219/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@gramy_to" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a href="https://www.instagram.com/gramy_to/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className={styles["copyright-info"]}>
          <span>&copy; 2023</span>
          <a href="https://www.linkedin.com/in/marcin-taff/" target="_blank" rel="noreferrer">
            Marcin Taff
          </a>
          <div>
          <button className={styles["button-up"]}onClick={scrollToTop}>
            <FontAwesomeIcon icon={faCircleArrowUp} size="2x" />
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default BottomBar