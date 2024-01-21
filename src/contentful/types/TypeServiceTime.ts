import { Entry, EntryFields } from 'contentful';

export interface TypeServiceTimeFields {
	contentTypeId: 'serviceTime';
	fields: {
		nameOfServiceTime:
			| 'Full Service - Late'
			| 'Full Service'
			| 'Partial Service';
		beginningTime: EntryFields.Symbol;
		endTime?: EntryFields.Symbol;
	};
}

export type TypeServiceTime = Entry<TypeServiceTimeFields>;
