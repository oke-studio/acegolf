import { useQuery } from '@tanstack/react-query';
import { getAceQuery } from '@/util/getAceQuery';
import { TypeAceGolfBarComFields } from '@/types/contentful';
import { GetAceQuery } from '@/util/Queries';

export function useGetAceQuery() {
	const Query = useQuery<{ data: TypeAceGolfBarComFields }>({
		queryKey: ['ace_v1'],
		queryFn: () => getAceQuery(GetAceQuery),
	});

	const AceQuery = {
		...Query,
		data: Query.data?.data.aceGolfBarComCollection.items[0],
	};

	return AceQuery;
}
