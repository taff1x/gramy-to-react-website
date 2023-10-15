import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

import { useIntersectionObserver } from '../../hooks';
import { HashLink as Link } from 'react-router-hash-link'
import { Twirl as Hamburger } from 'hamburger-react'
import { useMediaQuery } from 'react-responsive'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'


import styles from "./Navbar.module.css"
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const Navbar = ( { isScrolling, sectionName, setActiveSection, handleScrolling }) => {

  const [showNavbar, setShowNavbar] = useState(false)
  const [isSticky, setIsSticky] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const isPhone = useMediaQuery({ query: '(max-width: 600px)' });
  
  const navbarRef = useRef(null);

   // Use the custom hook to log when the Navbar becomes visible
   useIntersectionObserver(
    isScrolling,
    navbarRef,
    () => {
      setActiveSection(sectionName);
    },
    0.8
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;

      const hasReachedBottom = offsetHeight - (innerHeight + scrolled) <= 60
      hasReachedBottom ? setHasReachedBottom(true) : setHasReachedBottom(false);
      scrolled > 0 ? setIsSticky(true) : setIsSticky(false);
    };


    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const getDynamicNavLinksStyles = () => {
    const dynamicNavLinksStyles = {};
  
    if (isSticky && isPhone) {
      dynamicNavLinksStyles.top = 0;
    }
  
    if (hasReachedBottom && isPhone) {
      dynamicNavLinksStyles.height = `calc(100vh - 350px)`;
    }
  
    return dynamicNavLinksStyles;
  };

  const location = useLocation();
  const isLinkActive = (to) => {
    return location.hash === to;
  };

  return (
    <nav id="#home" className={styles['nav']} ref={navbarRef}>
      <div className={styles['nav__container']}>
        <div className={styles['nav__logo']}>
          <Link
            to="#home"
            onClick={() => handleScrolling()}
          >
            <Logo width={'100%'} height={'100%'} />
          </Link>
        </div>
        <div className={cx('menu-icon', { 'sticky': isSticky && showNavbar})} onClick={handleShowNavbar}>
          <Hamburger color="white" />
        </div>
          <div
            className={cx('nav__links', { 'navbar-active': showNavbar })}
            style={getDynamicNavLinksStyles()}
          >
          <ul>
            <li className={styles['nav__links--about']}>
              <Link
                to="#about"
                className={cx('nav__links--grow-up', { 'active': isLinkActive('#about') })}
                onClick={() => handleScrolling()}
              >
                o nas
              </Link>
            </li>
            <li className={styles['nav__links--gallery']}>
              <Link
                to="#gallery"
                className={cx('nav__links--grow-up', { 'active': isLinkActive('#gallery') })}
                onClick={() => handleScrolling()}
              >
                galeria
              </Link>
            </li>
            <li className={styles['nav__links--videos']}>
              <Link
                to="#videos"
                className={cx('nav__links--grow-up', { 'active': isLinkActive('#videos') })}
                onClick={() => handleScrolling()}
              >
                wideo
              </Link>
            </li>
            <li className={styles['nav__links--contact']}>
              <Link
                to="#contact"
                className={cx('nav__links--grow-up', { 'active': isLinkActive('#contact') })}
                onClick={() => handleScrolling()}
              >
                kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar