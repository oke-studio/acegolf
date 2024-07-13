import { TypeAceGolfBarComFields } from '@/types/contentful/TypeAceGolfBarCom';
import { useQuery } from '@tanstack/react-query';
import { getAceQuery } from '@/util/getAceQuery';
import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';

export function useGetAce() {
	const { data, isLoading, isError } = useGetAceQuery();

	const aceData = data?.activeDate;

	return {
		aceData: aceData ?? {},
		isLoading,
		isError,
	};
}
