import { TypeMenu, TypeMenuFields } from '@/types/contentful';
import { useQuery } from '@tanstack/react-query';
import { getAceQuery } from '@/util/getAceQuery';

export function useGetMenu() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['ace_v1'],
    queryFn: () => getAceQuery<TypeMenuFields>('activeMenu'),
  });

  const menuData = data?.fields;
  console.log(menuData);

  return {
    menuData,
    isLoading,
    isError,
  };
}
