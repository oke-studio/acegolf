import type { Entry, EntryFields } from 'contentful';

export interface TypeHowItWorksStepsFields {
	title?: string;
	description?: string;
	relatedFaq?: { question: string; answer: string };
}

// export type TypeHowItWorksSteps = Entry<TypeHowItWorksStepsFields>;
