import React from 'react'

import { MyCarousel } from '../../components'

import styles from './Gallery.module.css'


const slides = Array.from({ length: 37 }, (_, index) => index+1).map((number) => ({
    src: require(`./../../assets/img/gallery/${number}.jpg`)
  }));

const Gallery = () => {
  return (
    <div className={styles.container}>
        <h3>@GALERIA:</h3>
        <MyCarousel slides={slides} />
    </div>
    
  )
}

export default Gallery