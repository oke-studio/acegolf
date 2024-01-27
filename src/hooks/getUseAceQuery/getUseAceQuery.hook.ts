import { useQuery } from '@tanstack/react-query';
import { getAceQuery } from '@/util/getAceQuery';
import { TypeAceGolfBarComFields } from '@/types/contentful';
import { request } from 'graphql-request';
import { GetAceQuery } from '@/util/Queries';

export function useGetAceQuery() {
	const Query = useQuery<{ data: TypeAceGolfBarComFields }>({
		queryKey: ['ace_v1'],
		queryFn: () => getAceQuery(GetAceQuery),
	});

	// if (Query.isLoading || Query.isError || !Query.data) {
	// 	return Query;
	// }

	const AceQuery = {
		...Query,
		data: Query.data?.data.aceGolfBarComCollection.items[0],
	};

	return AceQuery;
}
