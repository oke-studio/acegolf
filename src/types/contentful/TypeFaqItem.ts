import type { Entry, EntryFields } from 'contentful';

export interface TypeFaqItemFields {
	contentTypeId: 'faqItem';
	fields: {
		question: EntryFields.Symbol;
		answer: EntryFields.Text;
		ctaLink?: EntryFields.Symbol;
	};
}

export type TypeFaqItem = Entry<TypeFaqItemFields>;
