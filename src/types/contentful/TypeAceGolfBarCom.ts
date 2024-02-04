import type { TypeBayPricingAvailabilityFields } from './TypeBayPricingAvailability';
import type { TypeEventFields } from './TypeEvent';
import type { TypeHowItWorksFields } from './TypeHowItWorks';
import type { TypeMenuFields } from './TypeMenu';
import type { TypePromotionFields } from './TypePromotion';

export interface TypeAceGolfBarComFields {
	aceGolfBarComCollection: {
		items: {
			name: string;
			globalAnnouncementHeader: string;
			activeDate: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
			activeMenu: TypeMenuFields;
			activePriceGrid: TypeBayPricingAvailabilityFields;
			activeHowItWorks: TypeHowItWorksFields;
			activeEventsCollection: { items: TypeEventFields[] };
			activePromotionsCollection: { items: TypePromotionFields[] };
		}[];
	};
}

// export type TypeAceGolfBarCom = Entry<TypeAceGolfBarComFields>;
