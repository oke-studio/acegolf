export interface TypeEventFields {
	eventTitle: string;
	slugId: string;
	eventStartDate: string;
	eventEndDate?: string;
	ctaText?: string;
	ctaLink: string;
	eventPoster: {
		url: string;
	};
}

// export type TypeEvent = Entry<TypeEventFields>;
