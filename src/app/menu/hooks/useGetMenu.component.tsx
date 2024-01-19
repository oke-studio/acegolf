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

  const menuData = data;

  return {
    menuData,
    isLoading,
    isError,
  };
}
