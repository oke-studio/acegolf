import { useQuery } from '@tanstack/react-query'
import { getAceQuery } from '../../utils/getAceQuery'
import { TypeAboutPageFields } from '../../types/contentful'
import { GetAboutPageQuery } from '../../utils/Queries'

const useGetAceAboutPageQuery = () => {
  const Query = useQuery<{
    data: { aboutPageCollection: { items: TypeAboutPageFields[] } }
  }>({
    queryKey: ['ace_about_page'],
    queryFn: () => getAceQuery(GetAboutPageQuery),
  })

  return Query
}

export function useGetAboutPage() {
  const { data, isLoading, isError } = useGetAceAboutPageQuery()

  const aboutData = data?.data.aboutPageCollection.items[0]

  return {
    aboutData,
    isLoading,
    isError,
  }
}
