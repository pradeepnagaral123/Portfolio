import { motion } from 'framer-motion'
import { contactInfo } from './contactData'
import ContactCards from './ContactCards'

const EASE = [0.22, 1, 0.36, 1]

export default function ContactHero() {
  const { hero } = contactInfo

  return (
    <motion.div
      className="contact-hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
    >
      <div className="contact-hero__content">
        <p className="contact-hero__label">
          <span className="contact-hero__bullet" aria-hidden="true" />
          {hero.label}
        </p>

        <h1 className="contact-hero__title">
          <span className="contact-hero__title-line">{hero.title[0]}</span>
          <span className="contact-hero__title-line contact-hero__title-line--accent">
            {hero.title[1]}
          </span>
        </h1>

        <p className="contact-hero__tagline">{hero.tagline}</p>
        <p className="contact-hero__text">{hero.text}</p>
      </div>

      <ContactCards className="contact-hero__cards" />
    </motion.div>
  )
}
