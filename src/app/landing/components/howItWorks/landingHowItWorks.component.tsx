'use client';

import * as React from 'react';
import { useTheme, Box, useMediaQuery } from '@mui/material';

import { Typography } from '@/components/Typography/typography.component';
import { Card } from '@/components/Cards/cards.component';
import { Section } from '@/components/layout/section.component';
import dayjs from 'dayjs';
import { useBookNowForm } from '@/components/BookNowForm/hooks/useBookNowForm.hook';
import { BookNowForm } from '@/components/BookNowForm/bookNowForm.component';

export const LandingHowItWorks = () => {
	const { breakpoints } = useTheme();

	const isMobile = useMediaQuery(breakpoints.down('sm'));
	// const isSmallDesktop = useMediaQuery('(max-width:950px)');
	// const isLargeDesktop = useMediaQuery('(min-width:1440px)');

	const {
		handleBookNowButtonLink,
		handleDateTimePickerChange,
		handleReserveFormOnChange,
		reserveABayObject,
	} = useBookNowForm({
		guests: '1',
		duration: '1',
		date: dayjs(new Date()).format(),
		time: dayjs(new Date()).format(),
	});

	// const HowItWorksCopy = [{ label: '', description: '' }];

	return (
		<Section
			SectionName="How it works Homepage"
			SectionWidth="normal"
			SectionColor=""
			CornerRadius={true}
			SectionHeight="fit-content"
			ScrollAnimations={false}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '52px',
					color: '#FFF',
				}}
			>
				{/* How it works heading */}
				<Typography variant="largeH1" weight="900" fontStyle="italic">
					HOW IT WORKS
				</Typography>

				<Box
					sx={{
						display: 'flex',
						flexDirection: isMobile ? 'column' : 'row',
						gap: isMobile ? '16px' : '4px',
					}}
				>
					{/* #1 */}
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Typography variant="headingOne" weight="900" fontStyle="italic">
								1.
							</Typography>
							<Typography
								variant="headingTwo"
								weight="900"
								fontStyle="italic"
								sx={{
									lineHeight: '65%',
								}}
							>
								Reserve A <br />
								Bay
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Typography
								variant="large"
								weight="400"
								sx={{ padding: '0px 32px' }}
							>
								Whether you&apos;re a planner or procrastinator, we&apos;ve got
								options for you. Make a reservation in advance with our super
								simple online booking tool or just walk in and set up your tee
								time.
							</Typography>
						</Box>
					</Box>

					{/* #2 */}
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Typography variant="headingOne" weight="900" fontStyle="italic">
								2.
							</Typography>
							<Typography
								variant="headingTwo"
								weight="900"
								fontStyle="italic"
								sx={{
									lineHeight: '65%',
								}}
							>
								Set Up And
								<br /> Tee Up
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Typography
								variant="large"
								weight="400"
								sx={{ padding: '0px 32px' }}
							>
								Whether you&apos;re a planner or procrastinator, we&apos;ve got
								options for you. Make a reservation in advance with our super
								simple online booking tool or just walk in and set up your tee
								time.
							</Typography>
						</Box>
					</Box>

					{/* #3 */}
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Typography variant="headingOne" weight="900" fontStyle="italic">
								3.
							</Typography>
							<Typography
								variant="headingTwo"
								weight="900"
								fontStyle="italic"
								sx={{
									lineHeight: '65%',
								}}
							>
								Start <br />
								Swingin&apos;
							</Typography>
						</Box>
						<Typography
							variant="large"
							weight="400"
							fontStyle="normal"
							sx={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Typography variant="base">
								Whether you&apos;re a planner or procrastinator, we&apos;ve got
								options for you. Make a reservation in advance with our super
								simple online booking tool or just walk in and set up your tee
								time.
							</Typography>
						</Typography>
					</Box>
				</Box>

				<Card
					CardTitle="Book a bay with friends"
					CardDescription="Plan your visit today!"
					ColorVariant="dark"
					buttonOne={{
						children: (
							<Typography variant="base">
								<a href={handleBookNowButtonLink()} target="_blank">
									Reserve A Bay&nbsp;&rarr;
								</a>
							</Typography>
						),
						variant: 'primary',
					}}
					BackgroundColor="transparent"
					sx={{
						borderColor: '#36DAD5',
						borderWidth: '6px',
						borderStyle: 'solid',
					}}
				>
					<BookNowForm
						handleDateTimePickerChange={handleDateTimePickerChange}
						handleReserveFormOnChange={handleReserveFormOnChange}
						reserveABayObject={reserveABayObject}
						isWide={true}
						isLanding
					/>
				</Card>
			</Box>
		</Section>
	);
};
