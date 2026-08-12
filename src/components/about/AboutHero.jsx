import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Parallax from '../Parallax'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
}

export default function AboutHero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[88rem] px-6 pt-16 pb-12 lg:px-10 lg:pt-24 lg:pb-16">
        <Parallax className="grid gap-10 lg:grid-cols-2 lg:gap-8" from={50} to={-50}>
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="mb-6 text-xs tracking-[0.45em] text-dim uppercase"
            >
              (02)
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="font-display text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.85] tracking-[0.04em]"
            >
              <span className="block text-paper">ABOUT</span>
              <span className="block text-accent">ME.</span>
            </motion.h1>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="mt-7"
            >
              <p className="text-xs tracking-[0.35em] text-secondary uppercase lg:text-sm">
                Developer. Problem Solver. Curious Mind.
              </p>
              <span className="mt-5 block h-px w-16 bg-accent" />
            </motion.div>
          </div>

          <div className="flex flex-col items-start justify-end gap-4 lg:pl-10 lg:pb-2">
            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="max-w-md text-base leading-relaxed text-secondary lg:text-lg"
            >
              I&apos;m a Computer Science student and full-stack developer who loves
              building digital products that are useful, accessible and thoughtfully
              designed.
            </motion.p>

            <motion.p
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="max-w-md text-base leading-relaxed text-secondary lg:text-lg"
            >
              I enjoy turning ideas into real-world solutions through clean code,
              creative design and continuous learning.
            </motion.p>

            <motion.a
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              href="#contact"
              className="group mt-2 inline-flex items-center gap-2 border-b border-accent pb-2 text-xs tracking-[0.3em] text-paper uppercase transition-colors duration-300 hover:text-accent"
            >
              Download Resume
              <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
        </Parallax>
      </div>
    </section>
  )
}
