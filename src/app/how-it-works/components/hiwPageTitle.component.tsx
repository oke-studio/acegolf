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

export default function HiwPageTitle() {
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<PageTitleSection
			SectionName="How it works page title"
			SectionWidth="fullViewport"
			SectionHeight="fit-content"
			SectionColor="#EB8B32"
			CornerRadius={false}
			ScrollAnimations={false}
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
					HOW DOES
					<br />
					IT WORK
				</Typography>

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
