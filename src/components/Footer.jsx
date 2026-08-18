import { useRef } from 'react'
import Parallax from './Parallax'
import '../styles/footer.css'

export default function Footer() {
  const firstRef = useRef(null)
  const lastRef = useRef(null)

  const setSpot = (node, e) => {
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    node.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  const resetSpot = (node) => {
    if (!node) return
    node.style.setProperty('--spot-x', '-200px')
    node.style.setProperty('--spot-y', '-200px')
  }

  const handleMove = (e) => {
    const el = e.target
    if (!el || !el.closest) return
    const line = el.closest('.footer__name-line')
    if (line === firstRef.current) {
      setSpot(firstRef.current, e)
      resetSpot(lastRef.current)
    } else if (line === lastRef.current) {
      setSpot(lastRef.current, e)
      resetSpot(firstRef.current)
    }
  }

  return (
    <footer className="footer" onMouseMove={handleMove}>
      <div className="section-container">
        <Parallax from={35} to={-35}>
          <div className="footer__name">
            <span ref={firstRef} className="footer__name-line">
              PRADEEP
            </span>
            <span ref={lastRef} className="footer__name-line">
              NAGARAL
            </span>
          </div>
        </Parallax>
      </div>
    </footer>
  )
}
