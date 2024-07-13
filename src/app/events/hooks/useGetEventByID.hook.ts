import { useGetEventsAndPromotions } from '@/components/promotions/hooks/useGetEventsAndPromotions.hook';
import { useGetEvents } from './useGetEvents.hook';

export const useGetEventByID = (id: string) => {
	const { promotionAndEventsData, isError, isLoading } =
		useGetEventsAndPromotions();

	const eventByID = promotionAndEventsData.filter(e => e.slugId === id);

	return { eventByID, isError, isLoading };
};
