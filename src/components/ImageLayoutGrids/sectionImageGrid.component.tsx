'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
	Box,
	styled,
	Button,
	ButtonProps,
	SxProps,
	Theme,
	useTheme,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { AceImage } from '@/components/aceImage/aceImage.component';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

type LayoutWidthOptionsTypes = 'full' | 'leftHalf' | 'rightHalf';
const LayoutWidthOptions = {
	full: {
		width: '100%',
		left: '0px',
		gridTemplateColumns: 'repeat(8, 1fr)', // if mobile repeat only 4
	},
	leftHalf: {
		width: '50%',
		left: '0px',
		gridTemplateColumns: 'repeat(4, 1fr)',
	},
	rightHalf: {
		width: '50%',
		right: '0px',
		gridTemplateColumns: 'repeat(4, 1fr)',
		//margin: isLargeDesktop ? '8px 3% 8px' : '15px 3% 8px',
	},
};

interface SectionImageGridProps {
	SectionImageGridWidth: LayoutWidthOptionsTypes;
	SectionImageGridHeight?: string;
	//ImageData: Array<AceImage>;
	ScrollAnimations?: boolean;

	sx?: SxProps;
}

export const SectionImageGrid = ({
	SectionImageGridWidth,
	SectionImageGridHeight = '100%',
	ScrollAnimations = true,
	sx,
}: SectionImageGridProps) => {
	const theme = useTheme();
	const SECTIONImageGrid = LayoutWidthOptions[SectionImageGridWidth];

	//Animation

	// useEffect(() => {
	// 	const lenis = new Lenis();
	// 	function raf(time) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}
	// 	requestAnimationFrame(raf);
	// }, []);

	// const SectionAsReference = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: SectionAsReference,
	// 	offset: ['start end', 'start start'],
	// });
	// const sectionScale = useTransform(scrollYProgress, [0, 0.75], [0.94, 1]);
	// const animatedBorderRadius = useTransform(
	// 	scrollYProgress,
	// 	[0, 0.75],
	// 	[80, 25],
	// );

	//Responsive Code
	// const isMobile = useMediaQuery('(max-width:640px)');
	// const isSmallDesktop = useMediaQuery('(max-width:950px)');
	// const isLargeDesktop = useMediaQuery('(min-width:1440px)');
	// const isExtraWideDesktop = useMediaQuery('(min-width:1750px)');
	// const isUltraWideDesktop = useMediaQuery('(min-width:2000px)');

	return (
		<Box
			sx={{
				position: 'absolute',
				top: '0px',
				display: 'grid',
				gridTemplateRows: '1fr 1fr',
				height: `${SectionImageGridHeight}`,

				...SECTIONImageGrid,
				...sx,
			}}
		>
			<AceImage
				AceImageName="ace locaiton photos"
				AceImageSrc="/images/Spin-photo4.png"
				AceImageAspectRatio="1.137"
				BackCutout={true}
				BackCutoutColor={theme.palette.sharpTeal}
				sx={{
					gridColumn: '2 / span 1',
					gridRow: '2 / span 1',
				}}
			></AceImage>

			<AceImage
				AceImageName="ace locaiton photos"
				AceImageSrc="/images/Spin-photo2.png"
				AceImageAspectRatio="0.710"
				BackCutout={true}
				BackCutoutColor={theme.palette.sharpTeal}
				sx={{
					gridColumn: '3 / span 1',
					gridRow: '2 / span 1',
				}}
			></AceImage>

			<AceImage
				AceImageName="ace locaiton photos"
				AceImageSrc="/images/Spin-photo3.png"
				AceImageAspectRatio="1/1"
				BackCutout={true}
				BackCutoutColor={theme.palette.sharpTeal}
				sx={{
					gridColumn: '4 / span 1',
					gridRow: '2 / span 1',
				}}
			></AceImage>

			<AceImage
				AceImageName="ace locaiton photos"
				AceImageSrc="/images/Spin-photo1.png"
				AceImageAspectRatio="0.637"
				BackCutout={true}
				BackCutoutColor={theme.palette.sharpTeal}
				sx={{
					gridColumn: '4 / span 1',
					gridRow: '1 / span 1',
				}}
			></AceImage>
		</Box>
	);
};
