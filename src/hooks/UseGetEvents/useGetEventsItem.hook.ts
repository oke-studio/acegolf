import { useQuery } from '@tanstack/react-query'
import { TypeEventFields } from '../../types/contentful'
import { GetEventsItemQuery } from '../../utils/Queries'
import { getAceQuery } from '../../utils/getAceQuery'

const useGetAceEventsItemQuery = (slugId: string) => {
  const Query = useQuery<{
    data: { newEventItemCollection: { items: TypeEventFields[] } }
  }>({
    queryKey: ['ace_v2_events_item'],
    queryFn: () => getAceQuery(GetEventsItemQuery(slugId)),
  })

  return Query
}

export function useGetEventsItem(eventId: string) {
  const { data, isError, isLoading, refetch } =
    useGetAceEventsItemQuery(eventId)

  const eventItem = data?.data.newEventItemCollection.items[0]

  return { eventItem, isLoading, isError, refetch }
}
