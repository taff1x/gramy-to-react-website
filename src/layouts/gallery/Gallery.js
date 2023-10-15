import React, { useRef } from 'react';
import { ImgCarousel } from '../../components';
import { useIntersectionObserver } from '../../hooks';
import styles from './Gallery.module.css';

const slides = Array.from({ length: 37 }, (_, index) => index + 1).map((number) => ({
  src: require(`./../../assets/img/gallery/${number}.jpg`),
}));

const Gallery = ({ isScrolling, sectionName, setActiveSection }) => {
  const galleryRef = useRef(null);

  // Use the custom hook to log when the gallery becomes visible
  useIntersectionObserver(
    isScrolling,
    galleryRef,
    () => {
      setActiveSection(sectionName);
    },
    0.8
  );

  return (
    <div className={styles.container} id="gallery" ref={galleryRef}>
      <h3>@GALERIA:</h3>
      <ImgCarousel slides={slides} />
    </div>
  );
};

export default Gallery;
