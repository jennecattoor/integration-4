import React from "react"
import { Link } from 'gatsby'
import * as styles from './header.module.scss'

export default function Header() {

  return (
    <header className={styles.header}>
      <h1><Link className={styles.logo} to='/'>Watch out</Link></h1>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to='/' className={styles.navLink}>Home</Link></li>
          <li className={styles.navItem}><Link to='/whatTo' className={styles.navLink}>What To</Link></li>
          <li className={styles.navItem}><Link to='/stories' className={styles.navLink}>Stories</Link></li>
          <li className={styles.navItem}><Link to='/experience' className={styles.navLink}>Experience</Link></li>
        </ul>
      </nav>
      <button className={styles.hamburger}>
        <span className={styles.hidden}>Toggle Menu</span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>)
}