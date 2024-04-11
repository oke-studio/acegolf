import { Section } from '../../components/Section/Section'
import { Container } from '../../components/Container/Container'
import { Typography } from '../../components/Typography/Typography'
import { CalendarSection } from './components/CalendarSection/CalendarSection'
import { useMediaQuery } from 'react-responsive'

export const Events = () => {
  const isMobile = useMediaQuery({ maxWidth: '640px' })

  return (
    <>
      <Container>
        <Section
          borderRadiusVariant="corner"
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            border: 0,
            // padding: 0,
            // margin: '2rem 0',
            display: 'flex',
            justifyContent: 'flex-start',
            ...(isMobile && { justifyContent: 'center' }),
          }}
        >
          <Typography
            fontVariant="largeH1"
            fontStyle="italic"
            fontWeight="900"
            tailwindStyle="flex flex-col items-center justify-center gap-6 text-5xl text-white md:gap-4"
          >
            EVENTS
          </Typography>
        </Section>
        <CalendarSection />
      </Container>
    </>
  )
}
