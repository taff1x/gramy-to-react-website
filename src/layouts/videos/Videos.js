import React, { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { Youtube } from '../../components';
import videosList from '../../data/videos-list.json';

import styles from './Videos.module.css';

const Videos = ({ isScrolling, sectionName, setActiveSection }) => {
  const [refsById, setRefsById] = useState({});
  const videosRef = useRef(null);

  // Use the custom hook to log when the Videos becomes visible
  useIntersectionObserver(
    isScrolling,
    videosRef,
    () => {
      setActiveSection(sectionName);
    },
    1.0
  );

  useEffect(() => {
    const refs = {};
    videosList.forEach((video) => {
      refs[video.id] = React.createRef(null);
    });
    setRefsById(refs);
  }, []);

  const stopAllVideos = (curIndex) => {
    console.log('VideoCurIndex = ' + curIndex)
    Object.values(refsById).forEach((ref) => {
      if (ref.current && ref.current.id !== `videoNo-${curIndex}`) {
        const stopVideo = ref.current.src
        ref.current.src = stopVideo;
      }
    });
  };

  return (
    <div className={styles['container']} id="videos" ref={videosRef}>
      <h3>WIDEO:</h3>
      <Carousel
        hasIndexBoard="topRight"
        hasSizeButton="bottomRight"
        canAutoPlay={false}
        hasDotButtons="bottom"
        hasThumbnails={false}
        className={styles['carousel-background']}
        onIndexChange={({curIndex}) => stopAllVideos(curIndex)}
      >
        {videosList.map((video) => (
          <Youtube key={video.id} videoNo={video.id} embedId={video.embedId} ref={refsById[video.id]} />
        ))}
      </Carousel>
    </div>
  );
};

export default Videos;
