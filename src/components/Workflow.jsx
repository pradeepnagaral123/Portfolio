import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Parallax from './Parallax'
import '../styles/workflow.css'

const steps = [
  {
    id: 'idea',
    title: 'Idea',
    description:
      'We understand your vision, business goals, users, and project requirements before writing a single line of code.',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'We create intuitive user experiences, modern interfaces, wireframes, and beautiful visual systems.',
  },
  {
    id: 'build',
    title: 'Build',
    description:
      'We develop scalable, responsive, high-performance applications using modern technologies.',
  },
  {
    id: 'launch',
    title: 'Launch',
    description:
      'We test, optimize, deploy, monitor, and continuously improve every digital product.',
  },
]

export default function Workflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="workflow" className="workflow" ref={ref}>
      <div className="section-container">
        <Parallax from={50} to={-50}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Process</span>
            <h2 className="section-title">Our workflow</h2>
            <p className="section-subtitle">
              From an idea to a product people love.
            </p>
          </motion.div>
        </Parallax>

        <Parallax from={45} to={-45}>
          <motion.div
            className="workflow__grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
          {steps.map((step, i) => (
            <motion.article
              key={step.id}
              className="workflow__card"
              data-step={step.id}
              variants={cardVariants}
            >
              <div className="workflow__card-top">
                <span className="workflow__card-index">0{i + 1}</span>
                <span className="workflow__card-mark" aria-hidden="true" />
              </div>
              <h3 className="workflow__card-title">{step.title}</h3>
              <p className="workflow__card-desc">{step.description}</p>
            </motion.article>
          ))}
          </motion.div>
        </Parallax>
      </div>
    </section>
  )
}
