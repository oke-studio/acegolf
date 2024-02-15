'use client';
import * as React from 'react';
import { Box, useTheme, Button, useMediaQuery } from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { useRouter } from 'next/navigation';

import { Section } from '@/components/layout/section.component';
import { MenuTabs } from './components/menuTabs/menuTabs.component';

export const Menu = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isLargeDesktop = useMediaQuery('(min-width:1440px)');
	const router = useRouter();

	return (
		<Section
			SectionName="Menu Content"
			SectionWidth="normal"
			SectionHeight="fit-content"
			SectionColor=""
			CornerRadius={true}
			ScrollAnimations={true}
			EarlyScrollAnimation={true}
			sx={{
				padding: '2% 5%',

				border: 'solid black 6px',
				backgroundColor: 'white',
				color: 'black',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '32px',
					margin: '0px 0px 30px 0px',
					width: '100%',
					position: 'relative',
					// top: isMobile ? '-60px' : '-80px',
				}}
			>
				{/* TODO: Move to separate component */}
				<MenuTabs />
				<Button
					sx={{ alignSelf: 'center' }}
					disableRipple
					disableElevation
					disableFocusRipple
					disableTouchRipple
					variant="secondary"
					onClick={() => router.push('/book-now')}
				>
					{/* <MotionSpanAnimated label="Download Full Menu PDF" /> */}
					Reserve a bay &rarr;
				</Button>
			</Box>
		</Section>
	);
};
