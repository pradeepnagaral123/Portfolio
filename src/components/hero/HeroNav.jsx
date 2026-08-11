import { motion, useReducedMotion } from 'framer-motion'

const links = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const scrollTo = (id) => {
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
        {links.map((link) => (
          <button
            key={link.id}
            className="hero-nav__link"
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </motion.header>
  )
}
