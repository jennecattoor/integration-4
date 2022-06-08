import * as React from "react"
import * as styles from './quiz.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

const QuizPage = () => {
  return (
    <>
      <Header />
      <p className={styles.title}>Quiz page</p>
      <Footer />
    </>
  )
}

export default QuizPage

