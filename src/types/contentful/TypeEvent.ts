import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeEventFields {
	eventTitle: string;
	slugId: string;
	eventStartDate: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
	eventEndDate?: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
	ctaText?: string;
	ctaLink: string;
	// eventPoster: Asset;
}

// export type TypeEvent = Entry<TypeEventFields>;
