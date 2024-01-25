import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeDrinkItemFields {
	name: string;
	drinkType: 'Classics' | 'Cocktails';
	itemDescription?: string;
	price: number;
	// image?: Asset;
}

// export type TypeDrinkItem = Entry<TypeDrinkItemFields>;
