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
      <Footer />
    </>
  )
}

export default IndexPage
