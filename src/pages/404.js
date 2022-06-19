import * as React from "react"
import * as styles from './404.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Wrong from '../../static/gifs/wrong.gif'

const NotFound = () => {
  return (
    <>
      <Header />
      <section className={styles.error}>
        <h2 className={styles.title}>Wrong Way! Wrong way!</h2>
        <img src={Wrong} alt="Person running the wrong way" />
      </section>
      <Footer />
    </>
  )
}

export default NotFound

