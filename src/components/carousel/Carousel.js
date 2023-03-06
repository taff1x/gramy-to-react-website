import React, { useState, useEffect, useRef, useCallback } from "react";

import styles from "./Carousel.module.css";

const Carousel = ({ slides, carouselStyle, slideStyle, timeSliding, slidingFunction }) => {
  const numItems = slides.length;

  let ref = useRef(null);

  const [pos, setPos] = useState(0);
  const [swiped, setSwiped] = useState("");
  const [time, setTime] = useState(timeSliding);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    if (swiped) {
      const timer = setTimeout(() => {
        const newPos = swiped === "left" ? 0 : numItems - 1;
        setTime(0);
        setPos(newPos);
      }, time * 1000);

      return () => clearTimeout(timer);
    }
  }, [swiped, time, numItems]);

  useEffect(() => {
    if (!swiped) {
      if (pos >= numItems) {
        setSwiped("left");
      } else if (pos < 0) {
        setSwiped("right");
      }
    } else {
      if (pos === 0 || pos === numItems - 1) {
        console.log("Czyszczę swiped dla pos = " + pos);
        setSwiped("");
      }
    }
  }, [pos, swiped, numItems]);

  useEffect(() => {
    ref.current.children[0].style.transform =
      swiped === "left" ? `translateX(${numItems}00%)` : "none";
    ref.current.children[numItems - 1].style.transform =
      swiped === "right" ? `translateX(-${numItems}00%)` : "none";
  }, [swiped, numItems]);

  const next = useCallback(() => {
    const newPos = (pos + 1) % (numItems + 1);
    swiped && pos !== 0 ? setTime(0) : setTime(timeSliding);
    console.log(
      "Będzie ustawione newPos = " + newPos + " oraz swiped jest = " + swiped
    );
    setPos(newPos);
  }, [pos, swiped, timeSliding, numItems]);

  const prev = useCallback(() => {
    const newPos =
      pos === 0
        ? -1
        : pos === -1
        ? numItems - 1
        : Math.abs(pos - 1) % (numItems + 1);
    swiped && pos !== numItems - 1 ? setTime(0) : setTime(timeSliding);
    console.log(
      "Będzie ustawione newPos = " + newPos + " oraz swiped jest = " + swiped
    );
    setPos(newPos);
  }, [pos, swiped, timeSliding, numItems]);

  useEffect(() => {
    let intervalId = null;

    if (play) {
      intervalId = setInterval(() => {
        next();
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [play, next]);

  const handlePlay = () => {
    setPlay((play) => !play);
  };

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
            ></div>
          ))}
        </div>

        <div className={styles.controls}>
          <div className={styles.navigation}>
            <button className={styles.prev} onClick={prev}>
              «
            </button>
            <button className={styles.next} onClick={next}>
              »
            </button>
          </div>
          <button className={styles.play} onClick={handlePlay}>
            {play ? "❚❚" : "▶"}
          </button>
        </div>
      </div>
    </>
  );
};

Carousel.defaultProps = {
  timeSliding : 1,
  slidingFunction : "ease",
  slideStyle : {},
  carouselStyle : {},
};

export default Carousel;
