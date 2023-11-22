'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { ThemeOptions, SxProps } from '@mui/material';

// interface

const PathToCSS: { [key: string]: SxProps } = {
  '/': { backgroundColor: '#171717' },
  '/menu': {
    backgroundColor: '#EB8B32',
    color: 'black',
    ':after': {
      content: "''",
      position: 'absolute',
      background: 'no-repeat url(/images/Vector.svg) center',
    },
  },
};

// backgroundColor: 'transparent',
//               background: 'no-repeat url(/images/tab-line.svg) center 50%',
//               backgroudSize: '65%',

export const useGetCurrentPathName = () => {
  const pathname = usePathname();

  return PathToCSS[pathname];
};
