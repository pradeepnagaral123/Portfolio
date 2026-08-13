import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Parallax from '../Parallax'
import {
  ReactIcon,
  NextIcon,
  TypeScriptIcon,
  TailwindIcon,
  HtmlIcon,
  CssIcon,
  ThreeIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  SqlIcon,
  GitIcon,
  GithubIcon,
  DockerIcon,
  JavaIcon,
  PythonIcon,
  JavaScriptIcon,
} from './TechIcons'

const categories = [
  {
    id: 'languages',
    label: 'Programming Languages',
    techs: [
      { name: 'Java', Icon: JavaIcon },
      { name: 'Python', Icon: PythonIcon },
      { name: 'JavaScript', Icon: JavaScriptIcon },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    techs: [
      { name: 'React', Icon: ReactIcon },
      { name: 'Next.js', Icon: NextIcon },
      { name: 'TypeScript', Icon: TypeScriptIcon },
      { name: 'HTML', Icon: HtmlIcon },
      { name: 'CSS', Icon: CssIcon },
      { name: 'Tailwind CSS', Icon: TailwindIcon },
      { name: 'Three.js', Icon: ThreeIcon },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    techs: [
      { name: 'Node.js', Icon: NodeIcon },
      { name: 'Express.js', Icon: ExpressIcon },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    techs: [{ name: 'MongoDB', Icon: MongoIcon }, { name: 'SQL', Icon: SqlIcon }],
  },
  {
    id: 'tools',
    label: 'Tools & Others',
    techs: [
      { name: 'Git', Icon: GitIcon },
      { name: 'GitHub', Icon: GithubIcon },
      { name: 'Docker', Icon: DockerIcon },
    ],
  },
]

export default function TechnologyGrid() {
  const [active, setActive] = useState('frontend')
  const current = categories.find((c) => c.id === active)

  return (
    <section>
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <Parallax from={40} to={-40}>
          <div className="border border-line">
          <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
            <nav className="flex flex-row flex-wrap lg:flex-col">
              {categories.map((cat) => {
                const isActive = cat.id === active
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`relative flex items-center gap-4 border-b border-r border-line px-5 py-4 text-left text-xs tracking-[0.3em] uppercase transition-colors duration-300 lg:border-r-0 lg:px-6 lg:py-5 ${
                      isActive ? 'text-paper' : 'text-dim hover:text-secondary'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tech-dot"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute left-0 h-5 w-1.5 bg-accent lg:left-0"
                      />
                    )}
                    {cat.label}
                  </button>
                )
              })}
            </nav>

            <div className="border-t border-line bg-ink-2/40 p-5 sm:p-6 lg:border-t-0 lg:border-l lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4"
                >
                  {current.techs.map((tech, i) => {
                    const Icon = tech.Icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                          delay: i * 0.06,
                        }}
                        className="group flex items-center gap-4 border border-line bg-ink px-4 py-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_0_24px_rgba(242,168,75,0.08)] sm:gap-5 sm:px-5"
                      >
                        <div className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9">
                          <Icon className="h-full w-full" />
                        </div>
                        <p className="text-sm tracking-wide text-secondary transition-colors duration-300 group-hover:text-paper">
                          {tech.name}
                        </p>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          </div>
        </Parallax>
      </div>
    </section>
  )
}
