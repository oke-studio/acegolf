import { Section } from '../../../../components/Section/Section'
import { Container } from '../../../../components/Container/Container'

import { Typography } from '../../../../components/Typography/Typography'
import { MusicPlayer } from './components/MusicPlayer'
import { UGC } from './components/UGC/UGC'

// const imgs = [URL1, URL2, URL3, URL4, URL5, URL6, URL7, URL8, URL9]

export const WTVSection = () => {
  return (
    <Section
      borderRadiusVariant="corner"
      sectionWidth="fullViewport"
      style={{
        backgroundColor: 'transparent',
        border: 0,
        // padding: '3rem',
      }}
    >
      <Container>
        <div className="mt-10 flex flex-col items-center justify-center">
          <Typography
            fontVariant="largeH1"
            fontWeight="900"
            tailwindStyle="text-white text-center uppercase mb-3 whitespace-normal"
          >
            What&apos;s the Vibe?
          </Typography>
          {/* <MusicPlayer /> */}
          <UGC />
        </div>
      </Container>
    </Section>
  )
}
