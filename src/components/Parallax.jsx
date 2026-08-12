import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function Parallax({
  children,
  from = -50,
  to = 50,
  className = '',
  outerClassName = '',
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [from, to])

  return (
    <div ref={ref} className={outerClassName}>
      <motion.div style={reduced ? undefined : { y }} className={className}>
        {children}
      </motion.div>
    </div>
  )
}
