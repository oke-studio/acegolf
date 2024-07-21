import { useState } from 'react'
import { Section } from '../../../../components/Section/Section'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

// import { TransformEventsCalendarMockV2 } from '../../mocks/EventsCalendar.mock'
import { Typography } from '../../../../components/Typography/Typography'
import { CalendarItemContainerStyleType } from '../../../../types/Pages/Events/CalendarSection.types'
import { useGetEventsParsed } from './hooks/useGetEventsParsed.hook'
import { useMediaQuery } from 'react-responsive'
import { CalendaritemContainerStyles } from '../../../../types/Pages/Events/events.types'

const CalendarItemContainer = ({
  style,
  description,
  title,
  imgSrc,
  to,
  isMobile,
}: {
  style: CalendarItemContainerStyleType
  description: string | React.ReactNode
  title: string
  imgSrc?: string
  to?: string
  isMobile?: boolean
}) => {
  const conditionalImgSrc = imgSrc
    ? imgSrc
    : CalendaritemContainerStyles[style].defaultImgSrc

  if (style === 'hidden') {
    return <div />
  }

  if (style === 'date') {
    return (
      <div
        className={classNames(
          'flex flex-col gap-2 rounded-xl p-3 text-center',
          CalendaritemContainerStyles['date'].style
        )}
      >
        <Typography fontVariant="base" fontWeight="500">
          {title}
        </Typography>
        <Typography fontVariant="headingThree" fontWeight="800">
          {description}
        </Typography>
      </div>
    )
  }

  return (
    <Link
      className={classNames(
        'flex h-max flex-row items-center justify-between gap-3 rounded-xl border-2 border-solid border-transparent p-2 hover:cursor-pointer hover:border-coolBlue md:flex-col md:items-start md:justify-normal md:gap-2',
        CalendaritemContainerStyles[style].style
      )}
      //   onClick={() => router}
      to={`/events/${to}`}
    >
      <div>
        <Typography fontVariant="base" fontWeight="500">
          {title}
        </Typography>
        <Typography fontVariant="base" fontWeight="300">
          {description}
        </Typography>
      </div>
      {!isMobile && (
        <div className="relative flex h-36 w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
          <div
            className="h-full bg-slate-300"
            style={{
              backgroundImage: `url(${conditionalImgSrc})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>
      )}
      {isMobile && (
        <div className="relative flex h-[4rem] w-[4rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
          <div
            className="h-full bg-slate-300"
            style={{
              backgroundImage: `url(${conditionalImgSrc})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>
      )}
    </Link>
  )
}

export const CalendarSection = () => {
  const { events: eventsData, isError, isLoading } = useGetEventsParsed()

  const isMobile = useMediaQuery({ maxWidth: '640px' })

  if (!eventsData || isError) {
    return <div />
  }

  if (isLoading) {
    return <div>Loading....</div>
  }

  const startDate = new Date()
  const endDate = new Date(startDate)
  endDate.setDate(endDate.getDate() + 7 * 2)

  const twoWeekSpan: Array<string> = []
  for (const d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    twoWeekSpan.push(new Date(d).toISOString())
  }

  const Calendar = () => (
    <>
      {twoWeekSpan.map((event, index) => {
        const events = eventsData[event.split('T')[0]]
        // console.log(events)
        const eventDate = new Date(event).toDateString().split(' ').slice(0, 3)
        return (
          <div
            className="flex h-full min-w-36 max-w-36 flex-col gap-3"
            key={`calendar_item_${index}`}
          >
            <CalendarItemContainer
              style="date"
              description={eventDate[2]}
              title={[eventDate[0], eventDate[1]].join(', ')}
            />
            {events &&
              events.map((e, index) => (
                <CalendarItemContainer
                  description={e.description}
                  style={e.type}
                  title={e.title}
                  imgSrc={e.imgSrc}
                  to={e.id + '/' + event.split('T')[0]}
                  key={`calendar_item_container_${index}`}
                />
              ))}
          </div>
        )
      })}
    </>
  )

  const MobileCalendar = () => {
    const [currEvent, setCurrEvent] = useState(twoWeekSpan[0])
    const events = eventsData[currEvent.split('T')[0]]

    return (
      <div className="flex h-full w-full flex-col gap-5 p-2">
        <div className="flex flex-nowrap gap-5 overflow-auto *:grow *:basis-64">
          {twoWeekSpan.map((event, index) => {
            const eventDate = new Date(event)
              .toDateString()
              .split(' ')
              .slice(0, 3)

            return (
              <div key={`ace_calendar_day_${index}`}>
                <button
                  className={classNames(
                    'flex min-w-20 flex-col items-center gap-2 rounded-xl border-4 bg-grey p-3 text-center hover:border-orange',
                    event === currEvent ? 'border-orange' : 'border-transparent'
                  )}
                  onClick={() => setCurrEvent(event)}
                >
                  <Typography fontVariant="base" fontWeight="500">
                    {eventDate[0]}
                  </Typography>
                  <Typography fontVariant="large" fontWeight="800">
                    {eventDate[2]}
                  </Typography>
                </button>
              </div>
            )
          })}
        </div>
        <div className="flex w-full flex-col gap-3">
          <Typography fontVariant="headingFour" fontWeight="400">
            {new Date(currEvent).toDateString()}
          </Typography>
          {events ? (
            events.map((e) => (
              <CalendarItemContainer
                description={e.description}
                style={e.type}
                title={e.title}
                imgSrc={e.imgSrc}
                to={e.id + '/' + currEvent.split('T')[0]}
                isMobile={true}
              />
            ))
          ) : (
            <div className="flex flex-col gap-2 rounded-xl bg-grey bg-opacity-50 p-3 text-center">
              <Typography fontVariant="base" fontWeight="500">
                No Events
              </Typography>
              <Typography
                fontVariant="large"
                fontWeight="800"
                tailwindStyle="text-orange underline"
              >
                Reserve a Bay &rarr;
              </Typography>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <Section
      borderRadiusVariant="pill"
      style={{
        backgroundColor: 'white',
        padding: '8px',
      }}
    >
      <div
        style={
          {
            //   display: 'grid',
            //   gridTemplateColumns: 'repeat(7, minmax(150px, 1fr))',
          }
        }
        // className="min-h-80 auto-cols-min gap-3 overflow-x-auto"
        className="relative flex h-full min-h-96 gap-3 overflow-auto rounded-[2rem]"
      >
        {/* GRID LAYOUT ENABLED*/}
        {/* {EventsCalendarMockReduced().map((e) => (
          <CalendarItemContainer
            description={e.description}
            style={e.type}
            title={e.title}
            imgSrc={e.imgSrc}
          />
        ))} */}

        {isMobile ? <MobileCalendar /> : <Calendar />}
      </div>
    </Section>
  )
}
