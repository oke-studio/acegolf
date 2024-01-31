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
		offset: ['start end', 'start start'],
	});

	//mapping scroll progress to actual
	const sectionOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
	const sectionScale = useTransform(scrollYProgress, [0.5, 1], [1, 0.9]);

	const { howItWorksData, isLoading } = useGetHowItWorks();

	if (isLoading || !howItWorksData) {
		return <></>;
	}

	const RelatedFAQOne = howItWorksData.step1RelatedFaqCollection.items;
	const RelatedFAQTwo = howItWorksData.step2RelatedFaqCollection.items;
	const RelatedFAQThree = howItWorksData.step3RelatedFaqCollection.items;

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
					<HowItWorks
						infoBoxData={[
							{
								description: howItWorksData.step1Content,
								title: howItWorksData.step1Title,
								relatedFAQs: RelatedFAQOne,
							},
							{
								description: howItWorksData.step2Content,
								title: howItWorksData.step2Title,
								relatedFAQs: RelatedFAQTwo,
							},
							{
								description: howItWorksData.step3Content,
								title: howItWorksData.step3Title,
								relatedFAQs: RelatedFAQThree,
							},
						]}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						backgroundColor: theme.palette.aceGreen,
						flexDirection: 'column',
						gap: '32px',
						padding: '1.5rem',
						justifyContent: 'center',
					}}
				>
					{/* <SimRoomsComponent />
        <GolfGamesComponent /> */}
					<SimRoomsComponentV1 />
					<GolfGamesComponentV1 />
				</Box>

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
