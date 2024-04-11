import { Section } from '../../../../components/Section/Section'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import {
  // EventsCalendarMock,
  //   EventsCalendarMockReduced,
  TransformEventsCalendarMockV2,
} from '../../mocks/EventsCalendar.mock'
import { Typography } from '../../../../components/Typography/Typography'
import { CalendarItemContainerStyleType } from './types/CalendarSection.types'
import { useGetEventsParsed } from './hooks/useGetEventsParsed.hook'

const CalendarItemContainer = ({
  style,
  description,
  title,
  imgSrc,
  to,
}: {
  style: CalendarItemContainerStyleType
  description: string
  title: string
  imgSrc?: string
  to?: string
}) => {
  const CalendaritemContainerStyles: {
    [k in CalendarItemContainerStyleType]: string
  } = {
    black: 'bg-black text-orange',
    dark_orange: 'bg-orange text-white',
    green: 'bg-green text-white',
    light_orange: 'bg-lightOrange text-black',
    teal: 'bg-sharpTeal text-white',
    grey: 'bg-slate-700 text-black',
    hidden: 'hidden',
    date: 'bg-grey',
  }

  if (style === 'hidden') {
    return <div />
  }

  if (style === 'date') {
    return (
      <div
        className={classNames(
          'flex flex-col gap-2 rounded-xl p-3 text-center',
          CalendaritemContainerStyles['date']
        )}
      >
        <Typography fontVariant="base" fontWeight="500">
          {title}
        </Typography>
        <Typography fontVariant="large" fontWeight="800">
          {description}
        </Typography>
      </div>
    )
  }

  return (
    <Link
      className={classNames(
        'flex h-max flex-col gap-5 rounded-xl border-2 border-solid border-transparent p-4 hover:cursor-pointer   hover:border-coolBlue',
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
      {imgSrc && (
        <div className="relative flex h-36 w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border  shadow-md">
          <div
            className="h-full bg-slate-300 grayscale"
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

  if (!eventsData || isError) {
    return <div />
  }

  if (isLoading) {
    return <div>Loading....</div>
  }

  const startDate = new Date()
  const endDate = new Date(startDate)
  endDate.setDate(endDate.getDate() + 7 * 2)

  const twoWeekSpan = []
  for (const d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    twoWeekSpan.push(new Date(d).toISOString())
  }

  const MockedEvents = TransformEventsCalendarMockV2()
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
        className="relative flex h-full min-h-96 gap-3 overflow-auto"
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

        {twoWeekSpan.map((event) => {
          // const events = eventsData[event.split('T')[0]]
          const events = MockedEvents[event.split('T')[0]]

          const eventDate = new Date(event)
            .toDateString()
            .split(' ')
            .slice(0, 3)
          return (
            <div className="flex h-full min-w-32 max-w-28 flex-col gap-3">
              <CalendarItemContainer
                style="date"
                description={eventDate[2]}
                title={[eventDate[0], eventDate[1]].join(', ')}
              />
              {events &&
                events.map((e) => (
                  <CalendarItemContainer
                    description={e.description}
                    style={e.type}
                    title={e.title}
                    imgSrc={e.imgSrc}
                    to={e.id + '/' + event.split('T')[0]}
                  />
                ))}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
