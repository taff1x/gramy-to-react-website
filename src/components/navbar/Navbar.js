import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import styles from "./Navbar.module.css"

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
        <div className={ showNavbar ? `${styles["nav__links"]} ${styles["active"]}` : styles["nav__links"]}>
          <ul>
            <li className={styles["nav__links--about"]}>
              <NavLink to="/about" className={({isActive}) => (isActive ? `${styles["nav__links--grow-up"]} ${styles["active"]}` : styles["nav__links--grow-up"])}>o nas</NavLink>
            </li>
            <li className={styles["nav__links--gallery"]}>
              <NavLink to="/gallery" className={({isActive}) => (isActive ? `${styles["nav__links--grow-up"]} ${styles["active"]}` : styles["nav__links--grow-up"])}>galeria</NavLink>
            </li>
            <li className={styles["nav__links--videos"]}>
              <NavLink to="/videos" className={({isActive}) => (isActive ? `${styles["nav__links--grow-up"]} ${styles["active"]}` : styles["nav__links--grow-up"])}>wideo</NavLink>
            </li>
            <li className={styles["nav__links--contact"]}>
              <NavLink to="/contact" className={({isActive}) => (isActive ? `${styles["nav__links--grow-up"]} ${styles["active"]}` : styles["nav__links--grow-up"])}>kontakt</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar