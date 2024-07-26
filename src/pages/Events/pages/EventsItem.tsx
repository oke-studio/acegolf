import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from '../../../components/Container/Container'
import { Section } from '../../../components/Section/Section'
import { Typography } from '../../../components/Typography/Typography'
import { Button } from '../../../components/Button/Button'
import { EmailSection } from '../components/EmailSection/EmailSection'
import { PromotionsSection } from '../components/PromotionsSection/PromotionsSection'
import { ImageURLFormatter } from '../../../utils/imageFormatter'
import { CalendaritemContainerStyles } from '../../../types/Pages/Events/events.types'
import { CalendarItemContainerStyleTypeMap } from '../../../types/Pages/Events/CalendarSection.types'
import { CalendarItemContainerStyleType } from '../../../types/Pages/Events/CalendarSection.types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { useGetEventsItem } from '../../../hooks/UseGetEvents/useGetEventsItem.hook'
import { getUIRenderer } from '../../../hooks/GetUIRenderer/getUIRenderer.hook'
import { LeaguesFAQ } from '../../Leagues/components/LeaguesFAQ/LeaguesFAQ.component'

import moment from 'moment'
import classNames from 'classnames'

const EventsItemPillStruct: {
  [k in CalendarItemContainerStyleType]?: {
    style: string
    tag: string
  }
} = {
  adjusted: {
    style: 'text-black bg-sharpTeal',
    tag: 'Expired Notice',
  },
  closed: {
    style: 'text-black bg-orange',
    tag: 'Expired Notice',
  },
  event: {
    style: 'bg-purple text-black',
    tag: 'Event Passed',
  },
  private_event: {
    style: 'bg-orange text-black',
    tag: 'Event Passed',
  },
  promotion: {
    style: 'text-black bg-orange',
    tag: 'Promotion Over',
  },
  league: {
    style: 'bg-orange text-black',
    tag: 'League Closed',
  },
}

export const EventsItem = () => {
  const { eventId } = useParams()
  const { eventItem, isError, isLoading, refetch } = useGetEventsItem(eventId!)

  useEffect(() => {
    refetch()
  }, [eventId, refetch])

  console.log(eventId)

  if (!eventItem || isError) {
    return <div>error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const isCTA = eventItem.ctaLink && eventItem.ctaText
  const currentEvent = eventItem

  const isActiveEvent =
    moment(currentEvent.endDateTime).diff(moment.now(), 'days') > 0

  const eventItemType =
    CalendarItemContainerStyleTypeMap[currentEvent.eventType] ?? 'event'

  const eventItemPill = EventsItemPillStruct[eventItemType]

  const defaultImgSrc = CalendaritemContainerStyles[eventItemType].defaultImgSrc

  const imgSrc = eventItem.eventPoster?.url ?? defaultImgSrc

  const startDate = moment(currentEvent.startDateTime)
  const endDate = moment(currentEvent.endDateTime)

  const isLeague = eventItemType === 'league'

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
          <Link to={isLeague ? '/leagues' : '/calendar'}>
            <Typography
              fontVariant="extralarge"
              fontWeight="600"
              tailwindStyle="flex flex-col items-center justify-center gap-6 text-5xl font-semibold text-white md:gap-4 hover:text-orange "
            >
              {isLeague ? (
                <>&larr; See All Leagues</>
              ) : (
                <>&larr; Back to Activities Calendar</>
              )}
            </Typography>
          </Link>
        </Section>
        <Section
          tailWindStyle={CalendaritemContainerStyles[eventItemType].style}
          style={{
            padding: '24px 24px',
            backgroundColor: isLeague ? 'transparent' : '',
          }}
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
            <div
              className={classNames(
                'flex flex-col gap-10 pb-0 pt-8 text-left md:p-20 md:px-6',
                isLeague ? 'text-white' : ''
              )}
            >
              <div className="flex flex-col gap-4">
                <Typography fontVariant="headingThree" fontWeight="600">
                  {currentEvent.eventTitle}
                </Typography>
                <div className="flex gap-4">
                  <Typography
                    fontVariant="extralarge"
                    fontWeight="300"
                    tailwindStyle="text-nowrap"
                  >
                    {startDate.format('MMMM Do YYYY')} -{' '}
                    {endDate.format('MMMM Do YYYY')}
                  </Typography>
                  {!isActiveEvent && (
                    <div
                      className={classNames(
                        'h-max rounded-3xl px-4 py-1 text-center',
                        eventItemPill?.style
                      )}
                    >
                      <Typography
                        fontVariant="base"
                        fontWeight="600"
                        fontStyle="italic"
                        tailwindStyle="text-nowrap "
                      >
                        {eventItemPill?.tag}
                      </Typography>
                    </div>
                  )}
                </div>
                {/* <Typography fontVariant="extralarge" fontWeight="300">
                  {startDate.format('hh:mm A')} - {endDate.format('hh:mm A')}
                </Typography> */}
              </div>

              {currentEvent.eventDesc && (
                <Typography fontVariant="large" fontWeight="300">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: documentToHtmlString(currentEvent.eventDesc.json),
                    }}
                  >
                    {}
                  </div>
                </Typography>
              )}
              {isCTA && (
                <Button buttonVariant="primary">
                  <a href={currentEvent.ctaLink!} target="__blank">
                    <Typography fontVariant="extralarge" fontWeight="400">
                      {currentEvent.ctaText} &rarr;
                    </Typography>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Section>

        {getUIRenderer(currentEvent?.eventPageContentStackCollection?.items)}

        {isLeague && <LeaguesFAQ />}
        {!isLeague && <PromotionsSection />}
        <EmailSection />
      </Container>
    </>
  )
}
