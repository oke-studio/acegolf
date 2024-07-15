import { useQuery } from '@tanstack/react-query'
import { TypeEventFields } from '../../../types/contentful'
import { GetAceLeaguesItemQuery } from '../../../utils/Queries'
import { getAceQuery } from '../../../utils/getAceQuery'

const useGetAceLeaguesEventItemQuery = (slugId: string) => {
  const Query = useQuery<{
    data: { newEventItemCollection: { items: TypeEventFields[] } }
  }>({
    queryKey: ['ace_leagues_item'],
    queryFn: () => getAceQuery(GetAceLeaguesItemQuery(slugId)),
  })

  return Query
}

export const useGetAceLeaguesEventItem = (slugId: string) => {
  const { data, isError, isLoading } = useGetAceLeaguesEventItemQuery(slugId)

  return {
    leagueItem: data?.data.newEventItemCollection.items[0],
    isError,
    isLoading,
  }
}
