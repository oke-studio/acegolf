import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';

export function useGetEvents() {
	const { data, isLoading, isError } = useGetAceQuery();

	const eventsData = data?.activeEventsCollection.items;

	return {
		eventsData,
		isLoading,
		isError,
	};
}
