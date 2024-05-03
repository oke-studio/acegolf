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
            marginTop: '4rem',
          }}
        >
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 text-left *:grow *:basis-64 sm:flex-row">
            <div className="flex max-w-[400px] flex-col gap-4">
              <Typography
                fontVariant="headingFour"
                fontWeight="900"
                fontStyle="italic"
              >
                {' '}
                Private Events
              </Typography>
              <Typography
                fontVariant="base"
                fontWeight="300"
                fontStyle="normal"
              >
                This section of text will outline how ace books allow syou to
                book corporate events and large events.
                <br />
                <br />
                <ul>
                  <li> - Corporate Events |Team Building </li>
                  <li> - Conferences | Meetings </li>
                  <li> - Adult/Kid Birthday Parties Bar/Bat</li>
                  <li> - Mitzvahs </li>
                  <li> - Holiday Parties </li>
                  <li> - Social Parties </li>
                  <li> - Engagement Parties | Weddings</li>
                </ul>
                <br />
                We will write the size of events for this first category.
              </Typography>

              <Button buttonVariant="primary">
                <a href="mailto:events@acegolfbar.ca">
                  <Typography fontVariant="base" fontWeight="500" T="h3">
                    Book Your Event{' '}
                  </Typography>
                </a>
              </Button>
            </div>
            <div className="h-full min-h-96  w-full max-w-[500px] rounded-xl bg-grey"></div>
          </div>
        </Section>
        <WTS />
      </Container>
    </>
  )
}
