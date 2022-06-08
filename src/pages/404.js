import * as React from "react"
import * as styles from './404.module.scss'
import Footer from '../components/footer'
import Header from '../components/header'

const PageNotFound = () => {
  return (
    <>
      <Header />
      <p className={styles.title}>Page not found</p>
      <Footer />
    </>
  )
}

export default PageNotFound

