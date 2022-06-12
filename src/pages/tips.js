import * as React from "react"
import * as styles from './tips.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

const TipsPage = () => {
  return (
    <>
      <Header />
      <p className={styles.title}>Tips page</p>
      <Footer />
    </>
  )
}

export default TipsPage

