import { EventsCalenderItem } from '../types/CalendarSection.types'
import { useGetEvents } from './useGetEvents.hook'

export function useGetEventsParsed() {
  const { eventsData, isError, isLoading } = useGetEvents()

  const events = eventsData?.items
    .sort(function (a, b) {
      return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
    })
    .reduce(
      (acc, curr) => {
        const currentEvents: EventsCalenderItem[] =
          curr.eventsCollection.items.map((e) => {
            return {
              description: e.eventDuration,
              title: e.eventTitle,
              type: e.eventType,
              id: e.slugId,
              imgSrc: e.eventPoster?.url,
            }
          })

        return { ...acc, ...{ [curr.eventDate.split('T')[0]]: currentEvents } }
      },
      {} as { [k: string]: Array<EventsCalenderItem> }
    )

  console.log(events)

  return {
    events,
    isError,
    isLoading,
  }
}
