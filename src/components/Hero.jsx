import { lazy, Suspense, useEffect, useState } from 'react'
import HeroIntroOverlay from './hero/HeroIntroOverlay'
import HeroNav from './hero/HeroNav'
import HeroHeadline from './hero/HeroHeadline'
import HeroIntro from './hero/HeroIntro'
import HeroSocial from './hero/HeroSocial'
import HeroBottom from './hero/HeroBottom'
import Parallax from './Parallax'
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
        <Parallax
          className="hero__content"
          outerClassName="hero__content-wrap"
          from={70}
          to={-70}
        >
          <HeroHeadline revealed={revealed} />
          <HeroSocial />
          <HeroIntro />
        </Parallax>
      </div>
      <Parallax className="hero-bottom" from={30} to={-30}>
        <HeroBottom />
      </Parallax>
    </section>
  )
}
