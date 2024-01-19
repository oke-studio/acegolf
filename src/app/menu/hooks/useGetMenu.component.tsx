import { TypeMenuFields } from '@/contentful/types';
import { useQuery } from '@tanstack/react-query';

export function useGetMenu() {
  const getMenu = async () => {
    const response = await fetch('/api/menu');

    if (response.ok) {
      const data = await response.json();
      return data?.data;
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['menu-v1'],
    queryFn: () => getMenu(),
  });

  const menuData = data as { fields: TypeMenuFields };

  return {
    menuData: menuData?.fields ? menuData.fields.fields : {},
    isLoading,
    isError,
  };
}
