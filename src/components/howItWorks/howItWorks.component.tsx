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
import { Section } from '@/components/layout/section.component';
import { HowItWorksInfoBox } from './components/howItWorksInfo/howItWorksInfo.component';
import { TypeHowItWorksFields, TypeFaqItemFields } from '@/types/contentful';
import { howItWorksImages } from './howItWorksImages';
import { SectionImageGrid } from '../ImageLayoutGrids/sectionImageGrid.component';
import { useGetHowItWorks } from '@/app/how-it-works/hooks/useGetHowItWorks.hook';

interface HowItWorksInfoBoxProps {
	title: string;
	description: string;
	relatedFAQs: TypeFaqItemFields[];
}

type HowItWorksProps = {
	isLanding?: boolean;
};

export const HowItWorks = ({ isLanding = false }: HowItWorksProps) => {
	const { howItWorksData, isLoading } = useGetHowItWorks();
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

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
		<Section
			SectionName="How it works Homepage"
			SectionWidth="normal"
			SectionColor=""
			CornerRadius
			SectionHeight="fit-content"
			sx={{
				position: 'relative',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '52px',
					color: '#FFF',
					...(!isLanding && {
						alignItems: 'flex-start',
					}),
				}}
			>
				{isLanding && (
					// How it works heading
					<Typography variant="largeH1" weight="900" fontStyle="italic">
						HOW IT WORKS
					</Typography>
				)}

				<Box
					sx={{
						display: 'flex',
						flexDirection: isLanding ? 'row' : 'column',
						gap: '2rem',
						...(!isLanding && {
							width: isMobile ? '100%' : '50%',
						}),
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
								isLanding={isLanding}
							/>
						);
					})}
					{/* #1 */}
				</Box>
				{isLanding && <Button variant="primary">Reserve a Bay &rarr;</Button>}
			</Box>

			{!isLanding && (
				<SectionImageGrid
					SectionImageGridWidth="rightHalf"
					ImageData={howItWorksImages}
					sx={{
						gridTemplateRows: ' 1fr 1fr 1fr',
					}}
				></SectionImageGrid>
			)}
		</Section>
	);
};
