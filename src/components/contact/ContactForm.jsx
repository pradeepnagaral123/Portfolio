import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'
import { contactInfo } from './contactData'

const EASE = [0.22, 1, 0.36, 1]

export default function ContactForm() {
  const { form } = contactInfo
  const halfFields = form.fields.filter((f) => f.half)
  const fullFields = form.fields.filter((f) => !f.half)

  const [values, setValues] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setValues({})
    }, 3500)
  }

  const renderField = (field) =>
    field.type === 'textarea' ? (
      <textarea
        className="contact-form__input contact-form__textarea"
        id={field.id}
        name={field.id}
        placeholder={field.placeholder}
        value={values[field.id] || ''}
        onChange={handleChange}
        rows="6"
        required
      />
    ) : (
      <input
        className="contact-form__input"
        type={field.type}
        id={field.id}
        name={field.id}
        placeholder={field.placeholder}
        value={values[field.id] || ''}
        onChange={handleChange}
        autoComplete={field.autoComplete}
        required
      />
    )

  return (
    <motion.div
      className="contact-form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <header className="contact-form__header">
        <h2 className="contact-form__title">{form.title}</h2>
        <p className="contact-form__subtitle">{form.subtitle}</p>
      </header>

      <form className="contact-form__form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          {halfFields.map((field) => (
            <div className="contact-form__field" key={field.id}>
              <label className="contact-form__label" htmlFor={field.id}>
                {field.label}
              </label>
              {renderField(field)}
            </div>
          ))}
        </div>

        {fullFields.map((field) => (
          <div className="contact-form__field" key={field.id}>
            <label className="contact-form__label" htmlFor={field.id}>
              {field.label}
            </label>
            {renderField(field)}
          </div>
        ))}

        <button type="submit" className={`contact-form__submit${sent ? ' contact-form__submit--sent' : ''}`}>
          {sent ? (
            <>
              Message Sent
              <Send size={16} />
            </>
          ) : (
            <>
              Send Message
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
