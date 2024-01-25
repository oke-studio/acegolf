import type { Entry, EntryFields } from 'contentful';

export interface TypeFaqItemFields {
	question: string;
	answer: string;
	ctaLink?: string;
}

// export type TypeFaqItem = Entry<TypeFaqItemFields>;
