'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { LandingHero } from './components/landingHero/landingHero.component';
import { VideoLandingHero } from './components/video/videoLandingHero.component';

// import { LandingPromotionMailingSection } from './components/promotionMailing/landingPromotionMailingSection.component';
import { LandingInfoSection } from './components/landingInfo/landingInfoSection.component';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';

// import { WhatsTheVibe } from './components/whatsTheVibe/whatsTheVibe.component';
import { LandingHowItWorks } from './components/howItWorks/landingHowItWorks.component';

import dynamic from 'next/dynamic';
import { useGetAce } from './hooks/useGetAce.hook';

const DynamicWhatsTheVibe = dynamic(
	() => import('./components/whatsTheVibe/whatsTheVibe.component'),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	},
);

const DynamicLandingPromotions = dynamic(
	() =>
		import(
			'./components/promotionMailing/landingPromotionMailingSection.component'
		),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	},
);

export default function Landing() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	useGetAce();

	//animation functions
	////Hero Landing tracking////
	//get and track scroll progress with offset amount
	const videoSectionAsReference = useRef(null);
	const { scrollYProgress } = useScroll({
		target: videoSectionAsReference,
		offset: ['start end', 'start start'],
	});

	//mapping scroll progress to actual
	const heroOpacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);
	const heroScale = useTransform(scrollYProgress, [0.5, 0.9], [1, 0.95]);
	
	//const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<Box
			sx={{
				backgroundColor: '#171717',
				position: 'relative',
			}}
		>
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
						opacity: heroOpacity,
						scale: heroScale
					 }}
				>
					<LandingHero />
				</Box>
				<Box
					sx={{
						position: 'sticky',
						top: '0px',
					}}
					component={motion.div}
					ref={videoSectionAsReference}
				>
					<VideoLandingHero />
				</Box>
			</Box>

			<LandingHowItWorks />

			<LandingInfoSection />

			{/* <WhatsTheVibe /> */}
			<DynamicWhatsTheVibe />

			{/* <LandingPromotionMailingSection /> */}
			<DynamicLandingPromotions />

			<NintendoSwitch />

			{/* Full Page Photos */}
			{/* <Box
				sx={{
					width: '100%',
					height: '100%',
					// background: 'green',
					position: 'absolute',
					top: '0px',
					left: '0px',
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr 1fr',
					opacity: '.5',
				}}
			>
				<Box
					sx={{
						background: 'green',
					}}
				></Box>

				<Box
					sx={{
						background: 'orange',
					}}
				></Box>

				<Box
					sx={{
						background: 'blue',
					}}
				></Box>

				<Box
					sx={{
						background: 'cyan',
					}}
				></Box>
			</Box> */}
		</Box>
	);
}
