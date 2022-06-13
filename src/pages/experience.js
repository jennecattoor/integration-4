import * as React from "react"
import * as styles from './experience.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from "gatsby-plugin-image"

const ExperiencePage = () => {
  return (
    <>
      <Header />
      <section>
        <div className={styles.header}>
          <div className={styles.headerBox1}>
            <h2 className={styles.headerBox1Title}>The experience</h2>
            <StaticImage className={styles.headerBox1Image} src="../../static/images/container.jpg" alt="Container" />
          </div>
          <div className={styles.headerBox2}>
            <h3>About the experience</h3>
            <hr />
            <p>To raise awareness around spiking, we have made a full body VR-installation where you will experience the symptoms of GHB spiking, comparable to a drunk driving simulation. During this experience there’s a supervisor present and you can stop anytime you want.  Check below where we are right now and where we will be standing in the future.</p>
            <hr />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ExperiencePage
