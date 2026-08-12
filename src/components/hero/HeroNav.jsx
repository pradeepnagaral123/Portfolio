import { motion, useReducedMotion } from 'framer-motion'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const scrollTo = (id) => {
  if (id === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroNav() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.header
      className="hero-nav"
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
    >
      <button
        className="hero-nav__brand"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        PRADEEP
      </button>

      <nav className="hero-nav__links" aria-label="Primary">
        {links.map((link) => {
          const isActive = link.id === 'hero'
          return (
            <button
              key={link.id}
              className={`hero-nav__link${isActive ? ' hero-nav__link--active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {isActive && <span className="hero-nav__dot" aria-hidden="true" />}
              {link.label}
            </button>
          )
        })}
      </nav>
    </motion.header>
  )
}
