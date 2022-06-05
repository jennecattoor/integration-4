import * as React from "react"
import * as styles from './index.module.scss'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <>
      <Header />
      <p className={styles.title}>Home page</p>
    </>
  )
}

export default IndexPage
