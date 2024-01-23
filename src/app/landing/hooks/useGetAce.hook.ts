import { TypeAceGolfBarComFields } from '@/types/contentful/TypeAceGolfBarCom';
import { useQuery } from '@tanstack/react-query';
import { getAceQuery } from '@/util/getAceQuery';

export function useGetAce() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['ace_v1'],
		queryFn: () => getAceQuery<TypeAceGolfBarComFields>('activeDate'),
	});

	const aceData = data?.fields;
	console.log(aceData);

	return {
		aceData: aceData ?? {},
		isLoading,
		isError,
	};
}
