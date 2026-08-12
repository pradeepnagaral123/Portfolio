import AboutHero from './about/AboutHero'
import Stats from './about/Stats'
import Skills from './about/Skills'
import TechnologyGrid from './about/TechnologyGrid'
import Journey from './about/Journey'
import Education from './about/Education'
import BeyondCode from './about/BeyondCode'
import FinalCTA from './about/FinalCTA'
import Parallax from './Parallax'
import '../styles/about.css'

export default function About() {
  return (
    <div id="about" className="about-page">
      <AboutHero />
      <Stats />
      <Skills />
      <TechnologyGrid />

      <section>
        <div className="mx-auto max-w-[88rem] px-6 pt-16 pb-10 lg:px-10 lg:pt-20 lg:pb-12">
          <Parallax className="grid gap-5 lg:grid-cols-3" from={40} to={-40}>
            <Journey />
            <Education />
            <BeyondCode />
          </Parallax>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
