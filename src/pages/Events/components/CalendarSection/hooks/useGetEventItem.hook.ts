import { useGetEvents } from './useGetEvents.hook'

export function useGetEventItem(eventId: string, eventDate: string) {
  const { eventsData, isError, isLoading } = useGetEvents()

  const eventItem = eventsData?.items
    .find((e) => e.eventDate.split('T')[0] === eventDate)
    ?.eventsCollection.items.filter((ev) => ev.slugId === eventId)

  return { eventItem, isLoading, isError }
}
