import { useGetAceQuery } from '../../../hooks/UseGetAceQuery/useGetAceQuery.hook'

export function useGetMenu() {
  const { data, isLoading, isError } = useGetAceQuery()

  const menuData = data?.activeMenu

  return {
    menuData,
    isLoading,
    isError,
  }
}
