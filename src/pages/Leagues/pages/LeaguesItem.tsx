import { Link, useParams } from 'react-router-dom'
import { Container } from '../../../components/Container/Container'
import { Section } from '../../../components/Section/Section'
import { Typography } from '../../../components/Typography/Typography'
import { Button } from '../../../components/Button/Button'
import { useGetAceLeaguesEventItem } from '../hooks/useGetAceLeaguesEventItem.hook'
import { getUIRenderer } from '../../../hooks/GetUIRenderer/getUIRenderer.hook'
import { CalendaritemContainerStyles } from '../../../types/Pages/Events/events.types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { ImageURLFormatter } from '../../../utils/imageFormatter'
import { LeaguesFAQ } from '../components/LeaguesFAQ/LeaguesFAQ.component'
import { EmailSection } from '../../Events/components/EmailSection/EmailSection'

export const LeaguesItem = () => {
  const { eventId } = useParams()
  const { leagueItem, isError, isLoading } = useGetAceLeaguesEventItem(eventId!)

  if (!leagueItem || isError) {
    return <div></div>
  }

  if (isLoading) {
    return <div></div>
  }

  const isCTA = leagueItem.ctaLink && leagueItem.ctaText
  const currentEvent = leagueItem

  const eventItemType = 'league'

  const defaultImgSrc = CalendaritemContainerStyles[eventItemType].defaultImgSrc

  const imgSrc = leagueItem.eventPoster?.url ?? defaultImgSrc

  const startDate = new Date(currentEvent.endDateTime).toDateString()
  const endDate = new Date(currentEvent.startDateTime).toDateString()

  return (
    <>
      <Container>
        <Section
          borderRadiusVariant="corner"
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            // border: 0,
            // padding: 0,
            // margin: '2rem 0',
            display: 'flex',
            justifyContent: 'flex-start',
            // ...(isMobile && { justifyContent: 'center' }),
          }}
        >
          <Link to="/leagues">
            <Typography
              fontVariant="extralarge"
              fontWeight="600"
              tailwindStyle="flex flex-col items-center justify-center gap-6 text-5xl font-semibold text-white md:gap-4 hover:text-orange "
            >
              &larr; Back to all leagues
            </Typography>
          </Link>
        </Section>

        <Section
          style={{
            padding: '24px 24px',
          }}
          tailWindStyle={`${CalendaritemContainerStyles[eventItemType].style} bg-transparent`}
        >
          <div className="flex flex-wrap *:grow *:basis-64">
            {/* Image */}
            <div className="relative flex w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div
                className="aspect-square h-full min-h-96 bg-slate-300"
                style={{
                  backgroundImage: `url(${ImageURLFormatter(
                    imgSrc,
                    currentEvent.eventPoster?.contentType
                  )})`,
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
                {startDate} - {endDate}
              </Typography>

              {currentEvent.eventDesc && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(currentEvent.eventDesc.json),
                  }}
                >
                  {}
                </div>
              )}
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

        {getUIRenderer(leagueItem?.eventPageContentStackCollection?.items)}

        <LeaguesFAQ />
        <EmailSection />
      </Container>
    </>
  )
}
