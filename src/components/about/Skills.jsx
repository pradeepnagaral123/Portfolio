import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Skills() {
  return (
    <section>
      <div className="mx-auto max-w-[88rem] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs tracking-[0.35em] text-accent uppercase">
              My Skills
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[0.9] tracking-[0.03em] text-paper">
              TECHNOLOGIES
              <br />
              I WORK WITH
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="flex flex-col items-start gap-6 lg:pb-3"
          >
            <p className="max-w-sm leading-relaxed text-secondary">
              I work with a modern stack of technologies to build scalable,
              performant and beautiful applications.
            </p>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.3em] text-paper uppercase transition-colors duration-300 hover:text-accent"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
