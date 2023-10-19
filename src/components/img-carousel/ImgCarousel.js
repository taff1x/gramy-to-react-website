import React, { useEffect, useRef } from "react";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css'

import styles from "./ImgCarousel.module.css";

const ImgCarousel = ({slides}) => {

  const carouselRef = useRef(null);
  
  useEffect(() => {
    carouselRef.current.play();
  }, []);

  return (
    <>
      <Carousel className={styles['img-responsive']} images={slides} ref={carouselRef} />
    </>
  );
  };

export default ImgCarousel;
