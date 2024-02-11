'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useGetEvents } from './hooks/useGetEvents.hook';
import { Box, useTheme, useMediaQuery } from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { Typography } from '@/components/Typography/typography.component';
import { SideTextPicture } from '@/components/layout/sideTextPicture.component';
import { Promotions } from '../../components/promotions/promotions.component';
import { Section } from '@/components/layout/section.component';
import EventPageTitle from './components/EventPageTitle.component';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';

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
	const { scrollYProgress } = useScroll({
		target: eventsSectionAsReference,
		offset: ['center end', 'start start'],
	});

	//mapping scroll progress to actual
	const sectionOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

	return (
		<Box
			sx={{
				backgroundColor: theme => theme.palette.purple,
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
						opacity: isMobile ? '1' : sectionOpacity,
						scale: isMobile ? '1' : sectionScale,
					}}
				>
					<EventPageTitle />
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
						SectionColor=""
						CornerRadius
						SectionHeight="fit-content"
					>
						<SideTextPicture
							Title={'Host you Event Here'}
							Paragraph={
								'This is a piece of text about the way to organize your events at ACE. '
							}
							ImageSrc={'/images/kitchen-ace.jpg'}
							ImageDescription={'Ace Kitchen'}
							Direction={'left'}
						/>

						<Promotions />
					</Section>
				</Box>
			</Box>

			<NintendoSwitch />
		</Box>
	);
}
