'use client';

import * as React from 'react';

import { Box, CircularProgress } from '@mui/material';

import { Section } from '@/components/layout/section.component';
import { Promotions } from '@/components/promotions/promotions.component';

import { EventPicture } from '@/components/layout/eventPicture.component';
import { useGetEventByID } from '../hooks/useGetEventByID.hook';

export default function Events({ params }: { params: { eventId: string } }) {
	const { eventByID, isLoading, isError } = useGetEventByID(params.eventId);

	const event = eventByID[0];

	if (!isLoading) {
		console.log(new Date(event.startDate).toDateString());
	}

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
					{isLoading ? (
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<CircularProgress />
						</Box>
					) : (
						<EventPicture
							Title={event.title}
							ImageSrc={event.poster.url}
							ImageDescription={event.poster.description}
							EventStartDate={new Date(event.startDate).toDateString()}
							EventEndDate={
								event.endDate ? new Date(event.endDate).toDateString() : ''
							}
							EventDescription={event.description ?? ''}
							Direction={'left'}
						/>
					)}
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
