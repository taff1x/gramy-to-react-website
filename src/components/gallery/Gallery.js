import React from 'react'

import { Carousel } from './../../components'

import styles from './Gallery.module.css'


const slides = Array.from({ length: 37 }, (_, index) => index+1).map((number) => ({
    src: require(`./../../assets/img/gallery/${number}.jpg`)
  }));

const Gallery = () => {
  return (
    <div className={styles.container}> 
        <Carousel className={styles.container} slides={slides} slideStyle={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} carouselStyle={{ height: '600px', width: '900px' }}/>
    </div>
    
  )
}

export default Gallery