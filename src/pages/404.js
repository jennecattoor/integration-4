import * as React from "react"
import * as styles from './404.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

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

