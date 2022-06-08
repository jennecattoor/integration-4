import * as React from "react"
import * as styles from './stories.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

const StoriesPage = () => {
  return (
    <>
      <Header />
      <p className={styles.title}>Stories page</p>
      <Footer />
    </>
  )
}

export default StoriesPage
