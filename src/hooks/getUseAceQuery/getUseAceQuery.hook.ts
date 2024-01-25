import { useQuery } from '@tanstack/react-query';
import { getAceQuery, GetAceQuery } from '@/util/getAceQuery';
import { TypeAceGolfBarComFields } from '@/types/contentful';
import { request } from 'graphql-request';

export function useGetAceQuery() {
	const Query = useQuery<{ data: TypeAceGolfBarComFields }>({
		queryKey: ['ace_v1'],
		queryFn: () => getAceQuery(),
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
