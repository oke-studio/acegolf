'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import { Section } from '@/components/layout/section.component';
import { HowItWorksInfoBox } from './components/howItWorksInfo/howItWorksInfo.component';
import { TypeHowItWorksFields, TypeFaqItemFields } from '@/types/contentful';
import { howItWorksImages } from './howItWorksImages';
import { SectionImageGrid } from '../ImageLayoutGrids/sectionImageGrid.component';

interface HowItWorksInfoBoxProps {
	title: string;
	description: string;
	relatedFAQs: TypeFaqItemFields[];
}

type HowItWorksProps =
	| {
			isLanding?: never;
			infoBoxData: HowItWorksInfoBoxProps[];
	  }
	| {
			isLanding: boolean;
			infoBoxData?: never;
	  };

export const HowItWorks = ({
	isLanding = false,
	infoBoxData,
}: HowItWorksProps) => {
	return (
		<Section
			SectionName="How it works Homepage"
			SectionWidth="normal"
			SectionColor=""
			CornerRadius
			SectionHeight="fit-content"
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
					}}
				>
					{infoBoxData?.map((info, index) => {
						return (
							<HowItWorksInfoBox
								number={(index + 1).toString()}
								key={`${info.title}`}
								description={<>{info.description}</>}
								label={<>{info.title}</>}
								miniInfoBoxOne={{
									question: info.relatedFAQs[0].question,
									answer: info.relatedFAQs[0].answer,
								}}
								miniInfoBoxTwo={{
									question: info.relatedFAQs[1].question,
									answer: info.relatedFAQs[1].answer,
								}}
							/>
						);
					})}
					{/* #1 */}
				</Box>
			</Box>
			<SectionImageGrid
				SectionImageGridWidth="rightHalf"
				ImageData={howItWorksImages}
			></SectionImageGrid>
		</Section>
	);
};
