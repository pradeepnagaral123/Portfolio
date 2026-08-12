import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Parallax from './Parallax'
import '../styles/contact.css'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/pradeepnagaral123',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M13.232 10.232L20 4"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <Parallax className="contact__glow" from={140} to={-140} />
      <Parallax className="contact__glow contact__glow--right" from={-140} to={140} />
      <div className="section-container">
        <Parallax from={40} to={-40}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
          <motion.div variants={itemVariants}>
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's work together</h2>
            <p className="section-subtitle" style={{ marginBottom: 'var(--space-3xl)' }}>
              Have a project in mind or just want to chat? I'm always open to
              discussing new opportunities and ideas.
            </p>
          </motion.div>

          <div className="contact__grid">
            <motion.div className="contact__left" variants={itemVariants}>
              <div className="contact__cards">
                <a href="mailto:hello@pradeepnagaral.dev" className="contact__card">
                  <div className="contact__card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M22 7l-10 6L2 7"/>
                    </svg>
                  </div>
                  <div className="contact__card-content">
                    <span className="contact__card-label">Email</span>
                    <span className="contact__card-value">hello@pradeepnagaral.dev</span>
                  </div>
                  <svg className="contact__card-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12L12 4M12 4H6M12 4v6"/>
                  </svg>
                </a>

                <div className="contact__card">
                  <div className="contact__card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact__card-content">
                    <span className="contact__card-label">Location</span>
                    <span className="contact__card-value">India</span>
                  </div>
                </div>

                <div className="contact__card contact__card--availability">
                  <div className="contact__card-dot" />
                  <span className="contact__card-avail-text">Available for freelance work</span>
                </div>
              </div>

              <div className="contact__socials-section">
                <span className="contact__socials-label">Find me on</span>
                <div className="contact__socials">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social"
                      aria-label={link.name}
                    >
                      {link.icon}
                      <span className="contact__social-name">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              className="contact__form"
              variants={itemVariants}
              onSubmit={handleSubmit}
            >
              <div className="contact__form-header">
                <h3 className="contact__form-title">Send a message</h3>
                <p className="contact__form-subtitle">I'll get back to you as soon as possible</p>
              </div>

              <div className="contact__fields">
                <div className={`contact__field ${focused === 'name' || formData.name ? 'contact__field--focused' : ''}`}>
                  <label className="contact__field-label" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__field-input"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <div className={`contact__field ${focused === 'email' || formData.email ? 'contact__field--focused' : ''}`}>
                  <label className="contact__field-label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__field-input"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
              </div>

              <div className={`contact__field contact__field--textarea ${focused === 'message' || formData.message ? 'contact__field--focused' : ''}`}>
                <label className="contact__field-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__field-input contact__field-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className={`contact__submit ${submitted ? 'contact__submit--sent' : ''}`}
              >
                {submitted ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 2L7 9M14 2l-4 12-3-5-5-3 12-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </motion.form>
          </div>
          </motion.div>
        </Parallax>
      </div>
    </section>
  )
}
