import { useGetAceQuery } from '../../../../../hooks/UseGetAceQuery/useGetAceQuery.hook'

export function useGetPromotions() {
  const { data, isError, isLoading } = useGetAceQuery()

  const promotionsData = data?.featuredEventsPromotionsCollection.items

  return { promotionsData, isError, isLoading }
}
