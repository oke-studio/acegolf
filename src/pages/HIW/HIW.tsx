import { Container } from '../../components/Container/Container'
import { NintendoSwitch } from '../../components/NintendoSwitch/NintendoSwitch'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'
import { GolfGameSection } from './components/GolfGamesSection/GolfGameSection'
// import { FAQSection } from './components/FAQSection/FAQSection'
import { HIWSection } from './components/HIWSection/HIWSection'

import { SimRoomSection } from './components/SimRoomSection/SimRoomSection'

export const HIW = () => {
  return (
    <>
      <Container>
        <Section
          borderRadiusVariant="corner"
          style={{ color: 'white', backgroundColor: 'transparent', border: 0 }}
          tailWindStyle="text-center flex justify-center"
        >
          <Typography
            fontVariant="largeH1"
            fontWeight="900"
            fontStyle="italic"
            tailwindStyle="text-center w-max"
          >
            HOW DOES
            <br />
            IT WORK?
          </Typography>
        </Section>
      </Container>
      <HIWSection />
      <SimRoomSection />
      <GolfGameSection />
      <NintendoSwitch />
    </>
  )
}
