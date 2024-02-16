'use client';

import * as React from 'react';
import { useGetEvents } from '../hooks/useGetEvents.hook';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import { Section } from '@/components/layout/section.component';
import { Promotions } from '@/components/promotions/promotions.component';
import EventsPageTitle from '../components/eventsPageTitle.components';
import { EventPicture } from '@/components/layout/eventPicture.component';

export default function Events({ params }: { params: { eventId: string } }) {
	const { eventsData, isError, isLoading } = useGetEvents();

	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
					//backgroundColor: theme => theme.palette.purple,
				}}
			>
				{/* <Box
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
						<EventsPageTitle title={params.eventId} />
					</Box>
				</Box> */}
				<Section
					SectionName="Events Specific page"
					SectionWidth="normal"
					SectionColor="#9A92C5"
					CornerRadius
					SectionHeight="fit-content"
					sx={{
						padding: '2%',
					}}
				>
					<EventPicture
						Title={'Host you Event Here'}
						Paragraph={
							'This is a piece of text about the way to organize your events at ACE. '
						}
						ImageSrc={'/images/kitchen-ace.webp'}
						ImageDescription={'Ace Kitchen'}
						Direction={'left'}
					/>
				</Section>
				<Section
					SectionName="Events page"
					SectionWidth="fullViewport"
					SectionColor=""
					CornerRadius
					SectionHeight="fit-content"
				>
					<Promotions />
				</Section>

				{/* <NintendoSwitch /> */}
			</Box>
		</Box>
	);
}
