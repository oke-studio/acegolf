import { useQuery } from '@tanstack/react-query'
import { getAceQuery } from '../../utils/getAceQuery'
import { TypeAceHomePageFields } from '../../types/contentful'

import { GetAceV2Query } from '../../utils/Queries'

export function useGetAceQuery() {
  const Query = useQuery<{ data: TypeAceHomePageFields }>({
    queryKey: ['ace_v2'],
    queryFn: () => getAceQuery(GetAceV2Query),
  })

  const AceQuery = {
    ...Query,
    data: Query.data?.data.aceHomePageCollection.items[0],
  }

  return AceQuery
}
