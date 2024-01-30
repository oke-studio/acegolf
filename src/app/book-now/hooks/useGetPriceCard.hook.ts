import { TypeMenuFields } from '@/types/contentful';
import { useQuery } from '@tanstack/react-query';
import { getAceQuery } from '@/util/getAceQuery';
import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';

export function useGetPriceCard() {
	const { data, isLoading, isError } = useGetAceQuery();

	// const menuData = data?.activeMenu.fields;
	// console.log(data);
	const priceData = data?.activePriceGrid;

	return {
		priceData,
		isLoading,
		isError,
	};
}
