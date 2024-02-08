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

// Animation dependencies
// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';
// import FullHowItWorks from './components/fullHowItWorks.component';

import { Typography } from '@/components/Typography/typography.component';
import { HowItWorks } from '@/components/howItWorks/howItWorks.component';
// import { SimRoomsComponent } from './components/simRooms/simRooms.component';
// import { GolfGamesComponent } from './components/golfGames/golfGames.component';
import { GolfGamesComponentV1 } from './components/golfGames/golfGamesV1.component';
import { SimRoomsComponentV1 } from './components/simRooms/simRoomsV1.component';
// import Image from 'next/image';
import { FAQ } from './components/faq/faq.component';
import { useGetHowItWorks } from './hooks/useGetHowItWorks.hook';
import HiwPageTitle from './components/hiwPageTitle.component';

export default function Home() {
	const theme = useTheme();
	const isMobileOrTablet = useMediaQuery(useTheme().breakpoints.down('md'));

	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
	const isLargeDesktop = useMediaQuery('(min-width:1440px)');

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	//animation functions
	//get and track scroll progress with offset amount
	const howItWorkStepsSectionAsReference = useRef(null);
	const { scrollYProgress } = useScroll({
		target: howItWorkStepsSectionAsReference,
		offset: ['center end', 'start start'],
	});

	//mapping scroll progress to actual
	const sectionOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

	return (
		<Box>
			<Box
				sx={{
					maxHeight: 'fit-content',
				}}
			>
				<Box
					component={motion.div}
					sx={{
						position: 'sticky',
						top: '100px',
					}}
					style={{
						opacity: isMobile ? '1' : sectionOpacity,
						scale: isMobile ? '1' : sectionScale,
					}}
				>
					<HiwPageTitle />
				</Box>

				<Box
					sx={{
						position: 'sticky',
						//top: '0px',
					}}
					component={motion.div}
					ref={howItWorkStepsSectionAsReference}
				>
					<HowItWorks />
				</Box>

				{/* <SimRoomsComponent />
        <GolfGamesComponent /> */}
				<SimRoomsComponentV1 />

				{/* FAQ */}
				<Box sx={{ display: 'flex' }}>
					<FAQ />
				</Box>

				<Box sx={{ display: 'flex' }}></Box>

				<NintendoSwitch />
			</Box>
		</Box>
	);
}
