import { motion } from 'framer-motion'
import { Code2, Lightbulb, Users, Rocket } from 'lucide-react'
import Parallax from '../Parallax'

const stats = [
  {
    icon: Code2,
    value: '15+',
    label: 'Projects',
    desc: 'Completed across web & mobile',
  },
  {
    icon: Lightbulb,
    value: '2+',
    label: 'Years',
    desc: 'Learning, building and improving',
  },
  {
    icon: Users,
    value: '5+',
    label: 'Technologies',
    desc: 'Worked with modern tools & frameworks',
  },
  {
    icon: Rocket,
    value: '100%',
    label: 'Passion',
    desc: 'For creating impact through code',
  },
]

export default function Stats() {
  return (
    <section>
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <Parallax from={45} to={-45}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  className="group bg-ink p-6 transition-colors duration-500 hover:bg-ink-2 lg:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-line-2 text-accent transition-colors duration-500 group-hover:border-accent/60">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-4xl tracking-wide text-paper lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.3em] text-secondary uppercase">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-dim">{stat.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </Parallax>
      </div>
    </section>
  )
}
