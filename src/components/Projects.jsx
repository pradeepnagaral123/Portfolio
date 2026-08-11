import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import illustrations from './ProjectIllustrations'
import '../styles/projects.css'

const categories = ['All', 'Frontend', 'Backend', 'Full-Stack']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online marketplace with real-time inventory, payment processing, and an admin dashboard for managing products and orders.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    category: 'Full-Stack',
    color: '#f2a84b',
  },
  {
    id: 2,
    title: 'Collaborative Task Manager',
    description: 'Real-time project management tool with drag-and-drop boards, team collaboration features, and automated workflow triggers.',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    category: 'Full-Stack',
    color: '#e8a04a',
  },
  {
    id: 3,
    title: 'Weather Analytics Dashboard',
    description: 'Interactive weather visualization dashboard with 7-day forecasts, historical data charts, and location-based alerts.',
    tags: ['React', 'D3.js', 'OpenWeather API', 'Tailwind'],
    category: 'Frontend',
    color: '#f5c078',
  },
  {
    id: 4,
    title: 'RESTful API Gateway',
    description: 'Microservices API gateway with rate limiting, authentication, request logging, and auto-generated documentation.',
    tags: ['Node.js', 'Express', 'Docker', 'Redis'],
    category: 'Backend',
    color: '#d98a2b',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description: 'Comprehensive analytics platform that aggregates social media metrics, sentiment analysis, and generates automated reports.',
    tags: ['Python', 'Django', 'React', 'Chart.js'],
    category: 'Full-Stack',
    color: '#e8a04a',
  },
  {
    id: 6,
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool with template management, SEO optimization suggestions, and multi-format export capabilities.',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'Vercel'],
    category: 'Frontend',
    color: '#cf8b32',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            A curated selection of projects that showcase my skills in
            building end-to-end web solutions.
          </p>
        </motion.div>

        <motion.div
          className="projects__filters"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter ${activeFilter === cat ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className="projects__card"
                variants={cardVariants}
                layout
                exit="exit"
              >
                <div className="projects__card-top" style={{ '--card-accent': project.color }}>
                  <div className="projects__card-illustration">
                    {(() => {
                      const Illustration = illustrations[project.id]
                      return Illustration ? <Illustration /> : null
                    })()}
                  </div>
                  <span className="projects__card-category">{project.category}</span>
                </div>
                <div className="projects__card-body">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-desc">{project.description}</p>
                  <div className="projects__card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="projects__card-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="projects__card-actions">
                    <a href="#" className="projects__card-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Live Demo
                    </a>
                    <a href="#" className="projects__card-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1v6M8 7l3-3M8 7L5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
