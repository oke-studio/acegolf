import { useGetEvents } from '../../../../../hooks/UseGetEvents/useGetEvents.hook'
import {
  EventsCalenderItem,
  CalendarItemContainerStyleTypeMap,
} from '../../../../../types/Pages/Events/CalendarSection.types'

const extractTime = (time: Date) => {
  return `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`
}

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
      //
      // const sdt = startDateTime
      // const edt = endDateTime

      const startDate = new Date(startDateTime)
      const endDate = new Date(endDateTime)

      // console.log(startDate, endDate)

      const dateRange: Array<string> = []
      for (const d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        dateRange.push(new Date(d).toISOString())
      }

      dateRange.forEach((d) => {
        const date = d.split('T')[0]
        const start = extractTime(startDate)
        const end = extractTime(endDate)

        // debugger

        // console.log(
        //   JSON.stringify(
        //     {
        //       date,
        //       start,
        //       end,
        //       d,
        //       startDate,
        //       endDate,
        //     },
        //     null,
        //     2
        //   )
        // )

        if (acc[date]) {
          acc[date].push({
            description: `${start} - ${end}`,
            title: eventTitle,
            type: CalendarItemContainerStyleTypeMap[eventType] ?? 'event',
            id: slugId,
            imgSrc: eventPoster?.url,
          })
        } else {
          acc[date] = [
            {
              description: `${start} - ${end}`,
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
