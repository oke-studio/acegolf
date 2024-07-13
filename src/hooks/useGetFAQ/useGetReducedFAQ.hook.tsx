import { useGetFAQ } from './useGetFAQ.hook'

export const useGetReducedFAQ = () => {
  const { faqData, isError, isLoading } = useGetFAQ()

  if (!faqData) {
    return {}
  }

  const faqReduced = faqData.reduce(
    (acc, curr) => {
      const category = curr.categoryRefrence.faqCategoryName

      if (acc[category]) {
        acc[category].push({
          question: curr.question,
          answer: curr.answer,
          slug: curr.faqSlug,
          ctaLink: curr.ctaLink,
          ctaText: curr.ctaText,
        })
      } else {
        acc[category] = [
          {
            question: curr.question,
            answer: curr.answer,
            slug: curr.faqSlug,
            ctaLink: curr.ctaLink,
            ctaText: curr.ctaText,
          },
        ]
      }
      return {
        ...acc,
      }
    },
    {} as {
      [x: string]: {
        answer: string
        question: string
        slug: string
        ctaLink?: string
        ctaText?: string
      }[]
    }
  )

  return {
    faqReduced,
    isError,
    isLoading,
  }
}
