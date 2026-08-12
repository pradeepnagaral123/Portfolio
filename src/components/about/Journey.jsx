import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2023',
    title: 'The Beginning',
    desc: 'Started my journey with curiosity towards coding and technology.',
  },
  {
    year: '2024',
    title: 'Exploration',
    desc: 'Explored web development and built my first projects.',
  },
  {
    year: '2025',
    title: 'Deep Dive',
    desc: 'Dived deeper into full-stack development and real-world applications.',
  },
  {
    year: '2026+',
    title: 'Building Impact',
    desc: 'Continuing to learn, create and build products that make a difference.',
  },
]

export default function Journey() {
  return (
    <div className="flex h-full flex-col border border-line bg-ink p-6 lg:p-8">
      <div className="mb-7">
        <span className="text-xs tracking-[0.35em] text-accent uppercase">
          My Journey
        </span>
        <h3 className="mt-2 font-display text-2xl tracking-[0.03em] text-paper lg:text-3xl">
          THE PATH SO FAR
        </h3>
      </div>

      <div className="relative pl-8">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line-2" />
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="relative pb-8 last:pb-0"
          >
            <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(242,168,75,0.12)]" />
            <p className="text-xs tracking-[0.3em] text-accent">{item.year}</p>
            <h4 className="mt-2 font-display text-lg tracking-[0.05em] text-paper">
              {item.title.toUpperCase()}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-dim">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
