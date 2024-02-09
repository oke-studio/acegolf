'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
	Box,
	styled,
	Tab,
	Tabs,
	useTheme,
	Button,
	useMediaQuery,
} from '@mui/material';

import { Typography } from '@/components/Typography/typography.component';
import { Card } from '@/components/Cards/cards.component';
import { Section } from '@/components/layout/section.component';
import dayjs from 'dayjs';
import { useBookNowForm } from '@/components/BookNowForm/hooks/useBookNowForm.hook';
import { BookNowForm } from '@/components/BookNowForm/bookNowForm.component';
import { HowItWorks } from '@/components/howItWorks/howItWorks.component';
import { HowItWorksInfoBox } from '@/components/howItWorks/components/howItWorksInfo/howItWorksInfo.component';
import { TypeHowItWorksFields, TypeFaqItemFields } from '@/types/contentful';
import { useGetHowItWorks } from '@/app/how-it-works/hooks/useGetHowItWorks.hook';

const HowItWorksLanding = () => {
	const { howItWorksData, isLoading } = useGetHowItWorks();
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));

	if (isLoading || !howItWorksData) {
		return <></>;
	}

	const RelatedFAQOne = howItWorksData.step1RelatedFaqCollection.items;
	const RelatedFAQTwo = howItWorksData.step2RelatedFaqCollection.items;
	const RelatedFAQThree = howItWorksData.step3RelatedFaqCollection.items;

	const infoBoxData = [
		{
			description: howItWorksData.step1Content,
			title: howItWorksData.step1Title,
			relatedFAQs: RelatedFAQOne,
		},
		{
			description: howItWorksData.step2Content,
			title: howItWorksData.step2Title,
			relatedFAQs: RelatedFAQTwo,
		},
		{
			description: howItWorksData.step3Content,
			title: howItWorksData.step3Title,
			relatedFAQs: RelatedFAQThree,
		},
	];

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '52px',
				color: '#FFF',
			}}
		>
			<Typography variant="largeH1" weight="900" fontStyle="italic">
				HOW IT WORKS
			</Typography>

			<Box
				sx={{
					display: 'flex',
					gap: '2rem',
					flexDirection: isMobile ? 'column' : 'row',
				}}
			>
				{infoBoxData?.map((info, index) => {
					return (
						<HowItWorksInfoBox
							number={(index + 1).toString()}
							key={`${info.title}`}
							description={<>{info.description}</>}
							label={<>{info.title}</>}
							miniInfoBox={info.relatedFAQs}
							isLanding={true}
						/>
					);
				})}
				{/* #1 */}
			</Box>
			<Button variant="primary">Reserve a Bay &rarr;</Button>
		</Box>
	);
};

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
				{/* <Typography variant="largeH1" weight="900" fontStyle="italic">
					HOW IT WORKS
				</Typography> */}

				<HowItWorksLanding />

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
						isLanding={true}
					/>
				</Card>
			</Box>
		</Section>
	);
};

{
	/* <Box
	sx={{
		display: 'flex',
		flexDirection: isMobile ? 'column' : 'row',
		gap: isMobile ? '16px' : '4px',
	}}
>
	<Box sx={{ display: 'flex', flexDirection: 'column' }}>
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Typography variant="headingOne" weight="900" fontStyle="italic">
				1.
			</Typography>
			<Typography variant="headingTwo" weight="900" fontStyle="italic">
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
			<Typography variant="large" weight="400" sx={{ padding: '0px 32px' }}>
				Whether you&apos;re a planner or procrastinator, we&apos;ve got options
				for you. Make a reservation in advance with our super simple online
				booking tool or just walk in and set up your tee time.
			</Typography>
		</Box>
	</Box>

	<Box sx={{ display: 'flex', flexDirection: 'column' }}>
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Typography variant="headingOne" weight="900" fontStyle="italic">
				2.
			</Typography>
			<Typography variant="headingTwo" weight="900" fontStyle="italic">
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
			<Typography variant="large" weight="400" sx={{ padding: '0px 32px' }}>
				Whether you&apos;re a planner or procrastinator, we&apos;ve got options
				for you. Make a reservation in advance with our super simple online
				booking tool or just walk in and set up your tee time.
			</Typography>
		</Box>
	</Box>

	<Box sx={{ display: 'flex', flexDirection: 'column' }}>
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Typography variant="headingOne" weight="900" fontStyle="italic">
				3.
			</Typography>
			<Typography variant="headingTwo" weight="900" fontStyle="italic">
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
				Whether you&apos;re a planner or procrastinator, we&apos;ve got options
				for you. Make a reservation in advance with our super simple online
				booking tool or just walk in and set up your tee time.
			</Typography>
		</Typography>
	</Box>
</Box>; */
}
