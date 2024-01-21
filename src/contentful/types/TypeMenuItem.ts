import { Asset, Entry, EntryFields } from 'contentful';

export interface TypeMenuItemFields {
	contentTypeId: 'menuItem';
	fields: {
		name: EntryFields.Symbol;
		typeOfMeal: 'Desert' | 'Mains' | 'Starters';
		itemDescription?: EntryFields.Text;
		price: EntryFields.Number;
		image?: Asset;
	};
}

export type TypeMenuItem = Entry<TypeMenuItemFields>;
