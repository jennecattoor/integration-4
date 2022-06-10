import * as React from "react"
import * as styles from './index.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <>
      <Header />
      <section className={styles.introWrapper}>
        <h1 className={styles.title}>What the f*ck is <br />Spiking!?</h1>
        <div>
          <button className={styles.button}>Do the quiz</button>
          <button className={styles.button}>Visit our experience</button>
        </div>
      </section>
      <section className={styles.basicsWrapper}>
        <div>
          <h2>Spiking</h2>
          <p>/spaɪkɪŋ/ · verb · male</p>
          <p>'Spiking' is when someone puts alcohol or drugs into another person's drink or their body without their knowledge and/or consent.</p>
        </div>
        <div>
          <h2>& what’s the problem?</h2>
          <p>The number of spiking victims has grown dramatically in the last year. Additionally, a new form of spiking is rapidly spreading across countries. Our goal is to inform you about the dangers of spiking and what to do if it overcomes you.</p>
        </div>
        <div>
          <h2>types of spiking</h2>
          <ol>
            <li><p>Alcohol: A spiked drink is one that contains extra alcohol or alcohol added to a non-alcoholic beverage when you are not watching.</p></li>
            <li><p>GHB: An odorless and colorless liquid with a slightly salty taste. At a low dose you get intoxicated, which is comparable to drunkenness.</p></li>
            <li><p>Opiates: A prescription drug that can be fatal if combined with alcohol as the two enhance each other.</p></li>
          </ol>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default IndexPage
