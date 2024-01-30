'use client';

import * as React from 'react';
import { useGetEvents } from './hooks/useGetEvents.hook';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import { Promotions } from '../landing/components/promotions/promotions.component';
import { Section } from '@/components/layout/section.component';

export default function Events() {
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
					EVENTS
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
			<Section
				SectionName="Events Homepage"
				SectionWidth="normal"
				SectionColor=""
				CornerRadius
				SectionHeight="fit-content"
			>
				<Box
					sx={{
						display: 'flex',
						gap: '12px',
						flexDirection: 'column',
						color: 'black',
					}}
				>
					<Typography variant="largeH1" weight="900" fontStyle="italic">
						About The Kitchen
					</Typography>
					<Typography variant="base">
						This is a piece of text about the kitchen, it will tell the people
						how the kitchen. Introduce the chefs and their approach. It will aso
						tell information on when the kitchen is open for everyday for
						golfers and for just dinners. it will also show that the kitchen is
						on uber eats{' '}
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '12px',
						flexDirection: 'column',
						color: 'black',
					}}
				>
					<Typography variant="largeH1" weight="900" fontStyle="italic">
						About The Bar
					</Typography>
					<Typography variant="base">
						This is a piece of text about the kitchen, it will tell the people
						how the kitchen. Introduce the chefs and their approach. It will aso
						tell information on when the kitchen is open for everyday for
						golfers and for just dinners. it will also show that the kitchen is
						on uber eats{' '}
					</Typography>
				</Box>

				<Box>
					<Promotions />
				</Box>
			</Section>

			{/* <NintendoSwitch /> */}
		</Box>
	);
}
