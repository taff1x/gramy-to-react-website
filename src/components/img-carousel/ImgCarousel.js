import React from "react";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css'

import styles from "./ImgCarousel.module.css";

const ImgCarousel = ({slides}) => {

return (
  <>
    <Carousel className={styles['img-responsive']} images={slides} />
  </>
);
};

export default ImgCarousel;
