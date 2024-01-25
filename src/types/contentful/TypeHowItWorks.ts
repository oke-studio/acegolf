import type { Entry, EntryFields } from 'contentful';
import type { TypeFaqItemFields } from './TypeFaqItem';

export interface TypeHowItWorksFields {
	title: string;
	step1Title: string;
	step1Content: string;
	step1RelatedFaqCollection: { items: TypeFaqItemFields[] };
	step2Title: string;
	step2Content: string;
	step2RelatedFaqCollection: { items: TypeFaqItemFields[] };
	step3Title: string;
	step3Content: string;
	step3RelatedFaqCollection: { items: TypeFaqItemFields[] };
}

// export type TypeHowItWorks = Entry<TypeHowItWorksFields>;
