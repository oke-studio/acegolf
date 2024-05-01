import { useQuery } from '@tanstack/react-query'
import { getAceQuery } from '../../../../../utils/getAceQuery'
import { GetUGCTestimonialsQuery } from '../../../../../utils/Queries'

function useGetAceUGCTestimonialsQuery() {
  const Query = useQuery<{
    data: {
      testimonialsCollection: {
        items: {
          nameofPerson: string
          testimonialMessage: string
          type: 'UGC Video' | 'Testimonial'
          linkedUrl?: string
          imageVideo: { contentType: string; url: string; fileName: string }
        }[]
      }
    }
  }>({
    queryKey: ['ace_testimonials_v2'],
    queryFn: () => getAceQuery(GetUGCTestimonialsQuery),
  })

  return Query
}

export function useGetUGCTestimonials() {
  const { data, isLoading, isError } = useGetAceUGCTestimonialsQuery()

  const UGCData = data?.data.testimonialsCollection.items.filter(
    (i) => i.type === 'Testimonial'
  )

  return {
    UGCData,
    isLoading,
    isError,
  }
}
