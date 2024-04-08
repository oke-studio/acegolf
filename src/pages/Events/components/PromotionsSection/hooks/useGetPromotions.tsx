import { useGetAceQuery } from '../../../../../hooks/UseGetAceQuery/useGetAceQuery.hook'

export function useGetPromotions() {
  const { data, isError, isLoading } = useGetAceQuery()

  const promotionsData = data?.activePromotionsCollection.items

  return { promotionsData, isError, isLoading }
}
