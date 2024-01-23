import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeMenuItemFields {
	contentTypeId: 'menuItems';
	fields: {
		name: EntryFields.Symbol;
		typeOfMeal: 'Desert' | 'Mains' | 'Starters';
		itemDescription?: EntryFields.Text;
		price: EntryFields.Number;
		image?: Asset;
	};
}

export type TypeMenuItem = Entry<TypeMenuItemFields>;
