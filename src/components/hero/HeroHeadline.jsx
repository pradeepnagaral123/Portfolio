import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const LINES = [
  { text: 'I BUILD' },
  { text: 'DIGITAL' },
  { text: 'EXPERIENCES.' },
]

export default function HeroHeadline({ revealed }) {
  const containerRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!revealed || reducedMotion) return
    const chars = containerRef.current?.querySelectorAll('.hero-headline__char')
    if (!chars || chars.length === 0) return

    const depths = Array.from(chars).map((_, i) => ({
      x: Math.sin(i * 0.55) * 8 + 4,
      y: Math.cos(i * 0.4) * 6 + 3,
      r: Math.sin(i * 0.7) * 0.6,
    }))

    let raf
    const mouse = { x: 0, y: 0 }
    const cur = { x: 0, y: 0 }

    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    const tick = () => {
      cur.x += (mouse.x - cur.x) * 0.07
      cur.y += (mouse.y - cur.y) * 0.07
      for (let i = 0; i < chars.length; i++) {
        const d = depths[i]
        chars[i].style.transform = `translate3d(${(cur.x * d.x).toFixed(2)}px, ${(cur.y * d.y).toFixed(2)}px, 0) rotate(${(cur.x * d.r).toFixed(2)}deg)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
      chars.forEach((el) => { el.style.transform = '' })
    }
  }, [revealed, reducedMotion])

  return (
    <div className="hero-headline-block">
      <motion.span
        className="hero-headline__intro-mask"
        initial={reducedMotion ? { opacity: 0 } : { y: '112%' }}
        animate={reducedMotion ? { opacity: 1 } : { y: '0%' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
      >
        <span className="hero-headline__intro">hi everyone, i am pradeep</span>
      </motion.span>

      <h1 className="hero-headline" ref={containerRef} aria-label="I build digital experiences.">
        {LINES.map((line, i) => (
          <motion.span
            key={line.text}
            className={`hero-headline__mask hero-headline__mask--${i}`}
            initial={reducedMotion ? { opacity: 0 } : { y: '112%' }}
            animate={reducedMotion ? { opacity: 1 } : { y: '0%' }}
            transition={{ duration: 1, ease: EASE, delay: 0.45 + i * 0.14 }}
          >
            <span className={`hero-headline__line hero-headline__line--${i}`}>
              {line.text.split('').map((char, j) => (
                <span
                  key={j}
                  className={`hero-headline__char${char === '.' ? ' hero-headline__char--accent' : ''}`}
                  aria-hidden="true"
                >
                  {char}
                </span>
              ))}
            </span>
          </motion.span>
        ))}
        <span className="sr-only">I build digital experiences.</span>
      </h1>
    </div>
  )
}
