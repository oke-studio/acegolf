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
import { PageTitleSection } from '@/components/layout/pageTitleSection.component';
import { SpinningMenuHeading } from './menu-carousel/components/spinningMenuHeading/spinningMenuHeading.component';

export default function MenuPageTitle() {
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<PageTitleSection
			SectionName="Kitchen and Bar information"
			SectionWidth="fullViewport"
			SectionHeight="fit-content"
			SectionColor=""
			CornerRadius={false}
			ScrollAnimations={false}
			SpecialSVGBacking={false}
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
				}}
			>
				<SpinningMenuHeading />
				<Typography
					variant="large"
					alignSelf="center"
					sx={{
						width: isMobile ? '100%' : '50%',
					}}
				>
					Swing into flavour with our culinary delights. This is a piece of text
					about the food inspiration. it will tell the people what to expect
					with menu.
				</Typography>
			</Box>
		</PageTitleSection>
	);
}
