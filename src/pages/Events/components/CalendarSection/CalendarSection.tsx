import { useState } from 'react'
import { Section } from '../../../../components/Section/Section'
// import classNames from 'classnames'
// import { Link } from 'react-router-dom'
// import classNames from 'classnames'
// import { Link } from 'react-router-dom'

// import { TransformEventsCalendarMockV2 } from '../../mocks/EventsCalendar.mock'
import { Typography } from '../../../../components/Typography/Typography'
import { CalendarItemContainerStyleType } from './types/CalendarSection.types'
import { useGetEventsParsed } from './hooks/useGetEventsParsed.hook'
import { useMediaQuery } from 'react-responsive'

const CalendarItemContainer = ({
  style,
  description,
  title,
  imgSrc,
  to,
  isMobile,
}: {
  style: CalendarItemContainerStyleType
  description: string
  title: string
  imgSrc?: string
  to?: string
  isMobile?: boolean
}) => {
  const CalendaritemContainerStyles: {
    [k in CalendarItemContainerStyleType]: string
  } = {
    closed: 'bg-black text-orange',
    adjusted: 'bg-orange text-black',
    promotion: 'bg-green text-white',
    event: 'bg-lightOrange text-black',
    private_event: 'bg-sharpTeal text-black',
    league: 'bg-lime-400 text-black',
    hidden: 'hidden',
    date: 'bg-grey',
  }

  //   if (style === 'hidden') {
  //     return <div />
  //   }

  //   if (style === 'date') {
  //     return (
  //       <div
  //         className={classNames(
  //           'flex flex-col gap-2 rounded-xl p-3 text-center',
  //           CalendaritemContainerStyles['date']
  //         )}
  //       >
  //         <Typography fontVariant="base" fontWeight="500">
  //           {title}
  //         </Typography>
  //         <Typography fontVariant="large" fontWeight="800">
  //           {description}
  //         </Typography>
  //       </div>
  //     )
  //   }

  return (
    <Link
      className={classNames(
        'flex h-max flex-col gap-5 rounded-xl border-2 border-solid border-transparent p-4 hover:cursor-pointer hover:border-coolBlue',
        CalendaritemContainerStyles[style]
      )}
      //   onClick={() => router}
      to={`/events/${to}`}
    >
      <Typography fontVariant="base" fontWeight="500">
        {title}
      </Typography>
      <Typography fontVariant="base" fontWeight="300">
        {description}
      </Typography>
      {!isMobile && imgSrc && (
        <div className="relative flex h-36 w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
          <div
            className="h-full bg-slate-300"
            style={{
              backgroundImage: `url(${imgSrc})`,
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

  // console.log(eventsData)

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

  // const MockedEvents = TransformEventsCalendarMockV2()

  // console.log(MockedEvents)

  const Calendar = () => (
    <>
      {twoWeekSpan.map((event) => {
        const events = eventsData[event.split('T')[0]]

        const eventDate = new Date(event).toDateString().split(' ').slice(0, 3)
        return (
          <div className="flex h-full min-w-32 max-w-28 flex-col gap-3">
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
                    'flex flex-col items-center gap-2 rounded-xl border-4 bg-grey p-3 text-center hover:border-orange',
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
          {events &&
            events.map((e) => (
              <CalendarItemContainer
                description={e.description}
                style={e.type}
                title={e.title}
                imgSrc={e.imgSrc}
                to={e.id + '/' + currEvent.split('T')[0]}
                isMobile={true}
              />
            ))}
        </div>
      </div>
    )
  }

  return (
    <Section
      borderRadiusVariant="pill"
      style={{ backgroundColor: 'white', padding: '8px' }}
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
