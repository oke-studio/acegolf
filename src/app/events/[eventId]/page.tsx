'use client';

import * as React from 'react';
// import { useGetEvents } from './hooks/useGetEvents.hook';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';

export default function Events({ params }: { params: { eventId: string } }) {
	// const { eventsData, isError, isLoading } = useGetEvents();

	// console.log(eventsData);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
			<Box
				sx={{
					display: 'flex',
					backgroundColor: theme => theme.palette.purple,
					// flexDirection: isMobileOrTablet ? 'column' : 'row',
					gap: '0.5rem',
					padding: '2rem',
				}}
			>
				<Typography
					variant="poster"
					weight="900"
					fontStyle="italic"
					sx={{ textWrap: 'wrap', textAlign: 'center', flex: 1 }}
				>
					EVENT {params.eventId}
				</Typography>
				<Typography
					variant="large"
					weight="500"
					sx={{
						textWrap: 'wrap',
						textAlign: 'center',
						flex: 1,
						color: 'black',
					}}
				>
					This copy describes the overall experience of what ace golf encourages
					users to learn more below and see the FAQs section on this page
				</Typography>
			</Box>

			{/* <NintendoSwitch /> */}
		</Box>
	);
}
