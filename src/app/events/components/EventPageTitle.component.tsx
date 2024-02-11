'use client';

import React from 'react';
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
import { PageTitleSection } from '@/components/layout/pageTitleSection.componenet';

export default function EventPageTitle() {
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<PageTitleSection
			SectionName="Event Page Title"
			SectionWidth="fullViewport"
			SectionHeight="fit-content"
			SectionColor=""
			CornerRadius={false}
			ScrollAnimations={false}
			SpecialSVGBacking={true}
			SpecialSVGColour="#36DAD5"
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: isMobile ? 'center' : '',
					gap: '12px',
					position: 'relative',
					zIndex: '2',
					...(isMobile && { flexDirection: 'column', flexWrap: 'wrap' }),
					color: 'white',
				}}
			>
				<Typography
					variant="poster"
					weight="900"
					fontStyle="italic"
					sx={{
						textWrap: 'wrap',
						textAlign: 'center',
						flex: 1,

						width: isMobile ? '100%' : '50%',
					}}
				>
					EVENTS
				</Typography>

				<Typography
					variant="large"
					alignSelf="center"
					sx={{
						width: isMobile ? '100%' : '50%',
					}}
				>
					This copy describes the overall experience of what ace golf encourages
					users to learn more below and see the FAQs section on this page
				</Typography>
			</Box>
		</PageTitleSection>
	);
}
