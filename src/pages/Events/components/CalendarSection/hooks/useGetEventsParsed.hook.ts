import { useGetEvents } from '../../../../../hooks/UseGetEvents/useGetEvents.hook'
import {
  EventsCalenderItem,
  CalendarItemContainerStyleTypeMap,
} from '../../../../../types/Pages/Events/CalendarSection.types'
import moment from 'moment'

// const extractTime = (time: Date) => {
//   return `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`
// }

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

      const startDate = moment(startDateTime)
      const endDate = moment(endDateTime)

      // console.log(startDate, endDate)

      const dateRange: Array<string> = []
      for (const d = startDate; d <= endDate; d.set('d', d.get('d') + 1)) {
        dateRange.push(d.toISOString())
      }
      // debugger
      // console.log(dateRange, startDate, endDate)
      // console.log(
      //   JSON.stringify(
      //     { dateRange, startDate, endDate, startDateTime, endDateTime },
      //     null,
      //     2
      //   )
      // )

      dateRange.forEach((d) => {
        const date = d.split('T')[0]
        const start = startDate.format('hh:mm A')
        const end = endDate.format('hh:mm A')

        // debugger

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
