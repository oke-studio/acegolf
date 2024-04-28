import { useGetEvents } from '../../../../../hooks/UseGetEvents/useGetEvents.hook'
import {
  EventsCalenderItem,
  CalendarItemContainerStyleTypeMap,
} from '../types/CalendarSection.types'

export function useGetEventsParsed() {
  const { eventsData, isError, isLoading } = useGetEvents()

  const events = eventsData?.reduce(
    (acc, curr) => {
      const {
        // eventDescription,
        eventTitle,
        eventPoster,
        eventType,
        slugId,
        startDateTime,
        endDateTime,
      } = curr

      const startDate = new Date(startDateTime)
      const endDate = new Date(endDateTime)

      const dateRange: Array<string> = []
      for (const d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        dateRange.push(new Date(d).toISOString())
      }

      dateRange.forEach((d) => {
        const date = d.split('T')[0]

        if (acc[date]) {
          acc[date].push({
            description: 'song',
            title: eventTitle,
            type: CalendarItemContainerStyleTypeMap[eventType] ?? 'event',
            id: slugId,
            imgSrc: eventPoster?.url,
          })
        } else {
          acc[date] = [
            {
              description: 'sing',
              title: eventTitle,
              type: CalendarItemContainerStyleTypeMap[eventType] ?? 'event',
              id: slugId,
              imgSrc: eventPoster?.url,
            },
          ]
        }
      })

      return acc
    },
    {} as { [k: string]: EventsCalenderItem[] }
  )

  return {
    events,
    isError,
    isLoading,
  }
}
