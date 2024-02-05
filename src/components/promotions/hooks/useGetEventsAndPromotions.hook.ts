import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';
import { useGetEvents } from './useGetEvents.hook';
import { useGetPromotions } from './useGetPromotions.hook';

type PromotionAndEventsType = {
	title: string;
	startDate: string;
	endDate?: string;
	type: 'promotion' | 'event';
	poster: { url: string };
	sevenRoomsPromotionCode?: number;
	ctaText?: string;
	ctaLink?: string;
	slugId: string;
};

export function useGetEventsAndPromotions() {
	const {
		promotionData,
		isLoading: isPromotionsLoading,
		isError: isPromotionsError,
	} = useGetPromotions();

	const {
		eventsData,
		isLoading: isEventsLoading,
		isError: isEventsError,
	} = useGetEvents();

	const isLoading = isEventsLoading || isPromotionsLoading;

	const isError = isEventsError || isPromotionsError;

	const reducedEvents = eventsData?.reduce((acc, cur) => {
		const eventsObject: PromotionAndEventsType = {
			title: cur.eventTitle,
			endDate: cur.eventEndDate,
			startDate: cur.eventStartDate,
			poster: cur.eventPoster,
			slugId: cur.slugId,
			type: 'event',
			ctaLink: cur.ctaLink,
			ctaText: cur.ctaText,
		};

		acc.push(eventsObject);

		return acc;
	}, [] as PromotionAndEventsType[]);

	const reducedPromotions = promotionData?.reduce((acc, cur) => {
		const promotionsObject: PromotionAndEventsType = {
			title: cur.promotionTitle,
			endDate: cur.effectiveDateEnd,
			startDate: cur.effectiveDateStart,
			poster: { url: cur.promotionPoster.url },
			slugId: cur.slugId,
			type: 'promotion',
			sevenRoomsPromotionCode: cur.sevenRoomsPromotionCode,
		};

		acc.push(promotionsObject);

		return acc;
	}, [] as PromotionAndEventsType[]);

	const promotionAndEventsData = [
		...(reducedEvents ? reducedEvents : []),
		...(reducedPromotions ? reducedPromotions : []),
	].sort((a, b) => {
		const date1 = new Date(b.startDate);
		const date2 = new Date(a.startDate);
		return date2.getTime() - date1.getTime();
	});

	return {
		promotionAndEventsData,
		isLoading,
		isError,
	};
}
