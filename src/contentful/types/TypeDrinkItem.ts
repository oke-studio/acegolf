import { Asset, Entry, EntryFields } from 'contentful';

export interface TypeDrinkItemFields {
	contentTypeId: 'drinkItem';
	fields: {
		name: EntryFields.Symbol;
		drinkType: 'Classics' | 'Cocktails';
		itemDescription?: EntryFields.Text;
		price: EntryFields.Number;
		image?: Asset;
	};
}

export type TypeDrinkItem = Entry<TypeDrinkItemFields>;
