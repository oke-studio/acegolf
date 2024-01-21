import { Entry } from 'contentful';
import { TypeBayPricingAvailabilityFields } from './TypeBayPricingAvailability';
import { TypeEventFields } from './TypeEvent';
import { TypeMenuFields } from './TypeMenu';
import { TypePromotionFields } from './TypePromotion';

export interface TypeAceGolfBarComFields {
	contentTypeId: 'aceGolfBarCom';
	fields: {
		activeMenu: Entry<TypeMenuFields>;
		activePriceGrid: Entry<TypeBayPricingAvailabilityFields>;
		activeEvents: Entry<TypeEventFields>[];
		activePromotions: Entry<TypePromotionFields>[];
	};
}

export type TypeAceGolfBarCom = Entry<TypeAceGolfBarComFields>;
