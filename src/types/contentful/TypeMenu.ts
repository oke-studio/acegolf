import type { Entry, EntryFields } from 'contentful';
import type { TypeDrinkItemFields } from './TypeDrinkItem';
import type { TypeMenuItemFields } from './TypeMenuItem';

export interface TypeMenuFields {
	menuName: string;
	bigBitesCollection: { items: TypeMenuItemFields[] };
	bigBitesImage: { url: string };
	smallBitesCollection: { items: TypeMenuItemFields[] };
	smallBitesImage: { url: string };
	desertsCollection: { items: TypeMenuItemFields[] };
	desertsImage: { url: string };
	drinksCollection: { items: TypeMenuItemFields[] };
	drinksImage: { url: string };
}

// export type TypeMenu = Entry<TypeMenuFields>;
