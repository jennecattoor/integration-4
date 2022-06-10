import React from "react"
import * as styles from './header.module.scss'
import { Link } from 'gatsby'

const Header = () => {

  return (
    <header className={styles.header}>
      <h1><Link className={styles.logo} to='/'>Unspiked</Link></h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to='/' className={styles.navLink} activeClassName={styles.navLinkActive}>Home</Link></li>
          <li className={styles.navItem}><Link to='/quiz' className={styles.navLink} activeClassName={styles.navLinkActive}>Quiz</Link></li>
          <li className={styles.navItem}><Link to='/stories' className={styles.navLink} activeClassName={styles.navLinkActive}>Stories</Link></li>
          <li className={styles.navItem}><Link to='/experience' className={styles.navLink} activeClassName={styles.navLinkActive}>Experience</Link></li>
        </ul>
      </nav>
    </header>)
}

export default Header