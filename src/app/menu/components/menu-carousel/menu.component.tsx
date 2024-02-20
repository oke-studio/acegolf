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
				minHeight: '60vh',
				display: 'flex',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '32px',
					width: '100%',
					position: 'relative',
					height: '100%',
					minHeight: 'inherit',
					// top: isMobile ? '-60px' : '-80px',
				}}
			>
				<MenuTabs />
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
			</Box>
		</Section>
	);
};
