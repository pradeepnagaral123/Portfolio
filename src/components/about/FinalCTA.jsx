import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Parallax from '../Parallax'

export default function FinalCTA() {
  return (
    <section>
      <div className="mx-auto max-w-[88rem] px-6 pt-6 pb-16 lg:px-10 lg:pt-8 lg:pb-20">
        <Parallax from={50} to={-50}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden border border-line"
          >
          <svg
            className="pointer-events-none absolute left-0 top-0 h-full w-44 text-accent opacity-15 lg:w-56"
            viewBox="0 0 200 400"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-30 0C50 90 150 40 170 170S-10 280 40 400" stroke="currentColor" strokeWidth="1" />
            <path d="M-10 0C70 120 180 50 200 190S30 300 90 400" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <path d="M40 0C80 100 120 90 130 190S70 310 110 400" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </svg>

          <div className="relative grid items-center gap-8 p-8 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-12">
            <div>
              <p className="text-[0.7rem] tracking-[0.35em] text-dim uppercase">
                Have an idea?
              </p>
              <h2 className="mt-2.5 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[0.9] tracking-[0.03em] text-paper">
                LET&apos;S BUILD SOMETHING
                <br />
                <span className="text-accent">GREAT TOGETHER.</span>
              </h2>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 self-start border border-line-2 px-7 py-4 text-xs tracking-[0.3em] text-paper uppercase transition-all duration-300 hover:border-accent hover:text-accent lg:self-center"
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          </motion.div>
        </Parallax>
      </div>
    </section>
  )
}
