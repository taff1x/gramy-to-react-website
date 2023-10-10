import React from "react";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css'

import styles from "./MyCarousel.module.css";

const MyCarousel = ({slides}) => {
  // const numItems = slides.length;
// prop: thumbnails to be added with lower lower size!

// const imageElements = slides.map((image, index) => (
//   <img
//     src={image.src}
//     key={index}
//   />
// ));

return (
  <>
    <Carousel className={styles['img-responsive']} images={slides} />
  </>
);
};

export default MyCarousel;
