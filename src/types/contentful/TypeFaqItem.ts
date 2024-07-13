import type { Entry, EntryFields } from 'contentful';

export interface TypeFaqItemFields {
  question: string
  answer: string
  faqSlug: string
  ctaLink?: string
  ctaText?: string
  categoryRefrence: { faqCategoryName: string; slug: string }
}

// export type TypeFaqItem = Entry<TypeFaqItemFields>;
