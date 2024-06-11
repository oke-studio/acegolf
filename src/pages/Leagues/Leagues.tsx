import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'
import { CalendarSection } from '../Events/components/CalendarSection/CalendarSection'
import { EmailSection } from '../Events/components/EmailSection/EmailSection'

export const Leagues = () => {
  return (
    <Container>
      <Section
        borderRadiusVariant="corner"
        style={{
          color: 'white',
          backgroundColor: 'transparent',
          border: 0,
          padding: 0,
        }}
      >
        <div className="flex flex-col items-center text-center *:grow *:basis-10 md:flex-row">
          <Typography
            fontVariant="largeH1"
            fontWeight="900"
            fontStyle="italic"
            tailwindStyle="uppercase mb-3 text-center"
          >
            LEAGUES
          </Typography>
          <Typography fontVariant="base" fontWeight="500">
            What Active Leagues Are Running
          </Typography>
        </div>
      </Section>
      <Section style={{ backgroundColor: 'transparent', border: 0 }}>
        <div className="grid grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2">
          {[1, 2, 3, 4].map(() => (
            <div className="relative min-h-96 w-full rounded-2xl bg-grey">
              <div className="absolute inset-0 flex w-full flex-col items-start justify-end gap-3 bg-transparent p-8 md:max-w-56">
                <Typography fontVariant="base" fontWeight="400">
                  Details about the Leagues timing and details that will need to
                  know before sign up
                </Typography>
                <Button
                  buttonVariant="secondary"
                  buttonStyle={{
                    padding: '0.25rem 2rem',
                    color: 'white',
                    backgroundColor: 'black',
                  }}
                >
                  <Typography fontVariant="base" fontWeight="500">
                    Sign up &rarr;
                  </Typography>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <EmailSection />
      <Container
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <div className="flex flex-col items-center gap-4 text-center text-white">
          <Typography fontVariant="headingOne" fontWeight="900">
            EVENTS CALENDAR
          </Typography>
          <Typography fontVariant="headingFour" fontWeight="500">
            Be the first to know about the latest ACE Golf promos and events
          </Typography>
        </div>

        <CalendarSection />
      </Container>
    </Container>
  )
}
