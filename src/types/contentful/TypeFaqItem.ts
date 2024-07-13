import type { Entry, EntryFields } from 'contentful';

export interface TypeFaqItemFields {
	question: string;
	answer: string;
	ctaLink?: string;
	categoryRefrence: { faqCategoryName: string; slug: string };
}

// export type TypeFaqItem = Entry<TypeFaqItemFields>;
