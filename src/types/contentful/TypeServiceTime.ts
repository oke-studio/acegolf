import type { Entry, EntryFields } from 'contentful';

export interface TypeServiceTimeFields {
	nameOfServiceTime: 'Full Service - Late' | 'Full Service' | 'Partial Service';
	beginningTime: string;
	endTime: string;
}

// export type TypeServiceTime = Entry<TypeServiceTimeFields>;
