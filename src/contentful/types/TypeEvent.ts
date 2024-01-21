import { Asset, Entry, EntryFields } from 'contentful';

export interface TypeEventFields {
	contentTypeId: 'event';
	fields: {
		eventTitle: EntryFields.Symbol;
		eventStartDate: EntryFields.Date;
		eventEndDate?: EntryFields.Date;
		ctaText?: EntryFields.Symbol;
		ctaLink: EntryFields.Symbol;
		eventPoster: Asset;
	};
}

export type TypeEvent = Entry<TypeEventFields>;
