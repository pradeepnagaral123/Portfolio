import { motion } from 'framer-motion'
import { contactInfo } from './contactData'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import ConnectInfo from './ConnectInfo'
import SocialLinks from './SocialLinks'
import '../../styles/contact.css'

const EASE = [0.22, 1, 0.36, 1]

const scrollTo = (id) => {
  if (id === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function ContactPage() {
  const { nav, brand } = contactInfo

  return (
    <section id="contact" className="contact-page" aria-label="Contact">
      <motion.header
        className="contact-nav"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <button
          className="contact-nav__brand"
          onClick={() => scrollTo('hero')}
          aria-label="Back to top"
        >
          {brand}
          <span className="contact-nav__brand-dot">.</span>
        </button>

        <nav className="contact-nav__links" aria-label="Primary">
          {nav.map((link) => {
            const active = link.active
            return (
              <button
                key={link.id}
                className={`contact-nav__link${active ? ' contact-nav__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
                {active && <span className="contact-nav__dot" aria-hidden="true" />}
              </button>
            )
          })}
        </nav>
      </motion.header>

      <div className="contact-page__inner">
        <ContactHero />

        <div className="contact-panel">
          <ContactForm />
          <ConnectInfo />
        </div>

        <SocialLinks />
      </div>
    </section>
  )
}
