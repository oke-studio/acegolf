import React, { useRef } from 'react'
import { Container } from '../../components/Container/Container'
import { LandingHero } from './components/Hero/LandingHero'
import { useScroll } from 'framer-motion'
import { EmailSection } from './components/EmailSection/EmailSection'
import { CardSection } from './components/CardSection/CardSection'
import Lenis from '@studio-freight/lenis/types'
import { WTVSection } from './components/WTVSection/WTVSection'

export const Landing = () => {
  React.useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.5 1', '0 0'],
  })

  return (
    <>
      <Container>
        <div className="sticky top-28">
          <LandingHero scrollYProgress={scrollYProgress} />
        </div>
        <div ref={ref} className="sticky top-0">
          <div className="h-96"></div>
        </div>
        <CardSection />
        <WTVSection />
        <EmailSection />
      </Container>
    </>
  )
}
