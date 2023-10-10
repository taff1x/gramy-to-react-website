import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"

import styles from "./Socials.module.css"

const Socials = () => {
  return (
    <div className={`${styles['container']} ${styles['socials']}`}>
      <h3>@OBSERWUJ NAS:</h3>
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
      <a href="tel:+48508648037">
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </a>
    </div>
  );
}

export default Socials;
