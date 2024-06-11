import { useGetAceQuery } from '../../../../hooks/UseGetAceQuery/useGetAceQuery.hook'

export function useGetPriceCard() {
  const { data, isLoading, isError } = useGetAceQuery()

  const priceData = data?.activePriceGrid

  return {
    priceData,
    isLoading,
    isError,
  }
}
