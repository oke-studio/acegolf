import ImageMock01 from '../../../assets/simrooms/bay1.webp'
import { EventsCalenderItem } from '../components/CalendarSection/types/CalendarSection.types'

interface EventsCalendarMockProps {
  [k: string]: EventsCalenderItem[]
}

export const EventsCalendarMock: EventsCalendarMockProps = {
  ['2024-03-28T00:00:00.000Z']: [
    {
      title: 'Open, Regular Weekday Hours',
      description: 'All day',
      imgSrc: ImageMock01,
      type: 'black',
      id: 'slug',
    },
  ],
  ['2024-03-29T00:00:00.000Z']: [
    {
      title: 'Open, Regular Weekday Hours',
      description: 'All day',
      id: 'slug',
      type: 'dark_orange',
    },
    {
      title: 'Long Weekend',
      description: 'All day',
      id: 'slug',
      type: 'light_orange',
    },
    {
      title: 'Open, Regular Weekday Hours',
      description: 'All day',
      id: 'slug',

      type: 'green',
    },
  ],
  ['2024-03-30T00:00:00.000Z']: [
    {
      title: 'Open, Regular Weekday Hours',
      description: 'All day',
      imgSrc: ImageMock01,
      type: 'green',
      id: 'slug',
    },
    {
      title: 'Long Weekend',
      description: 'All day',

      type: 'light_orange',
      id: 'slug',
    },
  ],
  ['2024-03-31T00:00:00.000Z']: [
    {
      title: 'Open, Regular Weekday Hours',
      description: 'All day',

      type: 'green',
      id: 'slug',
    },
    {
      title: 'Long Weekend',
      description: 'All day',

      type: 'light_orange',
      id: 'slug',
    },
  ],
  ['2024-04-01T00:00:00.000Z']: [
    {
      title: 'Open, Regular Weekday Hours',
      description: 'All day',

      type: 'light_orange',
    },
    {
      title: 'Long Weekend',
      description: 'All day',

      type: 'dark_orange',
      id: 'slug',
    },
  ],
  ['2024-04-02T00:00:00.000Z']: [
    {
      title: 'Open, Regular Weekday Hours',
      description: 'All day',
      imgSrc: ImageMock01,
      type: 'light_orange',
      id: 'slug',
    },
    {
      title: 'Long Weekend',
      description: 'All day',

      type: 'green',
      id: 'slug',
    },
    {
      title: 'Testing',
      description: '8am - 5pm',
      type: 'black',
      id: 'slug',
    },
    {
      title: 'Testing',
      description: 'Someday',
      type: 'teal',
      id: 'slug',
    },
  ],
  ['2024-04-03T00:00:00.000Z']: [
    {
      title: 'Open, Regular Weekday Hours',
      description: 'All day',
      imgSrc: ImageMock01,
      type: 'light_orange',
      id: 'slug',
    },
  ],
}

export const EventsCalendarMockReduced = () => {
  const reducedEventsCalendarMock: EventsCalenderItem[] = []
  const eventKeys = Object.keys(EventsCalendarMock)
  let eventsLength = 0
  //   const eventsWidth = eventKeys.length

  eventKeys.forEach((event) => {
    const date = new Date(event).toDateString().split(' ').slice(0, 3)
    // const title = console.log(date)

    const eventsSize = EventsCalendarMock[event].length
    reducedEventsCalendarMock.push({
      description: date[2],
      type: 'date',
      title: [date[0], date[1]].join(', '),
    })

    if (eventsLength < eventsSize) {
      eventsLength = eventsSize
    }
  })

  for (let i = 0; i < eventsLength; i++) {
    eventKeys.forEach((e) => {
      const event = EventsCalendarMock[e][i]
      if (event) {
        reducedEventsCalendarMock.push(event)
      } else {
        reducedEventsCalendarMock.push({
          description: 'null',
          title: 'null',
          type: 'hidden',
        })
      }
    })
  }

  return reducedEventsCalendarMock
}
