import type { Entry } from 'contentful';
import type { TypeBayPricingAvailabilityFields } from './TypeBayPricingAvailability';
import type { TypeEventFields } from './TypeEvent';
import type { TypeMenuFields } from './TypeMenu';
import type { TypePromotionFields } from './TypePromotion';

export interface TypeAceGolfBarComFields {
	contentTypeId: '';
	fields: {
		activeMenu: Entry<TypeMenuFields>;
		activePriceGrid: Entry<TypeBayPricingAvailabilityFields>;
		activeEvents: Entry<TypeEventFields>[];
		activePromotions: Entry<TypePromotionFields>[];
	};
}

export type TypeAceGolfBarCom = Entry<TypeAceGolfBarComFields>;
