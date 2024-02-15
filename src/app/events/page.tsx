'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { Typography } from '@/components/Typography/typography.component';
import { SideTextPicture } from '@/components/layout/sideTextPicture.component';
import { Promotions } from '../../components/promotions/promotions.component';
import { Section } from '@/components/layout/section.component';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';
import EventsPageTitle from './components/eventsPageTitle.components';

export default function Events() {
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
	const eventsSectionAsReference = useRef(null);

	// const { scrollYProgress } = useScroll({
	// 	target: eventsSectionAsReference,
	// 	// container: containerRef,
	// 	offset: ['0', '0.35'],
	// });

	const { scrollYProgress } = useScroll({
		target: eventsSectionAsReference,
		...(isMobile
			? { offset: ['start end', 'start start'] }
			: { offset: ['start end', 'start start'] }),
	});

	//mapping scroll progress to actual
	const sectionOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
	const sectionScale = useTransform(scrollYProgress, [0.75, 1], [1, 0.9]);

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
					<EventsPageTitle />
				</Box>

				<Box
					sx={{
						position: 'sticky',
						// top: '30px',
					}}
					component={motion.div}
					ref={eventsSectionAsReference}
				>
					<Section
						SectionName="Events Homepage"
						SectionWidth="normal"
						SectionColor="#171717"
						CornerRadius
						SectionHeight="fit-content"
						sx={{
							height: '100vh',
						}}
					>
						<SideTextPicture
							Title={'Host you Event Here'}
							Paragraph={
								'This is a piece of text about the way to organize your events at ACE. '
							}
							ImageSrc={'/images/kitchen-ace.webp'}
							ImageDescription={'Ace Kitchen'}
							Direction={'left'}
						/>
					</Section>
					<Section
						SectionName="Promotions on Events Homepage"
						SectionWidth="fullViewport"
						SectionColor="#171717"
						CornerRadius
						SectionHeight="fit-content"
					>
						<Promotions />
					</Section>
				</Box>
			</Box>

			<NintendoSwitch />
		</Box>
	);
}
