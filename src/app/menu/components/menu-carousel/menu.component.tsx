'use client';
import * as React from 'react';
import { Box, useTheme, Button, useMediaQuery } from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { Typography } from '@/components/Typography/typography.component';

import { useRouter } from 'next/navigation';
import { MenuSection } from './components/menuSection/menuSection.component';
import { useGetMenu } from '../../hooks/useGetMenu.hook';
import { MenuSectionType } from './menuItems';
import { Section } from '@/components/layout/section.component';

const StyledMenuWrapper = styled(Box)(() => ({
	borderRadius: '25px',
	border: 'solid black 6px',
	backgroundColor: 'white',
	color: 'black',
}));

const StyledTab = styled(Tab)({
	opacity: 1,
});

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
	const { children, value, index, ...other } = props;

	// const isMobileView = value !== index

	return (
		<div
			role="tabpanel"
			hidden={!isMobile && value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{true && <Box sx={{ p: isMobile ? 0 : 3 }}>{children}</Box>}
		</div>
	);
}

export const Menu = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isLargeDesktop = useMediaQuery('(min-width:1440px)');
	const router = useRouter();

	return (
		<Section
			SectionName="Menu Content"
			SectionWidth="fullViewport"
			SectionHeight="fit-content"
			SectionColor=""
			CornerRadius={false}
			ScrollAnimations={false}
			sx={{
				padding: '0% 5% 5% 5%',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '32px',
					margin: '0px auto',
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
