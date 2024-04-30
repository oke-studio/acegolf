import { useGetAceQuery } from '../../../../../hooks/UseGetAceQuery/useGetAceQuery.hook'

export function useGetUGCTestimonials() {
  const { data, isLoading, isError } = useGetAceQuery()

  const UGCData = data?.featuredUgcVideosCollection.items

  return {
    UGCData,
    isLoading,
    isError,
  }
}
