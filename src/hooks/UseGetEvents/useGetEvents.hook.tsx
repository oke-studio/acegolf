import { useQuery } from '@tanstack/react-query'
import { getAceQuery } from '../../utils/getAceQuery'
import { TypeEventFields } from '../../types/contentful'
import { GetEventsQuery } from '../../utils/Queries'

const useGetEventsQuery = () => {
  const Query = useQuery<{
    data: { newEventItemCollection: { items: TypeEventFields[] } }
  }>({
    queryKey: ['ace_events'],
    queryFn: () => getAceQuery(GetEventsQuery),
  })

  return Query
}

export function useGetEvents() {
  const { data, isLoading, isError } = useGetEventsQuery()

  const eventsData = data?.data.newEventItemCollection.items

  return {
    eventsData,
    isLoading,
    isError,
  }
}
