import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import '../styles/cursor.css'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const springX = useSpring(mx, { stiffness: 500, damping: 45, mass: 0.5 })
  const springY = useSpring(my, { stiffness: 500, damping: 45, mass: 0.5 })

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      const inFooter = e.target && e.target.closest && e.target.closest('.footer')
      setVisible(!!inFooter)
    }
    const leave = () => setVisible(false)
    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [mx, my])

  return (
    <motion.div
      className={`cursor${visible ? ' cursor--visible' : ''}`}
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    >
      <div className="cursor__ring">
        <div className="cursor__dot" />
      </div>
    </motion.div>
  )
}
