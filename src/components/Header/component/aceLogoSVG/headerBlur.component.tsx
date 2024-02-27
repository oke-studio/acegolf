'use client';
import React from 'react';
import { Box, SxProps, useMediaQuery } from '@mui/material';

const blurStyles = [
	{
		zIndex: '1',
		backdropFilter: 'blur(0.0625px)',
		maskImage:
			'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)',
	},
	{
		zIndex: '2',
		backdropFilter: 'blur(0.125px)',
		maskImage:
			'linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)',
	},
	{
		zIndex: '3',
		backdropFilter: 'blur(0.25px)',
		maskImage:
			'linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)',
	},
	{
		zIndex: '4',
		backdropFilter: 'blur(0.5px)',
		maskImage:
			'linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)',
	},
	{
		zIndex: '5',
		backdropFilter: 'blur(1px)',
		maskImage:
			'linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)',
	},
	{
		zIndex: '6',
		backdropFilter: 'blur(2px)',
		maskImage:
			'linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
	},
	{
		zIndex: '7',
		backdropFilter: 'blur(4px)',
		maskImage:
			'linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
	},
	{
		zIndex: '8',
		backdropFilter: 'blur(8px)',
		maskImage:
			'inear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
	},
];

export const HeaderBlur = () => {
	return (
		<Box
			sx={{
				flex: 'none',
				height: '100px',
				left: '0',
				overflow: 'hidden',
				pointerEvents: 'none',
				position: 'absolute',
				top: '0',
				width: '100%',
				zIndex: '2',
			}}
		>
			{blurStyles?.map(({ zIndex, backdropFilter, maskImage }, i) => (
				<Box
					key={`i_${i}`}
					sx={{
						width: '100%',
						bottom: '0',
						flex: 'none',
						left: 'calc(50.00000000000002% - 99.92481203007519% / 2)',
						overflow: 'hidden',
						pointerEvents: 'none',
						position: 'absolute',
						top: '0',
						zIndex: `${zIndex}`,
						backdropFilter: `${backdropFilter}`,
						maskImage: `${maskImage}`,
					}}
				></Box>
			))}
		</Box>
	);
};
