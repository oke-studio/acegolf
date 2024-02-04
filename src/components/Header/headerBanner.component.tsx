'use client';
import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '../Typography/typography.component';
import { useGetAceQuery } from '@/hooks/getUseAceQuery/getUseAceQuery.hook';

export const HeaderBanner = () => {
	const { data, isLoading } = useGetAceQuery();

	if (isLoading || !data?.globalAnnouncementHeader) {
		return <></>;
	}

	return (
		<Box
			sx={{
				width: '100%',
				height: 'fit-content',
				backgroundColor: 'green',
				position: 'sticky',
				top: '0px',
				zIndex: theme => theme.zIndex.appBar,
				color: 'white',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				padding: ' 8px 0px',
				mixBlendMode: 'normal',
				borderRadius: ' 0px 0px 15px 15px',
			}}
		>
			<Typography variant="base" sx={{ textAlign: 'center' }}>
				{data?.globalAnnouncementHeader}
			</Typography>
		</Box>
	);
};
