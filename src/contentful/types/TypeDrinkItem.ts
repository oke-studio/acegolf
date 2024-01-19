import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeDrinkItemFields {
	contentTypeId: '';
	fields: {
		name: EntryFields.Symbol;
		drinkType: 'Classics' | 'Cocktails';
		itemDescription?: EntryFields.Text;
		price: EntryFields.Number;
		image?: Asset;
	};
}

export type TypeDrinkItem = Entry<TypeDrinkItemFields>;
