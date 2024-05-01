import { Section } from '../../components/Section/Section'
import { Container } from '../../components/Container/Container'
import { Typography } from '../../components/Typography/Typography'
import { CalendarSection } from './components/CalendarSection/CalendarSection'
import { useMediaQuery } from 'react-responsive'
import { WTS } from '../../components/Common/WTS/WTS'
import { Button } from '../../components/Button/Button'

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
        <Section
          borderRadiusVariant="pill"
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 0,
            // padding: 0,
          }}
        >
          <div className="mx-auto flex w-full flex-col items-center gap-6 text-left *:grow *:basis-64 sm:flex-row">
            <div className="flex flex-col gap-4">
              <Typography
                fontVariant="headingFour"
                fontWeight="900"
                fontStyle="italic"
              >
                {' '}
                Private Events
              </Typography>

              <Button>Book Your Event &rarr;</Button>
            </div>
            <div className="bg-grey h-full min-h-96 w-full rounded-xl"></div>
          </div>
        </Section>
        <WTS />
      </Container>
    </>
  )
}
