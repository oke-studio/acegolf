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
import { Menu } from './components/menu-carousel/menu.component';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { Typography } from '@/components/Typography/typography.component';
import { SideTextPicture } from '@/components/layout/sideTextPicture.component';
import { SpinningMenuHeading } from './components/menu-carousel/components/spinningMenuHeading/spinningMenuHeading.component';
import { Section } from '@/components/layout/section.component';
import { PageTitleSection } from '@/components/layout/pageTitleSection.componenet';

export default function Home() {
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
	const menuSectionAsReference = useRef(null);
	const { scrollYProgress } = useScroll({
		target: menuSectionAsReference,
		offset: ['0.85 end', 'start start'],
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
						opacity: isMobile ? '1' : 'sectionOpacity',
						scale: isMobile ? '1' : 'sectionScale',
					}}
				>
					<PageTitleSection
						SectionName="Kitchen and Bar information"
						SectionWidth="fullViewport"
						SectionHeight="fit-content"
						SectionColor=""
						CornerRadius={false}
						ScrollAnimations={false}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: isMobile ? 'center' : '',
								gap: '12px',
								position: 'relative',
								zIndex: '2',
								...(isMobile && { flexDirection: 'column', flexWrap: 'wrap' }),
							}}
						>
							<SpinningMenuHeading />
							<Typography
								variant="large"
								alignSelf="center"
								sx={{
									width: isMobile ? '100%' : '50%',
								}}
							>
								Swing into flavour with our culinary delights. This is a piece
								of text about the food inspiration. it will tell the people what
								to expect with menu.
							</Typography>
						</Box>
					</PageTitleSection>
				</Box>

				<Box
					sx={{
						position: 'sticky',
						top: '0px',
					}}
					component={motion.div}
					ref={menuSectionAsReference}
				>
					<Menu />
				</Box>
			</Box>
			<Section
				SectionName="Kitchen and Bar information"
				SectionWidth="fullViewport"
				SectionHeight="fit-content"
				SectionColor=""
				CornerRadius={false}
				ScrollAnimations={false}
			>
				<SideTextPicture
					Title={'The Kitchen'}
					Paragraph={
						'This is a piece of text about the kitchen, it will tell the people how the kitchen. Introduce the chefs and their approach. It will aso tell information on when the kitchen is open for everyday for golfers and for just dinners. it will also show that the kitchen is on uber eats'
					}
					ImageSrc={'/images/kitchen-ace.jpg'}
					ImageDescription={'Ace Kitchen'}
					Direction={'left'}
				/>
				<SideTextPicture
					Title={'The Bar'}
					Paragraph={
						'This is a piece of text about the kitchen, it will tell the people how the kitchen. Introduce the chefs and their approach. It will aso tell information on when the kitchen is open for everyday for golfers and for just dinners. it will also show that the kitchen is on uber eats'
					}
					ImageSrc={'/images/bar-ace.jpg'}
					ImageDescription={'Ace Kitchen'}
					Direction={'right'}
				/>
			</Section>
		</Box>
	);
}
