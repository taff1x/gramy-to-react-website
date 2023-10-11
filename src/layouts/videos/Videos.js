import React from 'react'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { Youtube } from '../../components'
import videosList from "../../data/videos-list.json"

import styles from './Videos.module.css'


// const slides = Array.from({ length: 10 }, (_, index) => index+1).map((number) => ({
//     src: require(`./../../assets/img/gallery/${number}.jpg`)
//   }));

const Videos = () => {
  return (
    <div className={styles["container"]} id="videos">
      <h3>@WIDEO:</h3>
      <Carousel
        hasIndexBoard='topRight'
        hasSizeButton='bottomRight'
        canAutoPlay={false}
        hasDotButtons='bottom'
        hasThumbnails={false}
        // shouldSwipeOnMouse={false} // for selecting text
        // shouldMinimizeOnSwipeDown={false} // for vertical overflow scrolling
        className={styles['carousel-background']}
      >
        {
          videosList.map( (video) => {
            return (
              <Youtube
                key={video.id}
                embedId={video.embedId}
              />
            )
          }
          ) 
          
        }
      </Carousel>   
    </div>
  );
};

export default Videos