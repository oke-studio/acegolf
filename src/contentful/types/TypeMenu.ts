import { Entry, EntryFields } from 'contentful';
import { TypeDrinkItemFields } from './TypeDrinkItem';
import { TypeMenuItemFields } from './TypeMenuItem';

export interface TypeMenuFields {
	contentTypeId: 'menu';
	fields: {
		menuName: EntryFields.Symbol;
		bigBites: Entry<TypeMenuItemFields>[];
		smallBites?: Entry<TypeMenuItemFields>[];
		deserts?: Entry<TypeMenuItemFields>[];
		drinks?: Entry<TypeDrinkItemFields>[];
	};
}

export type TypeMenu = Entry<TypeMenuFields>;
