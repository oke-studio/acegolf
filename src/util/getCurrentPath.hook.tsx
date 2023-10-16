'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';

// interface

const PathToCSS: { [key: string]: React.CSSProperties } = {
  '/': { backgroundColor: '#171717' },
  '/menu': { backgroundColor: 'pink', color: 'brown' },
};

export const useGetCurrentPathName = () => {
  const pathname = usePathname();

  return PathToCSS[pathname];
};
