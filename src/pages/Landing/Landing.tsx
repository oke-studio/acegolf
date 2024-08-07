import React from 'react'
import { Container } from '../../components/Container/Container'
import { LandingHero } from './components/Hero/LandingHero'
import { EmailSection } from './components/EmailSection/EmailSection'
import { CardSection } from './components/CardSection/CardSection'
import Lenis from '@studio-freight/lenis/types'
// import { WTVSection } from './components/WTVSection/WTVSection'
import { Card } from '../../components/Card/Card'
import { Typography } from '../../components/Typography/Typography'
import { Link } from 'react-router-dom'
import { Section } from '../../components/Section/Section'
import { MenuCard as MC } from '../../components/Common/MenuCard/MenuCard'
import { PricesCard as PC } from '../../components/Common/PricesCard/PricesCard'
import { WTS } from '../../components/Common/WTS/WTS'
import { NintendoSwitch } from '../../components/NintendoSwitch/NintendoSwitch'
import { LandingHIWSection } from './components/HIWSection/HIWSection'
import { LandingVideo } from './components/Video/LandingVideo'

const handleBookLink = () => {
  return 'https://yourgolfbooking.com/venues/ace-golf-bar-and-lounge/booking/bays'
}

export const Landing = () => {
  React.useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  // const ref = useRef<HTMLDivElement>(null)

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['0.5 1', '0 0'],
  // })

  return (
    <>
      <Container>
        {/* <div className="sticky top-28"> */}
        <LandingHero />
        <LandingHIWSection />

        {/* </div> */}

        <Section
          style={{ backgroundColor: 'transparent', border: 0, padding: 0 }}
          //id={'prices-hours'}
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
                  <a href={handleBookLink()} target="__blank">
                    <Typography fontVariant="large" fontWeight="400">
                      Find a Bay &rarr;
                    </Typography>
                  </a>
                ),
              }}
            >
              <div id={'#prices-hours'}>
                <PC />
              </div>
            </Card>
          </div>
        </Section>
        <LandingVideo />
        {/* <WTVSection /> */}
        <CardSection />
        <WTS />
        <EmailSection />
        <NintendoSwitch />
      </Container>
    </>
  )
}
