import { useQuery } from '@tanstack/react-query'
import { getAceQuery } from '../../utils/getAceQuery'
import { TypeLeagueFields } from '../../types/contentful/TypeLeagues.ts'
import { GetEventsLeagues } from '../../utils/Queries'

const useGetLeaguesQuery = () => {
  const Query = useQuery<{
    data: { leagueItemCollection: { items: TypeLeagueFields[] } }
  }>({
    queryKey: ['ace_leagues_v1'],
    queryFn: () => getAceQuery(GetEventsLeagues),
  })

  return Query
}

export function useGetLeagues() {
  const { data, isLoading, isError } = useGetLeaguesQuery()

  const leaguesData = data?.data.leagueItemCollection.items

  return {
    leaguesData,
    isLoading,
    isError,
  }
}
