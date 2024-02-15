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
import { PageTitleSection } from '@/components/layout/pageTitleSection.component';

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
		// container: containerRef,
		offset: ['0', '0.35'],
	});

	//mapping scroll progress to actual
	const sectionOpacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [1, 0]),
	);
	const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<Box
			sx={{
				backgroundColor: '#9A92C5',
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
						// opacity: isMobile ? '1' : sectionOpacity,
						// scale: isMobile ? '1' : sectionScale,
						opacity: sectionOpacity,
						// scale: sectionScale,
					}}
				>
					<PageTitleSection
						SectionName="Event Page Title"
						SectionWidth="fullViewport"
						SectionHeight="fit-content"
						SectionColor=""
						CornerRadius={false}
						ScrollAnimations={false}
						SpecialSVGBacking={true}
						SpecialSVGColour={theme.palette.aceTeal}
					>
						<Box
							sx={{
								color: 'white',
								backgroundColor: theme.palette.aceTeal,
								padding: '2rem',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									justifyContent: isMobile ? 'center' : '',
									gap: '12px',
									position: 'relative',
									zIndex: '2',
									...(isMobile && {
										flexDirection: 'column',
										flexWrap: 'wrap',
									}),
									color: 'white',
								}}
							>
								<Typography
									variant="poster"
									weight="900"
									fontStyle="italic"
									sx={{
										textWrap: 'wrap',
										textAlign: 'center',
										flex: 1,

										width: isMobile ? '100%' : '50%',
									}}
								>
									EVENTS
								</Typography>

								<Typography
									variant="large"
									alignSelf="center"
									sx={{
										width: isMobile ? '100%' : '50%',
									}}
								>
									This copy describes the overall experience of what ace golf
									encourages users to learn more below and see the FAQs section
									on this page
								</Typography>
							</Box>
						</Box>
					</PageTitleSection>
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
							ImageSrc={'/images/kitchen-ace.webp'}
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
