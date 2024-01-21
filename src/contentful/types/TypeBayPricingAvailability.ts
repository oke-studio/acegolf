import { Entry, EntryFields } from 'contentful';
import { TypeGeneralBayPriceFields } from './TypeGeneralBayPrice';
import { TypePrivateBayPriceFields } from './TypePrivateBayPrice';

export interface TypeBayPricingAvailabilityFields {
	contentTypeId: 'bayPricingAvailability';
	fields: {
		bayPricingScheduleName: EntryFields.Symbol;
		effectiveDateRangeStart: EntryFields.Date;
		effectiveDateRangeEnd: EntryFields.Date;
		announcement?: EntryFields.Symbol;
		generalBaySchedule: Entry<TypeGeneralBayPriceFields>[];
		privateBaySchedule: Entry<TypePrivateBayPriceFields>[];
	};
}

export type TypeBayPricingAvailability = Entry<
	TypeBayPricingAvailabilityFields
>;
