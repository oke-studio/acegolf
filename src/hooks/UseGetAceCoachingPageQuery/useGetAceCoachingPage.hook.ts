import { useQuery } from '@tanstack/react-query'
import { getAceQuery } from '../../utils/getAceQuery'
import { TypeAceGolfStaffFields } from '../../types/contentful'
import { GetCoachingPageQuery } from '../../utils/Queries'

const useGetAceCoachingPageQuery = () => {
  const Query = useQuery<{
    data: {
      coachingPageCollection: {
        items: {
          coachingPage: string
          coachingProfilesCollection: { items: TypeAceGolfStaffFields[] }
        }[]
      }
    }
  }>({
    queryKey: ['ace_coaching_page'],
    queryFn: () => getAceQuery(GetCoachingPageQuery),
  })

  return Query
}

export function useGetCoachingPage() {
  const { data, isLoading, isError } = useGetAceCoachingPageQuery()

  const coachingData = data?.data.coachingPageCollection.items[0]

  return {
    coachingData,
    isLoading,
    isError,
  }
}
