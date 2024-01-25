import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypePromotionFields {
	promotionTitle: string;
	effectiveDateStart: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
	effectiveDateEnd: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
	sevenRoomsPromotionCode?: number;
	// promotionPoster: Asset;
}

// export type TypePromotion = Entry<TypePromotionFields>;
