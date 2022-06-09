import * as React from "react"
import * as styles from './quiz.module.scss'
import Header from '../components/header'

const QuizPage = () => {
  return (
    <>
      <Header />
      <p className={styles.title}>Quiz page</p>
    </>
  )
}

export default QuizPage

