import type { Entry, EntryFields } from 'contentful';
import type { TypeGeneralBayPriceFields } from './TypeGeneralBayPrice';
import type { TypePrivateBayPriceFields } from './TypePrivateBayPrice';

export interface TypeBayPricingAvailabilityFields {
	contentTypeId: '';
	fields: {
		bayPricingScheduleName: EntryFields.Symbol;
		effectiveDateRangeStart: EntryFields.Date;
		effectiveDateRangeEnd: EntryFields.Date;
		announcement?: EntryFields.Symbol;
		generalBaySchedule: Entry<TypeGeneralBayPriceFields>[];
		privateBaySchedule: Entry<TypePrivateBayPriceFields>[];
	};
}

export type TypeBayPricingAvailability =
	Entry<TypeBayPricingAvailabilityFields>;
