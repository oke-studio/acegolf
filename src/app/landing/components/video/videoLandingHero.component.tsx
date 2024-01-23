'use client';
import React, { useRef } from 'react';

import { Box, useMediaQuery } from '@mui/material';

import { Section } from '@/components/layout/section.component';
import { LandingVideo } from '../../components/video/video.component';
import { RoundedVideoPath } from '@/components/animated-paths/roundedVideoPath.component';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';

export const VideoLandingHero = () => {
	const isMobile = useMediaQuery('(max-width:600px)');

	//animation functions
	//get and track scroll progress with offset amount
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	});

	//mapping scroll progress to actual
	const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.175]);
	//const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<Section
			SectionName="Landing Hero"
			SectionWidth="normal"
			SectionColor=""
			CornerRadius={false}
			ScrollAnimations={false}
			// sx={{ opacity: '0.5' }}
		>
			<Box
				component={motion.div}
				ref={container}
				sx={{
					/* centering video and path together  */
					display: 'grid',
					placeItems: 'center',
					// gridTemplateAreas: 'videoWithPathArea',
					position: 'relative',
					// top: isMobile ? '-100px' : '-100px',
					//scale: videoScale,
				}}
				style={{ scale: videoScale }}
			>
				<LandingVideo
					width={'100%'}
					height={'100%'}
					sx={{
						gridArea: 'videoWithPathArea',
						padding: '4% 2%',
					}}
				></LandingVideo>

				<RoundedVideoPath
					sx={{
						gridArea: 'videoWithPathArea',
						zIndex: '3',
					}}
					width="100%"
					height="100%"
					viewBox={isMobile ? '0 0 400 600' : '0 0 1272.7 718.8'}
					pathProps={
						isMobile
							? {
									d: 'm380.36,600.38H20.39c-11.05,0-20.02-11.2-20.02-25V25.38C.38,11.57,9.34.38,20.39.38h359.97c11.05,0,20.02,11.2,20.02,25v550c0,13.8-8.97,25-20.02,25Z',
								}
							: {
									d: 'M1219.1,718.8H53.6C24,718.8,0,694.8,0,665.2V53.6C0,24,24,0,53.6,0h1165.6c29.6,0,53.6,24,53.6,53.6v611.7 C1272.7,694.8,1248.7,718.8,1219.1,718.8z',
								}
					}
					text="WE BRING YOU GOLF, ALL-YEAR ROUND WITH STATE OF THE ART GOLF BAYS, THE BEST DRINKS IN THE CITY AND A CURATED SELECTION OF BITES TO FUEL YOUR SWING."
					textCount={1}
					strokeColor="#EB8B32"
				></RoundedVideoPath>
			</Box>
		</Section>
	);
};
