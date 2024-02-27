export interface TypeFaqItemFields {
  question: string
  answer: string
  ctaLink?: string
  faqSlug: string
  categoryRefrence: { faqCategoryName: string; slug: string }
}
