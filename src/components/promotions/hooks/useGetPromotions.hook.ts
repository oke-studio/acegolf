import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';

export function useGetPromotions() {
	const { data, isLoading, isError } = useGetAceQuery();

	const promotionData = data?.activePromotionsCollection.items;

	return {
		promotionData,
		isLoading,
		isError,
	};
}
