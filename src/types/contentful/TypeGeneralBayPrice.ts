import type { Entry, EntryFields } from 'contentful';
import type { TypeServiceTimeFields } from './TypeServiceTime';

export interface TypeGeneralBayPriceFields {
	dayOfWeek:
		| 'Friday'
		| 'Monday'
		| 'Saturday'
		| 'Sunday'
		| 'Thursday'
		| 'Tuesday'
		| 'Wednesday';
	serviceTime1: TypeServiceTimeFields;
	serviceTime1Price: number;
	serviceTime2: TypeServiceTimeFields;
	serviceTime2Price: number;
}

// export type TypeGeneralBayPrice = Entry<TypeGeneralBayPriceFields>;
