import { Link, useParams } from 'react-router-dom'
import { Container } from '../../../components/Container/Container'
import { Section } from '../../../components/Section/Section'
import { Typography } from '../../../components/Typography/Typography'
import { useGetEventItem } from '../components/CalendarSection/hooks/useGetEventItem.hook'
import { Button } from '../../../components/Button/Button'
import { EmailSection } from '../components/EmailSection/EmailSection'
import { PromotionsSection } from '../components/PromotionsSection/PromotionsSection'

export const EventsItem = () => {
  const { eventId, eventDate } = useParams()
  const { eventItem, isError, isLoading } = useGetEventItem(
    eventId!,
    eventDate!
  )

  if (!eventItem || isError) {
    return <div>error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const isCTA = eventItem[0].ctaLink && eventItem[0].ctaText
  const currentEvent = eventItem[0]

  return (
    <>
      <Container>
        <Section
          borderRadiusVariant="corner"
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            border: 0,
            padding: 0,
            margin: '2rem 0',
            display: 'flex',
            justifyContent: 'flex-start',
            // ...(isMobile && { justifyContent: 'center' }),
          }}
        >
          <Link to="/events">
            <Typography
              fontVariant="extralarge"
              fontWeight="600"
              tailwindStyle="flex flex-col items-center justify-center gap-6 text-5xl font-semibold text-white md:gap-4 hover:text-orange "
            >
              &larr; Back to all events
            </Typography>
          </Link>
        </Section>
        <Section
          style={{
            backgroundColor: 'rgb(var(--color-purple))',
            padding: '24px 24px',
          }}
        >
          <div className="flex flex-wrap *:grow *:basis-64">
            {/* Image */}
            <div className="relative flex w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div
                className="h-full min-h-80 bg-slate-300 grayscale"
                style={{
                  backgroundImage: `url(${currentEvent.eventPoster.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
            </div>
            {/* Copy */}
            <div className="flex flex-col gap-3 pb-0 pt-8 text-left text-white md:p-20 md:px-6">
              <Typography fontVariant="base" fontWeight="600">
                {currentEvent.eventTitle}
              </Typography>
              <Typography fontVariant="base" fontWeight="300">
                {eventDate} - {currentEvent.eventDuration}
              </Typography>
              <Typography fontVariant="base" fontWeight="300">
                {currentEvent.eventDescription}
              </Typography>
              {isCTA && (
                <Button buttonVariant="primary">
                  <a href={currentEvent.ctaLink!} target="__blank">
                    <Typography fontVariant="base" fontWeight="300">
                      {currentEvent.ctaText} &rarr;
                    </Typography>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Section>
        <PromotionsSection />
        <EmailSection />
      </Container>
    </>
  )
}