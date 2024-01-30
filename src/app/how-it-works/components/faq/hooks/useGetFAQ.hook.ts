import { TypeAceGolfBarComFields } from '@/types/contentful/TypeAceGolfBarCom';
import { useQuery } from '@tanstack/react-query';
import { getAceQuery } from '@/util/getAceQuery';
import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';
import { TypeFaqItemFields } from '@/types/contentful';
import { GetAceQuery, GetFAQQuery } from '@/util/Queries';

const useGetFAQQuery = () => {
	const Query = useQuery<{
		data: { faqItemCollection: { items: TypeFaqItemFields[] } };
	}>({
		queryKey: ['ace_v1_faq'],
		queryFn: () => getAceQuery(GetFAQQuery),
	});

	return Query;
};

export function useGetFAQ() {
	const { data, isLoading, isError } = useGetFAQQuery();

	// console.log(data);

	const faqData = data?.data.faqItemCollection.items;

	return {
		faqData,
		isLoading,
		isError,
	};
}
