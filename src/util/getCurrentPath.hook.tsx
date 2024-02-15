'use client';

import { usePathname } from 'next/navigation';
import { SxProps } from '@mui/material';

// interface

const PathToCSS: { [key: string]: SxProps } = {
	'/': { backgroundColor: '#171717' },
	'/menu': {
		backgroundColor: '#EB8B32',
		color: 'black',
	},
	// '/how-it-works': {
	// 	backgroundColor: '#EB8B32',
	// 	color: 'black',
	// },
	'/events': {
		backgroundColor: '#9A92C5',
		color: 'black',
	},
};

export const useGetCurrentPathName = () => {
	const pathname = usePathname();

	return PathToCSS[pathname];
};
