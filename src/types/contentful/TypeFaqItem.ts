export interface TypeFaqItemFields {
  question: string
  answer: string
  faqSlug: string
  ctaLink?: string
  ctaText?: string
  categoryRefrence: { faqCategoryName: string; slug: string }
  ctaText?: string
}
