import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Twirl as Hamburger } from 'hamburger-react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import styles from "./Navbar.module.css"
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const location = useLocation();
  const isLinkActive = (to) => {
    return location.hash === to;
  };

  return (
    <nav className={styles['nav']}>
      <div className={styles['nav__container']}>
        <div className={styles['nav__logo']}>
          <Link to="/">
            <Logo width={'100%'} height={'100%'} />
          </Link>
        </div>
        <div className={styles['menu-icon']} onClick={handleShowNavbar}>
          <Hamburger color="white" />
        </div>
        <div className={cx('nav__links', { 'navbar-active': showNavbar })}>
          <ul>
            <li className={styles['nav__links--about']}>
              <Link
                to="#about"
                className={cx('nav__links--grow-up', { 'active': isLinkActive('#about') })}
              >
                o nas
              </Link>
            </li>
            <li className={styles['nav__links--gallery']}>
              <Link
                to="#gallery"
                className={cx('nav__links--grow-up', { 'active': isLinkActive('#gallery') })}
              >
                galeria
              </Link>
            </li>
            <li className={styles['nav__links--videos']}>
              <Link
                to="#videos"
                className={cx('nav__links--grow-up', { 'active': isLinkActive('#videos') })}
              >
                wideo
              </Link>
            </li>
            <li className={styles['nav__links--contact']}>
              <Link
                to="#contact"
                className={cx('nav__links--grow-up', { 'active': isLinkActive('#contact') })}
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