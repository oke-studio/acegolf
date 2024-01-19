import type { Entry, EntryFields } from 'contentful';
import type { TypeServiceTimeFields } from './TypeServiceTime';

export interface TypePrivateBayPriceFields {
	contentTypeId: '';
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

export type TypePrivateBayPrice = Entry<TypePrivateBayPriceFields>;
