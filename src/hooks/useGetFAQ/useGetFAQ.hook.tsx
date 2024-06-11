import { useQuery } from '@tanstack/react-query'
import { getAceQuery } from '../../utils/getAceQuery'
import { TypeFaqItemFields } from '../../types/contentful'
import { GetFAQQuery } from '../../utils/Queries'

const useGetFAQQuery = () => {
  const Query = useQuery<{
    data: { faqItemCollection: { items: TypeFaqItemFields[] } }
  }>({
    queryKey: ['ace_v1_faq'],
    queryFn: () => getAceQuery(GetFAQQuery),
  })

  return Query
}

export function useGetFAQ() {
  const { data, isLoading, isError } = useGetFAQQuery()

  const faqData = data?.data.faqItemCollection.items

  return {
    faqData,
    isLoading,
    isError,
  }
}
