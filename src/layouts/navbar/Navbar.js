import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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

  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav__container"]}>
        <div className={styles["nav__logo"]}>
          <NavLink to="/">
            <Logo width={"100%"} height={"100%"} />
          </NavLink>
        </div>
        <div className={styles["menu-icon"]} onClick={handleShowNavbar}>
          <Hamburger color="white" />
        </div>
        <div className={ cx("nav__links" , { "active" : showNavbar }) }>
          <ul>
            <li className={styles["nav__links--about"]}>
              <NavLink to="/about" className={({isActive}) => cx("nav__links--grow-up" ,  {"active" : isActive}) }>o nas</NavLink>
            </li>
            <li className={styles["nav__links--gallery"]}>
              <NavLink to="/gallery" className={({isActive}) => cx("nav__links--grow-up" , {"active" : isActive}) }>galeria</NavLink>
            </li>
            <li className={styles["nav__links--videos"]}>
              <NavLink to="/videos" className={({isActive}) => cx("nav__links--grow-up" , {"active" : isActive}) }>wideo</NavLink>
            </li>
            <li className={styles["nav__links--contact"]}>
              <NavLink to="/contact" className={({isActive}) => cx("nav__links--grow-up" , {"active" : isActive}) }>kontakt</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar