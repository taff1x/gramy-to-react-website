import React, { useState, useEffect, useRef, useCallback } from "react";

import styles from "./Carousel.module.css";

const Carousel = ({
  slides,
  carouselStyle,
  slideStyle,
  timeSliding,
  slidingFunction,
  autoPlayStart,
  autoPlayReverse,
  autoPlayInterval
}) => {
  const numItems = slides.length;

  let ref = useRef(null);

  const [pos, setPos] = useState(0);
  const [slideNo, setSlideNo] = useState(1);
  const [swiped, setSwiped] = useState("");
  const [time, setTime] = useState(timeSliding);
  const [play, setPlay] = useState(autoPlayStart);
  const [autoPlayDuration, setAutoPlayDuration] = useState(() =>
    calculateAutoPlayDuration(autoPlayInterval, timeSliding)
  );

  // safety first -> before 1st render for initialization of autoPlayDuration
  function calculateAutoPlayDuration(autoPlayInterval, timeSliding) {
    return autoPlayInterval < timeSliding ? timeSliding : autoPlayInterval;
  }

  // check play duration if changed during life of the component
  useEffect(() => {
    const newAutoPlayDuration = calculateAutoPlayDuration(
      autoPlayInterval,
      timeSliding
    );
    setAutoPlayDuration(newAutoPlayDuration);
  }, [autoPlayInterval, timeSliding]);

  // update slide no. for header & active css class purpose
  useEffect(() => {
    if (pos === -1) {
      setSlideNo(numItems);
    } else if (pos === numItems) {
      setSlideNo(1);
    } else {
      setSlideNo(pos + 1);
    }
  }, [pos, numItems]);

  // Handle state of swiped around
  useEffect(() => {
    if (!swiped) {
      if (pos >= numItems) {
        setSwiped("left");
      } else if (pos < 0) {
        setSwiped("right");
      }
    } else {
      if (pos === 0 || pos === numItems - 1) {
        setSwiped("");
      }
    }
  }, [pos, swiped, numItems]);

  // if swiped around left => show first slide on right hand
  // if swiped around right => show last slide on left hand
  useEffect(() => {
    ref.current.children[0].style.transform =
      swiped === "left" ? `translateX(${numItems}00%)` : "none";
    ref.current.children[numItems - 1].style.transform =
      swiped === "right" ? `translateX(-${numItems}00%)` : "none";
  }, [swiped, numItems]);

  // Go to begin or end once swiped around
  useEffect(() => {
    if (swiped) {
      const timer = setTimeout(() => {
        const newPos = swiped === "left" ? 0 : numItems - 1;
        // ^^ swiped === "right" ? numItems - 1 ^^
        resetTime();
        goDesired(newPos);
      }, time * 1000);

      return () => clearTimeout(timer);
    }
  }, [swiped, time, numItems]);

  // Reset timer to previous value after swiped around
  useEffect(() => {
    let timer = null;
    if (time === 0) {
      timer = setTimeout(() => {
        setTime(timeSliding);
      }, 10);
    }

    return () => clearTimeout(timer);
  }, [time, timeSliding]);

  // show next slide
  const next = useCallback(() => {
    const newPos = (pos + 1) % (numItems + 1);
    if (swiped) resetTime();
    goDesired(newPos);
  }, [pos, swiped, numItems]);

  // show prev slide
  const prev = useCallback(() => {
    const newPos = pos === 0 ? -1 : pos === -1 ? numItems - 1 : pos - 1;
    if (swiped) resetTime();
    goDesired(newPos);
  }, [pos, swiped, numItems]);

  // Autoplay slides functionality
  useEffect(() => {
    let intervalId = null;

    if (play) {
      intervalId = setInterval(() => {
        !autoPlayReverse ? next() : prev();
      }, autoPlayDuration * 1000);
    }

    return () => clearInterval(intervalId);
  }, [play, autoPlayDuration, autoPlayReverse, prev, next]);

  // go to desired slide
  const goDesired = (desired) => {
    setPos(desired);
  };

  // reset time for sliding (needed for swipe around purpose)
  const resetTime = () => {
    setTime(0);
  };

  // handle click on play/pause button
  const handlePlay = () => {
    setPlay((play) => !play);
  };

  // dynamic styles for animation
  let dynamicStyles = {
    transitionTimingFunction: slidingFunction,
    transitionDuration: `${time}s`,
    transform: `translate(${-pos * 100}%)`
  };

  return (
    <>
      <div className={styles.container} style={carouselStyle}>
        <div ref={ref} className={styles.swiper} style={dynamicStyles}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={styles.item}
              style={{ ...slideStyle, backgroundImage: `url(${slide.src})` }}
            >{`POS: ${pos} slide: ${slideNo} numitems: ${numItems}`}</div>
          ))}
        </div>

        <div className={styles.controls}>
          <div className={styles.header}>
            <button className={styles.play} onClick={handlePlay}>
              {play ? "❚❚" : "▶"}
            </button>
            <div>
              {slideNo} / {numItems}
            </div>
          </div>
          <div className={styles.navigation}>
            <button className={styles.prev} onClick={prev}>
              &#10094;
            </button>
            <button className={styles.next} onClick={next}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Carousel.defaultProps = {
  timeSliding: 1,
  slidingFunction: "ease",
  slideStyle: {},
  carouselStyle: {},
  autoPlayStart: true,
  autoPlayReverse: false,
  autoPlayInterval: 3
};

export default Carousel;
