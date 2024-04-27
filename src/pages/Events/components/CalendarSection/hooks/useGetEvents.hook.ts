import { useGetAceQuery } from '../../../../../hooks/UseGetAceQuery/useGetAceQuery.hook'

export function useGetEvents() {
  const { data, isLoading, isError } = useGetAceQuery()

  if (isLoading || !data) {
    return {}
  }

  const eventsData = data?.featuredEventsPromotionsCollection

  return {
    eventsData,
    isLoading,
    isError,
  }
}
