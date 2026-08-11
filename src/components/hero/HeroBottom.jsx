import { motion, useReducedMotion } from 'framer-motion'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroBottom() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="hero-bottom"
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.35 }}
    >
      <span className="hero-bottom__status">
        <span className="hero-bottom__dot" aria-hidden="true" />
        Available for projects
      </span>
      <button className="hero-bottom__scroll" onClick={() => scrollTo('about')}>
        Scroll to explore
        <span className="hero-bottom__arrow" aria-hidden="true">↓</span>
      </button>
    </motion.div>
  )
}
