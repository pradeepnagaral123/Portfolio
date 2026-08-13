import { motion } from 'framer-motion'
import { contactInfo } from './contactData'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function ContactCards({ className = '' }) {
  const { cards } = contactInfo

  const content = (card) => (
    <>
      <div className="contact-card__icon">
        <card.icon size={20} strokeWidth={1.5} />
      </div>
      <span className="contact-card__label">{card.label}</span>
    </>
  )

  return (
    <motion.div
      className={`contact-cards ${className}`.trim()}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {cards.map((card) =>
        card.href ? (
          <motion.a
            key={card.id}
            className="contact-card contact-card--link"
            href={card.href}
            target={card.href.startsWith('http') ? '_blank' : undefined}
            rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={card.label}
            variants={cardVariants}
          >
            {content(card)}
          </motion.a>
        ) : (
          <motion.div key={card.id} className="contact-card" variants={cardVariants}>
            {content(card)}
          </motion.div>
        ),
      )}
    </motion.div>
  )
}
