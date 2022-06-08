import React from "react"
import * as styles from './footer.module.scss'

export default function Header() {

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
            <li>Home</li>
            <li>Quiz</li>
            <li>Stories</li>
            <li>Experience</li>
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