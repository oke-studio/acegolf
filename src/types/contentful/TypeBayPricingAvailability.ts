import type { Entry, EntryFields } from 'contentful';
import type { TypeGeneralBayPriceFields } from './TypeGeneralBayPrice';
import type { TypePrivateBayPriceFields } from './TypePrivateBayPrice';

export interface TypeBayPricingAvailabilityFields {
	bayPricingScheduleName: string;
	effectiveDateRangeStart: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
	effectiveDateRangeEnd: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
	announcement?: string;
	generalBaySchedule: { items: TypeGeneralBayPriceFields[] };
	privateBaySchedule: { items: TypePrivateBayPriceFields[] };
}

// export type TypeBayPricingAvailability =
// 	Entry<TypeBayPricingAvailabilityFields>;
