import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeMenuItemFields {
	name: string;
	typeOfMeal: 'Desert' | 'Mains' | 'Starters';
	itemDescription?: string;
	price: number;
	// image?: Asset;
}

// export type TypeMenuItem = Entry<TypeMenuItemFields>;
