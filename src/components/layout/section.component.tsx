'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Box, SxProps, useMediaQuery } from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

type SectionWidthOptionsTypes = 'fullViewport' | 'normal' | 'small';
const SectionWidthOptions = {
	fullViewport: {
		//width: '100%',
		margin: '8px 0% 8px',
	},
	normal: {
		//width: '100%',
		//margin: isLargeDesktop ? '8px 3% 8px' : '15px 3% 8px',
		margin: '8px 3% 8px',
	},
	small: {
		//width: '100%',
		//margin: isLargeDesktop ? '8px 3% 8px' : '15px 3% 8px',
		margin: '8px 30% 8px',
	},
};

interface SectionProps {
	SectionName: string;
	SectionWidth: SectionWidthOptionsTypes;
	SectionHeight?: string;
	SectionColor: string;
	CornerRadius: boolean;
	ScrollAnimations?: boolean;
	children?: React.ReactNode;
	sx?: SxProps;
}

export const Section = ({
	SectionName,
	SectionWidth,
	SectionHeight = 'fit-content',
	SectionColor,
	CornerRadius = true,
	ScrollAnimations = true,
	sx,
	children,
}: SectionProps) => {
	const SECTION = SectionWidthOptions[SectionWidth];
	//const CORNER = CornerRadiusOptions[CornerRadius];
	const staticRadius = '25px';

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	const SectionAsReference = useRef(null);
	const { scrollYProgress } = useScroll({
		target: SectionAsReference,
		offset: ['start end', 'start start'],
	});
	const sectionScale = useTransform(scrollYProgress, [0, 0.75], [0.94, 1]);
	const animatedBorderRadius = useTransform(
		scrollYProgress,
		[0, 0.75],
		[80, 25],
	);

	const isMobile = useMediaQuery('(max-width:640px)');
	const isSmallDesktop = useMediaQuery('(max-width:950px)');
	const isLargeDesktop = useMediaQuery('(min-width:1440px)');
	const isExtraWideDesktop = useMediaQuery('(min-width:1750px)');
	const isUltraWideDesktop = useMediaQuery('(min-width:2000px)');

	return (
		<Box
			sx={{
				...sx,
				...SECTION,

				backgroundColor: `${SectionColor}`,
				padding: '5% 5%',
				height: `${SectionHeight}`,

				...(isLargeDesktop && { margin: '8px 5% 8px' }),
				...(isExtraWideDesktop && { margin: '8px 10% 8px' }),
				...(isUltraWideDesktop && { margin: '8px 20% 8px' }),

				//work on container query after
				//containerType: "inline-size",
			}}
			// component="section"
			component={motion.div}
			ref={SectionAsReference}
			style={{
				// ...CORNER,
				...(CornerRadius
					? { borderRadius: animatedBorderRadius }
					: { borderRadius: staticRadius }),
				...(ScrollAnimations && { scale: sectionScale }),
			}}
		>
			{children}
		</Box>
	);
};

//   @container (min-width:900){

//     .section{

//     }
//   }
