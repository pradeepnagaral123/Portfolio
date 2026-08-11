import { lazy, Suspense, useEffect, useState } from 'react'
import HeroIntroOverlay from './hero/HeroIntroOverlay'
import HeroNav from './hero/HeroNav'
import HeroHeadline from './hero/HeroHeadline'
import HeroIntro from './hero/HeroIntro'
import HeroSocial from './hero/HeroSocial'
import HeroBottom from './hero/HeroBottom'
import '../styles/hero.css'

const Hero3D = lazy(() => import('./hero/Hero3D'))

export default function Hero() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 1150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="hero" aria-label="Intro">
      <HeroIntroOverlay />
      <Suspense fallback={null}>
        <Hero3D />
      </Suspense>
      <div className="hero__inner">
        <HeroNav />
        <div className="hero__content">
          <HeroHeadline revealed={revealed} />
          <HeroSocial />
          <HeroIntro />
        </div>
      </div>
      <HeroBottom />
    </section>
  )
}
