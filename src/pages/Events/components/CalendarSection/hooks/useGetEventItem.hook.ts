import { useGetEvents } from '../../../../../hooks/UseGetEvents/useGetEvents.hook'

export function useGetEventItem(eventId: string) {
  const { eventsData, isError, isLoading } = useGetEvents()

  const eventItem = eventsData?.find((e) => e.slugId === eventId)

  // console.log(eventItem, eventDate)

  // ?..items.filter((ev) => ev.slugId === eventId)

  return { eventItem, isLoading, isError }
}
