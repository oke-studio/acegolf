import { useGetAceQuery } from '../../../../../hooks/UseGetAceQuery/useGetAceQuery.hook'

export function useGetHowItWorks() {
  const { data, isLoading, isError } = useGetAceQuery()

  if (isLoading || !data) {
    return {}
  }

  const howItWorksData = data?.activeHowItWorks

  return {
    howItWorksData,
    isLoading,
    isError,
  }
}
