import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from './projectsData'
import ProjectCard from './ProjectCard'

export default function ProjectCarousel() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [distance, setDistance] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setDistance(
          Math.max(0, trackRef.current.scrollWidth - window.innerWidth)
        )
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section
      id="projects"
      className="projects-scroll"
      ref={sectionRef}
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="projects-sticky">
        <motion.div className="projects-track" ref={trackRef} style={{ x }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
            />
          ))}
        </motion.div>

        <div className="projects-progress" aria-hidden="true">
          <span className="projects-progress__label">Scroll</span>
          <div className="projects-progress__bar">
            <motion.div
              className="projects-progress__fill"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          <span className="projects-progress__count">
            01 — 04
          </span>
        </div>
      </div>
    </section>
  )
}
