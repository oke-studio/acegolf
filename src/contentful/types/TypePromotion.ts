import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypePromotionFields {
	contentTypeId: 'promotion';
	fields: {
		promotionTitle: EntryFields.Symbol;
		effectiveDateStart: EntryFields.Date;
		effectiveDateEnd: EntryFields.Date;
		sevenRoomsPromotionCode?: EntryFields.Integer;
		promotionPoster: Asset;
	};
}

export type TypePromotion = Entry<TypePromotionFields>;
