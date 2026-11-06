import { useRef } from 'react'
import { Mail } from 'lucide-react'
import Parallax from './Parallax'
import { GithubIcon, LinkedinIcon } from './contact/BrandIcons'
import '../styles/footer.css'

const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pradeep-nagaral-1a92a1311',
    Icon: LinkedinIcon,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/pradeepnagaral123',
    Icon: GithubIcon,
  },
  {
    id: 'gmail',
    label: 'Gmail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=pradeepnagaral4@email.com',
    Icon: Mail,
  },
]

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

        <div className="footer__social">
          {socials.map(({ id, label, href, Icon }) => (
            <a
              key={id}
              href={href}
              className="footer__social-btn"
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <Icon size={18} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
