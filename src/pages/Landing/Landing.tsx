import React, { useRef } from 'react'
import { Container } from '../../components/Container/Container'
import { LandingHero } from './components/Hero/LandingHero'
import { useScroll } from 'framer-motion'
import { EmailSection } from './components/EmailSection/EmailSection'
import { CardSection } from './components/CardSection/CardSection'
import Lenis from '@studio-freight/lenis/types'
import { WTVSection } from './components/WTVSection/WTVSection'
import { Card } from '../../components/Card/Card'
import { Typography } from '../../components/Typography/Typography'
import { Link } from 'react-router-dom'
import { Section } from '../../components/Section/Section'
import { MenuCard as MC } from '../../components/Common/MenuCard/MenuCard'
import { PricesCard as PC } from '../../components/Common/PricesCard/PricesCard'
import { Button } from '../../components/Button/Button'
import { WTS } from '../../components/Common/WTS/WTS'

export const Landing = () => {
  React.useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
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
        {/* <div className="sticky top-28"> */}
        <LandingHero scrollYProgress={scrollYProgress} />
        {/* </div> */}
        <Section style={{ backgroundColor: 'transparent', border: 0 }}>
          <div className="flex w-full flex-col justify-center gap-5 text-center text-white">
            <Typography
              fontVariant="headingOne"
              fontWeight="900"
              fontStyle="italic"
            >
              HOW IT WORKS
            </Typography>
            <div className="flex flex-col justify-center gap-3 md:flex-row">
              {[1, 2, 3].map((p) => (
                <div className="first flex flex-col items-center gap-4">
                  <Typography
                    fontVariant="headingFour"
                    fontWeight="700"
                    tailwindStyle="w-max bg-orange rounded-lg"
                  >
                    #{p}
                  </Typography>
                  <Typography fontVariant="headingFour" fontWeight="700">
                    Reserve A Bay
                  </Typography>
                  <Typography fontVariant="base" fontWeight="500">
                    When you arrive, our host will offer free golf rentals, help
                    you set up your game and profiles for your group. The fun
                    part is deciding which games to play first.
                  </Typography>
                  <Button buttonVariant="simple">
                    <Link to="/menu">
                      <Typography
                        fontVariant="base"
                        fontWeight="500"
                        tailwindStyle="underline"
                      >
                        Contact &rarr;
                      </Typography>
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section
          style={{ backgroundColor: 'transparent', border: 0, padding: 0 }}
        >
          <div className="mt-9 flex flex-wrap gap-6 *:grow *:basis-64">
            <MC />
            <Card
              buttonOne={{
                children: (
                  <Link to="/how-it-works">
                    <Typography fontVariant="large" fontWeight="400">
                      How It Works &rarr;
                    </Typography>
                  </Link>
                ),
              }}
              buttonTwo={{
                children: (
                  <Link to="/book-now">
                    <Typography fontVariant="large" fontWeight="400">
                      Find a Bay &rarr;
                    </Typography>
                  </Link>
                ),
              }}
            >
              <PC />
            </Card>
          </div>
        </Section>
        <WTVSection />
        <CardSection />
        <WTS />
        <EmailSection />
      </Container>
    </>
  )
}
