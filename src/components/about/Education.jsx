import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="flex h-full flex-col border border-line bg-ink p-6 lg:p-8"
    >
      <div className="mb-7">
        <span className="text-xs tracking-[0.35em] text-accent uppercase">
          Education
        </span>
        <h3 className="mt-2 font-display text-2xl tracking-[0.03em] text-paper lg:text-3xl">
          ACADEMIC BACKGROUND
        </h3>
      </div>

      <div className="flex items-start gap-4">
        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-2 text-accent">
          <GraduationCap className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <div>
          <h4 className="font-display text-xl tracking-[0.03em] text-paper lg:text-2xl">
            B.E. IN COMPUTER SCIENCE
          </h4>
          <p className="mt-1.5 text-sm text-secondary">
            Visvesvaraya Technological University
          </p>
          <p className="mt-1 text-xs tracking-[0.25em] text-accent">2022 – 2026</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {[
          'Strong foundation in DSA, OS, DBMS, Computer Networks and more.',
          'Passionate about problem solving and building efficient systems.',
        ].map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-dim">
            <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
