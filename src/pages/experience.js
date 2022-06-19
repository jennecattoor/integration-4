import * as React from "react"
import * as styles from './experience.module.scss'
import Header from '../components/header'
import Marquee from '../components/marquee'
import Footer from '../components/footer'
import { StaticImage } from "gatsby-plugin-image"

const ExperiencePage = () => {
  return (
    <>
      <Header />
      <section className={styles.about}>
        <div className={styles.aboutTextWrapper}>
          <hr />
          <h2 className={styles.aboutTitle}>About the experience</h2>
          <hr />
          <p className={styles.aboutText}>To raise awareness around spiking, we have made a <span>full body VR-installation</span> where you will experience the symptoms of GHB spiking, comparable to a drunk driving simulation. During this experience there’s a supervisor present and you can stop anytime you want.  Check below where we are right now and where we will be standing in the future.</p>
        </div>
        <div className={styles.aboutImageWrapper}>
          <StaticImage className={styles.aboutImage} src="../../static/images/container.jpg" alt="Our container" />
        </div>
      </section>
      <Marquee />
      <section className={styles.map}>
        <StaticImage className={styles.mapImage} src="../../static/images/map.jpg" alt="Map of Rotterdam" />
      </section>
      <section className={styles.locations}>
        <h3 className={styles.locationsTitle}>Upcoming locations</h3>
        <div>
          <div className={styles.location}>
            <p className={styles.date}>25 Jun - 26 Jun</p>
            <p className={styles.name}>Oh my! Music festival</p>
          </div>
          <div className={styles.location}>
            <p className={styles.date}>27 Jun - 1 Jul</p>
            <p className={styles.name}>Stadhuisplein</p>
          </div>
          <div className={styles.location}>
            <p className={styles.date}>2 Jul</p>
            <p className={styles.name}>Triangle festival</p>
          </div>
          <div className={styles.location}>
            <p className={styles.date}>3 Jul - 7 Jul</p>
            <p className={styles.name}>De meent</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ExperiencePage
