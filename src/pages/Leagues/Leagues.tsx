import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'
import { useGetEvents } from '../../hooks/UseGetEvents/useGetEvents.hook'
import { ImageURLFormatter } from '../../utils/imageFormatter'
import { CalendarSection } from '../Events/components/CalendarSection/CalendarSection'
import { EmailSection } from '../Events/components/EmailSection/EmailSection'

import { CalendaritemContainerStyles } from '../../types/Pages/Events/events.types'

export const Leagues = () => {
  const { eventsData, isError, isLoading } = useGetEvents()

  if (isError || !eventsData) {
    return <></>
  }

  if (isLoading) {
    return <></>
  }

  const eventsDataParsedToLeaguesData = eventsData.filter(
    (e) => e.eventType === 'League'
  )
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
        </div>
      </Section>
      <Section
        style={{
          backgroundColor: 'transparent',
          border: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div className="grid grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2 ">
          {eventsDataParsedToLeaguesData.map((e) => {
            const defaultImgSrc =
              CalendaritemContainerStyles['league'].defaultImgSrc

            const imgSrc = e.eventPoster?.url ?? defaultImgSrc

            return (
              <div
                className="relative min-h-[30rem] w-full rounded-2xl"
                style={{
                  backgroundImage: `url(${ImageURLFormatter(
                    imgSrc,
                    e.eventPoster?.contentType
                  )})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 flex w-full flex-col items-start justify-end gap-3 bg-transparent p-8 md:max-w-full">
                  {/* <Typography fontVariant="base" fontWeight="400">
                    {e.eventDescription}
                  </Typography> */}
                  <Button
                    buttonVariant="secondary"
                    buttonStyle={{
                      padding: '0.25rem 2rem',
                      color: 'white',
                      backgroundColor: 'black',
                    }}
                  >
                    <a href={e.ctaLink}>
                      <Typography fontVariant="headingFour" fontWeight="500">
                        {e.ctaText} &rarr;
                      </Typography>
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
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
