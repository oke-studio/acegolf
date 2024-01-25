import { TypeAceGolfBarComFields } from '@/types/contentful/TypeAceGolfBarCom';
import { useQuery } from '@tanstack/react-query';
import { getAceQuery } from '@/util/getAceQuery';
import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';

export function useGetAce() {
	const { data, isLoading, isError } = useGetAceQuery();

	const aceData = data?.activeDate;
	console.log(aceData);

	return {
		aceData: aceData ?? {},
		isLoading,
		isError,
	};
}
