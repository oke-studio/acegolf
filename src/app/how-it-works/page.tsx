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
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';

import { Typography } from '@/components/Typography/typography.component';
import { HowItWorks } from '@/components/howItWorks/howItWorks.component';

import { GolfGamesComponentV1 } from './components/golfGames/golfGamesV1.component';
import { SimRoomsComponentV1 } from './components/simRooms/simRoomsV1.component';

import { FAQ } from './components/faq/faq.component';
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
		...(isMobile
			? { offset: ['start end', 'start start'] }
			: { offset: ['center end', 'start start'] }),
	});

	//mapping scroll progress to actual
	const sectionOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
	const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

	// testing scroll
	// scrollYProgress.onChange(latest => {
	// 	console.log(latest);
	// });
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
						opacity: sectionOpacity,
						scale: sectionScale,
					}}
				>
					<HiwPageTitle />
				</Box>

				<Box
					sx={{
						position: 'sticky',
						// top: '30px',
					}}
					component={motion.div}
					ref={howItWorkStepsSectionAsReference}
				>
					<HowItWorks />
				</Box>
			</Box>

			{/* <SimRoomsComponent />
        <GolfGamesComponent /> */}
			<SimRoomsComponentV1 />

			{/* FAQ */}
			<Box sx={{ display: 'flex' }}>
				<FAQ />
			</Box>

			{/* <Box sx={{ display: 'flex' }}></Box> */}

			<NintendoSwitch />
		</Box>
	);
}
