import * as React from "react"
import * as styles from './experience.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

const ExperiencePage = () => {
  return (
    <>
      <Header />
      <p className={styles.title}>Experience page</p>
      <Footer />
    </>
  )
}

export default ExperiencePage
