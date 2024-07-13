import type { Entry, EntryFields } from 'contentful';
import type { TypeGeneralBayPriceFields } from './TypeGeneralBayPrice';
import type { TypePrivateBayPriceFields } from './TypePrivateBayPrice';

export interface TypeBayPricingAvailabilityFields {
	bayPricingScheduleName: string;
	effectiveDateRangeStart: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
	effectiveDateRangeEnd: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
	announcement?: string;
	generalBayScheduleCollection: { items: TypeGeneralBayPriceFields[] };
	privateBayScheduleCollection: { items: TypePrivateBayPriceFields[] };
}

// export type TypeBayPricingAvailability =
// 	Entry<TypeBayPricingAvailabilityFields>;
