import React from "react"
import * as styles from './footer.module.scss'
import { Link } from 'gatsby'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.itemWrapper}>
          <h2 className={styles.title}>Unspiked</h2>
          <p className={styles.subtitle}>A project of the municipality of Rotterdam</p>
        </div>
        <div className={styles.itemWrapper}>
          <h3 className={styles.itemTitle}>Menu</h3>
          <ul>
            <li><Link to='/' className={styles.link}>Home</Link></li>
            <li><Link to='/tips' className={styles.link}>Tips</Link></li>
            <li><Link to='/stories' className={styles.link}>Stories</Link></li>
            <li><Link to='/experience' className={styles.link}>Experience</Link></li>
          </ul>
        </div>
        <div className={styles.itemWrapper}>
          <h3 className={styles.itemTitle}>Follow us</h3>
          <ul>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className={styles.itemWrapper}>
          <h3 className={styles.itemTitle}>Current location</h3>
          <p>Schiedamsedijk 49<br />Rotterdam, 2622 AX</p>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.copyright}>
        <p>Copyright 2022</p>
        <p>Made by Team Buur</p>
      </div>
    </footer>
  )
}

export default Footer