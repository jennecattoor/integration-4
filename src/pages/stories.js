import * as React from "react"
import * as styles from './stories.module.scss'
import Header from '../components/header'

const StoriesPage = () => {
  return (
    <>
      <Header />
      <p className={styles.title}>Stories page</p>
    </>
  )
}

export default StoriesPage
