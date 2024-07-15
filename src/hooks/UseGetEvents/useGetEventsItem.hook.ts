import { useGetEvents } from './useGetEvents.hook'

export function useGetEventsItem(eventId: string) {
  const { eventsData, isError, isLoading } = useGetEvents()

  const eventItem = eventsData?.find((e) => e.slugId === eventId)

  return { eventItem, isLoading, isError }
}
