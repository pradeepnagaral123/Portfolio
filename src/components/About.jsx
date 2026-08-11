import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/about.css'

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Delivered' },
  { number: '10+', label: 'Technologies' },
  { number: '1000+', label: 'Cups of Coffee' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-container">
        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="about__text">
            <motion.div variants={itemVariants}>
              <span className="section-label">About Me</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="section-title">
              Crafting digital experiences{' '}
              <span className="about__highlight">that matter</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="about__bio">
              <p>
                <span className="about__drop-cap">I</span> am a full-stack developer with a deep passion
                for building elegant, high-performance web applications. My journey in software development
                started with a curiosity for how things work on the web, and it has evolved into a career
                dedicated to creating impactful digital solutions.
              </p>
              <p>
                I specialize in modern JavaScript ecosystems — React, Node.js, and cloud-native architectures.
                I believe in writing clean, maintainable code that scales. Every project I take on is an
                opportunity to push boundaries and deliver something exceptional.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or diving deep into system design patterns. I'm always looking for the next
                challenge that will push me to grow as a developer.
              </p>
            </motion.div>
          </div>

          <div className="about__visual">
            <motion.div variants={itemVariants} className="about__card">
              <div className="about__card-header">
                <div className="about__card-dots">
                  <span /><span /><span />
                </div>
                <span className="about__card-title">pradeep.config.js</span>
              </div>
              <pre className="about__card-code">
{`module.exports = {
  name: "Pradeep Nagaral",
  role: "Full-Stack Developer",
  location: "India",
  education: "Computer Science",
  languages: [
    "JavaScript", "TypeScript",
    "Python", "SQL"
  ],
  traits: [
    "detail-oriented",
    "problem-solver",
    "team-player"
  ],
  currentFocus: "Building
    scalable web apps",
  openToWork: true
}`}
              </pre>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="about__stats"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} className="about__stat" variants={itemVariants}>
              <span className="about__stat-number">{stat.number}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
