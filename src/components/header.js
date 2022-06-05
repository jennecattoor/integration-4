import React from "react"
import { Link } from 'gatsby'
import * as styles from './header.module.scss'

export default function Header() {

  return (
    <header className={styles.header}>
      <h1><Link className={styles.name} to='/'>Watch out</Link></h1>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to='/' className={styles.navLink}>Portfolio</Link></li>
          <li className={styles.navItem}><Link to='/about' className={styles.navLink}>About</Link></li>
          <li className={styles.navItem}><Link to='/contact' className={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
      <button className={styles.hamburger}>
        <span className={styles.hidden}>Toggle Menu</span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>)
}