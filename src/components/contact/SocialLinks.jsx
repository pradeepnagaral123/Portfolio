import { motion } from 'framer-motion'
import { contactInfo } from './contactData'

const EASE = [0.22, 1, 0.36, 1]

export default function SocialLinks() {
  const { socials } = contactInfo

  return (
    <motion.div
      className="contact-social"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <h2 className="contact-social__title">{socials.title}</h2>

      <div className="contact-social__buttons">
        {socials.items.map((s, i) => (
          <motion.a
            key={s.id}
            className="contact-social__btn"
            href={s.url}
            aria-label={s.label}
            target={s.url.startsWith('http') ? '_blank' : undefined}
            rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
          >
            <s.icon size={22} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
