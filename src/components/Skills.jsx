import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '◇',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'HTML / CSS / Sass', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 82 },
    ],
  },
  {
    title: 'Backend',
    icon: '⬡',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 78 },
      { name: 'REST & GraphQL APIs', level: 88 },
      { name: 'PostgreSQL / MongoDB', level: 85 },
      { name: 'Redis / Caching', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '△',
    skills: [
      { name: 'Git / GitHub', level: 93 },
      { name: 'Docker / K8s', level: 76 },
      { name: 'AWS / Vercel / Netlify', level: 82 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Figma / Design Tools', level: 78 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const barVariants = {
    hidden: { scaleX: 0 },
    visible: (level) => ({
      scaleX: level / 100,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    }),
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">My technical toolkit</h2>
          <p className="section-subtitle">
            Technologies I use to bring ideas to life — from frontend interfaces
            to backend systems and everything in between.
          </p>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skills__card"
              variants={cardVariants}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{category.icon}</span>
                <h3 className="skills__card-title">{category.title}</h3>
              </div>
              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skills__item">
                    <div className="skills__item-top">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <motion.div
                        className="skills__bar-fill"
                        variants={barVariants}
                        custom={skill.level}
                        style={{ originX: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
