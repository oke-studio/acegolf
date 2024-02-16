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
						Title={params.eventId}
						ImageSrc={'/images/kitchen-ace.webp'}
						ImageDescription={'Ace Kitchen'}
						EventStartDate={' Feb 17th 2023 7pm'}
						EventEndDate={'Feb 17th 2023 10pm'}
						EventDescription={
							"Join us for the friends and Family Event at Ace Golf Bar & Lounge! We're formally launching our food and drink menu! Our inhouse chef has created some truly unique dishes that will pair well with our craft cocktails. Our golf bays are discounted by 25% for this event, so come take advantage on our promotional pricing!Not a golfer? Come for the food and drinks!"
						}
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
