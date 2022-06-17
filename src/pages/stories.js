import * as React from "react"
import * as styles from './stories.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from "gatsby-plugin-image"

const StoriesPage = () => {
  return (
    <>
      <Header />
      <section className={styles.rianne}>
        <div className={styles.text}>
          <p className={styles.textNormal}>Hi, my name is Rianne. I study psychology, and three years ago I got spiked on what should have been a fun night out. At the time I was out on a date and afterwards we headed to a concert. At a certain moment I started feeling <span>dizzy and drunk</span> which was odd because it was only my <span>second beer</span> and I ate well before the gig. I immediately ran to the bathroom for some fresh air but I kept getting worse and worse. My body felt heavier and heavier while I was trying to make my way over, I even fell down on the ground. Once I reached the toilet, I <span>started throwing up</span> uncontrollably.</p>
          <p className={styles.textBig}>‘My body felt heavier and heavier while I was going to the bathroom, I even fell down’</p>
          <p className={styles.textSplit}>The whole experience <span>lasted about 40 minutes</span> from the moment I started feeling dizzy until I stopped throwing up. That evening I didn’t tell anybody what happened although I actually should hhave. This is because maybe someone else got spiked as well at the concert and might have ended up worse than me. I feel like there is not enough information regarding spiking known to the public. If I had known more about it, I would have reacted differently, and made sure that this wouldn’t happen to others.</p>
        </div>
        <div className={styles.image}>
          <StaticImage src="../../static/images/rianne.jpg" alt="Rianne" />
        </div>
      </section>
      <section className={styles.jane}>
        <div className={styles.text}>
          <p className={styles.textSplit}>Hi, I'm Jane. I'm a CMD student, and I got spiked in my small hometown. A place where I never thought I would be spiked, since everyone knows everyone there. I should really thank my friend as he noticed that something was wrong with me. I was acting <span>really affectionate</span> towards him and that’s not how I am. At the time, I just thought that I was <span>drunk</span> and I felt really <span>dizzy</span>. The spiking wasn’t even meant for me, as <span>I switched drinks</span> with a friend because they gave her the wrong drink. Later that night, she got approached by two guys who tried some moves on her. This experience made me realize that you can get spiked everywhere, even in places you know and feel safe. Ever since that day, I don’t accept any drinks from anyone, unless i know exactly where it came from.</p>
          <p className={styles.textBig}>‘The spiking wasn’t even ment for me as I switched drinks with a friend.’</p>
        </div>
        <div className={styles.image}>
          <StaticImage src="../../static/images/jane.jpg" alt="Jane" />
        </div>
      </section>
      <section className={styles.noa}>
        <div className={styles.text}>
          <p className={styles.textNormal}>Hi I’m Noa and I got spiked while I was out clubbing with some friends. Out of the blue I was extremely drunk, which came out of nowhere because I hadn’t drank that much. I felt really hot, got a <span>nosebleed, couldn’t walk properly</span> and when I got home I <span>threw up</span> for the first time in twelve years. </p>
          <p className={styles.textBig}>‘When my friend went to the bathroom I got free shots from the bartender.’</p>
          <p className={styles.textNormal}>I don’t know what they put in the drink but when my friend headed to the bathroom I got some <span>free shots from the bartender.</span> After taking those shots I started feeling like hell. Luckily my friend was there for me to take care of me. But this just shows that you can’t trust anyone. To be honest, after this incident I felt really dumb as I’m always the one telling others <span>not to accept drinks from strangers</span>, and here I am ignoring my own advice...</p>
        </div>
        <div className={styles.image}>
          <StaticImage src="../../static/images/noa.jpg" alt="Noa" />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default StoriesPage
