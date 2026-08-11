import { motion, useReducedMotion } from 'framer-motion'
import Magnetic from './Magnetic'

const EASE = [0.22, 1, 0.36, 1]

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroIntro() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="hero-intro"
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
    >
      <p className="hero-intro__role">
        Full-Stack Developer · Creative Developer · CSE Student
      </p>
      <p className="hero-intro__text">
        I design and build digital products that combine thoughtful engineering
        with memorable visual experiences.
      </p>

      <div className="hero-cta">
        <Magnetic className="hero-cta__magnet">
          <button
            className="hero-cta__btn"
            onClick={() => scrollTo('projects')}
            aria-label="View my work"
          >
            View my work <span className="hero-cta__arrow" aria-hidden="true">→</span>
          </button>
        </Magnetic>

        <Magnetic className="hero-cta__magnet" strength={0.45}>
          <button
            className="hero-cta__btn hero-cta__btn--accent"
            onClick={() => scrollTo('contact')}
            aria-label="Let's talk"
          >
            Let's talk <span className="hero-cta__arrow" aria-hidden="true">↗</span>
          </button>
        </Magnetic>
      </div>
    </motion.div>
  )
}
