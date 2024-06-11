'use client';

import { usePathname } from 'next/navigation';
import { SxProps } from '@mui/material';

// interface

const PathToCSS: { [key: string]: SxProps } = {
	'/': { backgroundColor: '#171717', borderRadius: '0px 0px 25px 25px' },
	'/menu': {
		backgroundColor: '#EB8B32',
		color: 'black',
		borderRadius: '0px 0px 25px 25px',
	},
	// '/how-it-works': {
	// 	backgroundColor: '#EB8B32',
	// 	color: 'black',
	// },
	'/events': {
		backgroundColor: '#9A92C5',
		color: 'black',
		borderRadius: '0px 0px 25px 25px',
	},

	'/events/': {
		backgroundColor: '#9A92C5',
		color: 'black',
		borderRadius: '0px 0px 25px 25px',
	},
};

export const useGetCurrentPathName = () => {
	const pathname = usePathname();

	return PathToCSS[pathname];
};
