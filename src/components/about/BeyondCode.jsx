import { motion } from 'framer-motion'
import { Code2, Box, BookOpen, Heart } from 'lucide-react'

const rows = [
  {
    icon: Code2,
    text: 'I love solving complex problems and turning ideas into reality.',
  },
  {
    icon: Box,
    text: 'I care about clean design, great UX and details.',
  },
  {
    icon: BookOpen,
    text: 'I enjoy learning, reading and exploring new technologies.',
  },
  {
    icon: Heart,
    text: 'I believe in creating digital products that make a difference.',
  },
]

export default function BeyondCode() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="flex h-full flex-col border border-line bg-ink p-6 lg:p-8"
    >
      <div className="mb-7">
        <span className="text-xs tracking-[0.35em] text-accent uppercase">
          What Drives Me
        </span>
        <h3 className="mt-2 font-display text-2xl tracking-[0.03em] text-paper lg:text-3xl">
          BEYOND CODE
        </h3>
      </div>

      <div className="divide-y divide-line">
        {rows.map((row) => {
          const Icon = row.icon
          return (
            <div key={row.text} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
              <span className="mt-0.5 text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <p className="text-sm leading-relaxed text-secondary">{row.text}</p>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
