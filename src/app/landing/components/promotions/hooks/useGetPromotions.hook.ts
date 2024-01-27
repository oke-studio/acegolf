import { TypeAceGolfBarComFields } from '@/types/contentful/TypeAceGolfBarCom';
import { useQuery } from '@tanstack/react-query';
import { getAceQuery } from '@/util/getAceQuery';
import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';

export function useGetPromotions() {
	const { data, isLoading, isError } = useGetAceQuery();

	const promotionData = data?.activePromotionsCollection.items;
	console.log(promotionData);

	return {
		promotionData,
		isLoading,
		isError,
	};
}
