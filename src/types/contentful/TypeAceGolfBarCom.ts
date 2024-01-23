import type { Entry, EntryFields } from 'contentful';
import type { TypeBayPricingAvailabilityFields } from './TypeBayPricingAvailability';
import type { TypeEventFields } from './TypeEvent';
import type { TypeHowItWorksFields } from './TypeHowItWorks';
import type { TypeMenuFields } from './TypeMenu';
import type { TypePromotionFields } from './TypePromotion';

export interface TypeAceGolfBarComFields {
	contentTypeId: 'aceGolfBarCom';
	fields: {
		name: EntryFields.Symbol;
		activeDate: EntryFields.Date;
		activeMenu: Entry<TypeMenuFields>;
		activePriceGrid: Entry<TypeBayPricingAvailabilityFields>;
		activeHowItWorks: Entry<TypeHowItWorksFields>;
		activeEvents: Entry<TypeEventFields>[];
		activePromotions: Entry<TypePromotionFields>[];
	};
}

export type TypeAceGolfBarCom = Entry<TypeAceGolfBarComFields>;
