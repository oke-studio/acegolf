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

interface EventsPageTitleProps {
	title?: string;
}

export default function EventsPageTitle(EventsPageTitleProps) {
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<PageTitleSection
			SectionName="Event Page Title"
			SectionWidth="fullViewport"
			SectionHeight="fit-content"
			SectionColor=""
			CornerRadius
		>
			<Box
				sx={{
					// backgroundColor: theme.palette.aceTeal,
					padding: '2rem',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: isMobile ? 'center' : '',
						gap: '12px',
						position: 'relative',
						zIndex: '2',
						...(isMobile && {
							flexDirection: 'column',
							flexWrap: 'wrap',
						}),
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
						{EventsPageTitleProps.title ? EventsPageTitleProps.title : 'EVENTS'}
					</Typography>

					<Typography
						variant="large"
						alignSelf="center"
						sx={{
							width: isMobile ? '100%' : '50%',
						}}
					>
						{/* This copy describes the overall experience of what ace golf
						encourages users to learn more below and see the FAQs section on
						this page */}
					</Typography>
				</Box>
			</Box>
		</PageTitleSection>
	);
}
