import { motion } from 'framer-motion'
import { contactInfo } from './contactData'

const EASE = [0.22, 1, 0.36, 1]

export default function ConnectInfo() {
  const { connect } = contactInfo

  return (
    <motion.aside
      className="contact-connect"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
    >
      <h2 className="contact-connect__title">{connect.title}</h2>

      <div className="contact-connect__list">
        {connect.rows.map((row) => (
          <div className="contact-connect__row" key={row.id}>
            <div className="contact-connect__icon">
              <row.icon size={20} strokeWidth={1.5} />
            </div>
            <div className="contact-connect__body">
              <span className="contact-connect__row-title">{row.title}</span>
              <span className="contact-connect__row-desc">{row.description}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.aside>
  )
}
