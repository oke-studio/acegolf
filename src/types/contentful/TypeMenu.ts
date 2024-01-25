import type { Entry, EntryFields } from 'contentful';
import type { TypeDrinkItemFields } from './TypeDrinkItem';
import type { TypeMenuItemFields } from './TypeMenuItem';

export interface TypeMenuFields {
	menuName: string;
	bigBitesCollection: { items: TypeMenuItemFields[] };
	smallBitesCollection?: { items: TypeMenuItemFields[] };
	desertsCollection?: { items: TypeMenuItemFields[] };
	drinksCollection?: { items: TypeMenuItemFields[] };
}

// export type TypeMenu = Entry<TypeMenuFields>;
