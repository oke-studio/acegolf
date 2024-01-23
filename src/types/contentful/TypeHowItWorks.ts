import type { Entry, EntryFields } from 'contentful';
import type { TypeFaqItemFields } from './TypeFaqItem';

export interface TypeHowItWorksFields {
	contentTypeId: 'howItWorks';
	fields: {
		title: EntryFields.Symbol;
		step1Title: EntryFields.Symbol;
		step1Content: EntryFields.Text;
		step1RelatedFaq?: Entry<TypeFaqItemFields>[];
		step2Title: EntryFields.Symbol;
		step2Content: EntryFields.Text;
		step2RelatedFaq: Entry<TypeFaqItemFields>[];
		step3Title: EntryFields.Symbol;
		step3Content: EntryFields.Text;
		step3RelatedFaq: Entry<TypeFaqItemFields>[];
	};
}

export type TypeHowItWorks = Entry<TypeHowItWorksFields>;
