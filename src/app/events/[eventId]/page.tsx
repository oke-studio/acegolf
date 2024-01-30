'use client';

import * as React from 'react';
import { useGetEvents } from '../hooks/useGetEvents.hook';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import { Section } from '@/components/layout/section.component';
import { Promotions } from '@/app/landing/components/promotions/promotions.component';

export default function Events({ params }: { params: { eventId: string } }) {
	const { eventsData, isError, isLoading } = useGetEvents();

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				backgroundColor: theme => theme.palette.purple,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					gap: '0.5rem',
					padding: '2rem',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flex: 1,
						alignItems: 'center',
					}}
				>
					<Typography
						variant="poster"
						weight="900"
						fontStyle="italic"
						sx={{ textWrap: 'wrap', textAlign: 'center', flex: 1 }}
					>
						EVENT
					</Typography>
					<Typography variant="largeH1" weight="700">
						{params.eventId}
					</Typography>
				</Box>
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
			<Section
				SectionName="Events page"
				SectionWidth="normal"
				SectionColor=""
				CornerRadius
				SectionHeight="fit-content"
			>
				<Promotions />
			</Section>

			{/* <NintendoSwitch /> */}
		</Box>
	);
}
