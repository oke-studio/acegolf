import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';

export function useGetHowItWorks() {
	const { data, isLoading, isError } = useGetAceQuery();

	if (isLoading || !data) {
		return {};
	}

	const howItWorksData = data?.activeHowItWorks;
	console.log(howItWorksData);

	return {
		howItWorksData,
		isLoading,
		isError,
	};
}
