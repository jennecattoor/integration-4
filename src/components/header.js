import React from "react"
import { Link } from 'gatsby'
import * as styles from './header.module.scss'

export default function Header() {

  return (
    <header className={styles.header}>
      <h1><Link className={styles.logo} to='/'>UnSpiked</Link></h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to='/' className={styles.navLink} activeClassName={styles.navLinkActive}>Home</Link></li>
          <li className={styles.navItem}><Link to='/howTo' className={styles.navLink} activeClassName={styles.navLinkActive}>How To</Link></li>
          <li className={styles.navItem}><Link to='/stories' className={styles.navLink} activeClassName={styles.navLinkActive}>Stories</Link></li>
          <li className={styles.navItem}><Link to='/experience' className={styles.navLink} activeClassName={styles.navLinkActive}>Experience</Link></li>
        </ul>
      </nav>
    </header>)
}