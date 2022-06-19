import * as React from "react"
import * as styles from './index.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {
  return (
    <>
      <Header />
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>What the f*ck is Spiking!?</h1>
        <div className={styles.headerButtons}>
          <Link className={styles.headerLink} to='/prepare'><button className={styles.headerButton}>Prepare against spiking</button></Link>
          <Link className={styles.headerLink} to='/experience'><button className={styles.headerButton}>Visist VR experience</button></Link>
        </div>
        <StaticImage className={styles.headerPills1} src="../../static/images/pills-1.png" alt="pills" />
        <StaticImage className={styles.headerPills2} src="../../static/images/pills-2.png" alt="pills" />
      </section>
      <section className={styles.basics}>
        <h2 className={styles.basicsTitle}>First, the basics</h2>
        <div className={styles.basicsGrid}>
          <div className={styles.basicsVerb}>
            <h3 className={styles.gridTitle}>&#10148; Spiking <span>/spaikiŋ/ · verb · male</span> </h3>
            <p>'Spiking' is when someone puts alcohol or drugs into another person's drink or their body without their knowledge and/or consent.</p>
          </div>
          <div className={styles.basicsProblem}>
            <h3 className={styles.gridTitle}>&#10148; & what’s the problem?</h3>
            <p>The number of spiking victims has grown dramatically in the last year. Additionally, a new form of spiking is rapidly spreading across countries. </p>
          </div>
          <div className={styles.basicsArrow}></div>
          <div className={styles.basicsTypes}>
            <h3 className={styles.gridTitle}>&#10148; types of spiking</h3>
            <ul>
              <li className={styles.basicsLi}><p><span>Alcohol:</span> A spiked drink is one that contains extra alcohol or alcohol added to a non-alcoholic beverage when you are not watching.</p></li>
              <li className={styles.basicsLi}><p><span>GHB:</span> An odorless and colorless liquid with a slightly salty taste. At a low dose you get intoxicated, which is comparable to drunkenness.</p></li>
              <li className={styles.basicsLi}><p><span>Opiates:</span> A prescription drug that can be fatal if combined with alcohol as the two enhance each other.</p></li>
            </ul>
          </div>
          <div className={styles.basicsSquares}></div>
        </div>
      </section>
      <section className={styles.prepare}>
        <h2 className={styles.prepareTitle}>Prepare yourself and read our <span>tips</span></h2>
        <Link className={styles.prepareLink} to='/prepare'><button className={styles.prepareButton}>Read the tips</button></Link>
      </section>
      <section className={styles.quote}>
        <p className={styles.quoteText}>"I was very <span>confused</span> and felt like I could not breathe." - Jane</p>
        <StaticImage className={styles.quoteImage} src="../../static/images/unspiked.jpg" alt="#unspiked" />
      </section>
      <section className={styles.stories}>
        <div className={styles.storiesText}>
          <h2 className={styles.storiesTitle}>Stories</h2>
          <p>Click and read how these brave persons share their story about unwanted intoxication.</p>
        </div>
        <div className={styles.storiesGrid}>
          <Link to='/stories' className={styles.story}>
            <p>Rianne &#10142;</p>
            <StaticImage src="../../static/images/rianne-s.jpg" alt="Rianne" />
          </Link>
          <Link to='/stories' className={styles.story}>
            <p>Jane &#10142;</p>
            <StaticImage src="../../static/images/jane-s.jpg" alt="Jane" />
          </Link>
          <Link to='/stories' className={styles.story}>
            <p>Noa &#10142;</p>
            <StaticImage src="../../static/images/noa-s.jpg" alt="Noa" />
          </Link>
        </div>
      </section>
      <section className={styles.experience}>
        <h3 className={styles.experienceTitle}>The vr experience</h3>
        <div className={styles.experienceWrapper}>
          <div className={styles.experienceInfo}>
            <p>To experience what it's like to be spiked, we've made a VR experience. You will be immersed in a powerful story and feel the effects of getting spiked. Each week, we change our location in Rotterdam, so stop by and check it out!</p>
            <h3 className={styles.experienceLocation}>Current location: </h3>
            <p>Witte de Withstraat, Rotterdam</p>
          </div>
          <div className={styles.experienceSquares}></div>
          <div className={styles.experienceMap}>
            <StaticImage src="../../static/images/map.jpg" alt="map of Rotterdam" />
          </div>
        </div>
        <div className={styles.experienceLink}>
          <Link to='/experience'><button className={styles.experienceButton}>See upcoming locations</button></Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default IndexPage
