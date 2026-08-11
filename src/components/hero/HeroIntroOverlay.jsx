import { motion, useReducedMotion } from 'framer-motion'

export default function HeroIntroOverlay() {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) return null

  return (
    <motion.div
      className="hero-intro-overlay"
      aria-hidden="true"
      initial={{ y: '0%' }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
    >
      <motion.span
        className="hero-intro-overlay__label"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', times: [0, 0.2, 0.7, 1] }}
      >
        Portfolio — 2026
      </motion.span>
    </motion.div>
  )
}
