import * as React from "react"
import * as styles from './tips.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

const TipsPage = () => {
  return (
    <>
      <Header />
      <main className={styles.tipsWrapper}>
        <section className={styles.tipsHeader}>
          <div className={styles.headerIntro}>
            <h3>Prepare yourself against spiking!</h3>
            <p>Do you know how to react or what to do when you encounter a spiking situation? Find out below what you can do.</p>
          </div>
          <div className={styles.headerAvoid}>
            <h3>How to avoid drink spiking?</h3>
            <ul className={styles.headerList}>
              <li>· Don't accept drinks from strangers</li>
              <li>· Never leave your drink unattended</li>
              <li>· Don't drink or taste anyone else's drink</li>
              <li>· Throw your drink away if it tastes odd</li>
              <li>· Place an anti-spiking lid on your drink</li>
            </ul>
          </div>
        </section>
        <section className={styles.tipsSteps}>
          <h2 className={styles.stepsTitle}>What to do when someone spikes <span>you?</span></h2>
          <div className={styles.stepWrapper}>
            <h3 className={styles.stepTitle}>1. Go to a safe place, have a trusted person with you</h3>
            <p>A trusted person can <span>monitor the effects</span> of the poison, provide protection and report the incident to those responsible for security at the venue.</p>
          </div>
          <div className={styles.stepWrapper}>
            <h3 className={styles.stepTitle}>2. Quickly Drink Plenty of Water</h3>
            <p>This is vitally important regardless of how the poisonous drug was administered. Dehydration takes place as the human body absorbs the drug and drinking <span>water helps flush drugs out of the system.</span></p>
          </div>
          <div className={styles.stepWrapper}>
            <h3 className={styles.stepTitle}>3. Get medical attention immediately</h3>
            <p>Don’t be tempted to simply go home and sleep it off. You don’t know for certain <span>what the drug</span> was, <span>how much</span> it was & what <span>the effects</span> might be. Go to the hospital where tests can be carried out and your condition will be closely monitored.</p>
          </div>
          <div className={styles.stepWrapper}>
            <h3 className={styles.stepTitle}>4. Tell the police</h3>
            <p>All incidents should be reported to the police as this enables them to conduct an <span>immediate investigation.</span></p>
          </div>
          <div className={styles.stepWrapper}>
            <h3 className={styles.stepTitle}>5. Alert Management and Safety</h3>
            <p>Alerting management and security is crucial as this vital information may help <span>prevent others</span> from suffering an attack.</p>
          </div>
          <div className={styles.stepWrapper}>
            <h3 className={styles.stepTitle}>6. Try to get a urine and blood tests within 72 hours</h3>
            <p>Like Cardi B once said: 'No face no case'. Without hard proof of a <span>positive drug test.</span> It's really hard to make a hard case against the attacker</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TipsPage

