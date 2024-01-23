import type { Entry, EntryFields } from 'contentful';
import type { TypeServiceTimeFields } from './TypeServiceTime';

export interface TypeGeneralBayPriceFields {
	contentTypeId: 'generalBayPrice';
	fields: {
		dayOfWeek:
			| 'Friday'
			| 'Monday'
			| 'Saturday'
			| 'Sunday'
			| 'Thursday'
			| 'Tuesday'
			| 'Wednesday';
		serviceTime1: Entry<TypeServiceTimeFields>;
		serviceTime1Price: EntryFields.Number;
		serviceTime2: Entry<TypeServiceTimeFields>;
		serviceTime2Price: EntryFields.Number;
	};
}

export type TypeGeneralBayPrice = Entry<TypeGeneralBayPriceFields>;
