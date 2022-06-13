import * as React from "react"
import * as styles from './index.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <>
      <Header />
      <section className={styles.introWrapper}>
        <h1 className={styles.title}>What the f*ck is <br />Spiking!?</h1>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>See all tips</button>
          <button className={styles.button}>Visit our experience</button>
        </div>
        <StaticImage className={styles.pillsHeaderRight} src="../../static/images/pills-right.svg" alt="yellow pills" />
        <StaticImage className={styles.pillsHeaderLeft} src="../../static/images/pills-left.svg" alt="yellow pills" />
      </section>
      <section className={styles.basicsWrapper}>
        <h2 className={styles.basicsIntro}>First, the basics</h2>
        <div className={styles.basics}>
          <div className={styles.verb}>
            <h2 className={styles.basicsTitle}>&#x27AB; Spiking <span>/spaikiŋ/ · verb · male</span> </h2>
            <p>'Spiking' is when someone puts alcohol or drugs into another person's drink or their body without their knowledge and/or consent.</p>
          </div>
          <div className={styles.problem}>
            <h2 className={styles.basicsTitle}>&#x27A9; & what’s the problem?</h2>
            <p>The number of spiking victims has grown dramatically in the last year. Additionally, a new form of spiking is rapidly spreading across countries. </p>
          </div>
          <div className={styles.arrow}></div>
          <div className={styles.types}>
            <h2 className={styles.basicsTitle}>&#x27AC; types of spiking</h2>
            <ul className={styles.basicsList}>
              <li className={styles.basicsListItem}><p><span>Alcohol:</span> A spiked drink is one that contains extra alcohol or alcohol added to a non-alcoholic beverage when you are not watching.</p></li>
              <li className={styles.basicsListItem}><p><span>GHB:</span> An odorless and colorless liquid with a slightly salty taste. At a low dose you get intoxicated, which is comparable to drunkenness.</p></li>
              <li className={styles.basicsListItem}><p><span>Opiates:</span> A prescription drug that can be fatal if combined with alcohol as the two enhance each other.</p></li>
            </ul>
          </div>
          <div className={styles.squares}></div>
        </div>
        <StaticImage className={styles.pillsBasicsRight} src="../../static/images/pills-basic-right.svg" alt="pills & capsules" />
        <StaticImage className={styles.pillBasicsLeft} src="../../static/images/pill-basic-left.svg" alt="pill" />
      </section>
      <section className={styles.quote}>
        <p className={styles.quoteText}>"I was very <span>confused</span> and felt like I could not breathe" - Jane</p>
      </section>
      <Footer />
    </>
  )
}

export default IndexPage
