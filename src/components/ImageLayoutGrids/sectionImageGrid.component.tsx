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

const images = [
	{
		src: '/images/Spin-photo4.png',
		aspectRatio: '1.136',
		backCutOut: true,
		backCutOutColor: 'orange',
		imageNameAltText: 'the vibes at ace picture',
		opacity: 1, // default 1 for visible
		scale: 1.3, // scale transform for aceImage
		rotation: -10, // rotation
		zIndex: 1, // zindex for image container. 1= below section content
		gridPosXColumn: '2', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
		gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
		relPosX: '-80px', //relative position to grid position
		relPosY: '38px',

		mobile: {
			opacity: 0,
			scale: 1.2,
			rotation: -10,
			zIndex: 3,
			posXGridColumn: '2',
			posyGridRow: '2',
		},
	},
	{
		src: '/images/Spin-photo2.png',
		aspectRatio: '0.710',
		backCutOut: true,
		backCutOutColor: 'sharpTeal',
		imageNameAltText: 'the vibes at the bar',
		opacity: 1,
		scale: 1, // scale transform for aceImage
		rotation: 1, // rotation
		zIndex: 1, // zindex for image container
		gridPosXColumn: '3', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
		gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
		relPosX: '0px', //relative position to grid position
		relPosY: '0px',

		mobile: {
			opacity: 0,
			scale: 1.2,
			rotation: -10,
			zIndex: 2,
			posXGridColumn: '2',
			posyGridRow: '2',
		},
	},
];

export const SectionImageGrid = ({
	SectionImageGridWidth,
	SectionImageGridHeight = '100%',
	ScrollAnimations = true,
	sx,
}: SectionImageGridProps) => {
	const theme = useTheme();
	const SECTIONImageGrid = LayoutWidthOptions[SectionImageGridWidth];

	//Animation

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	// const SectionAsReference = useRef(null);
	const { scrollYProgress } = useScroll();
	const rotateVal = useTransform(scrollYProgress, [0, 0.1], [1, 10]); //mapping screen scroll of 10% to 1-2 factor to use in values
	const scaleVal = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);
	const yVal = useTransform(scrollYProgress, [0, 0.1], [1, 60]);
	const smValY = useTransform(scrollYProgress, [0, 0.1], [0, 30]);
	const mdValY = useTransform(scrollYProgress, [0, 0.1], [0, 70]);
	const lgValY = useTransform(scrollYProgress, [0, 0.1], [0, 120]);
	const xlgValY = useTransform(scrollYProgress, [0, 0.1], [0, 160]);
	const paralaxYvalue = [
		{
			val: smValY,
		},
		{
			val: mdValY,
		},
		{
			val: lgValY,
		},
		{
			val: xlgValY,
		},
	];

	const randomizer = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	};

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
			{images.map(
				(
					{
						src,
						aspectRatio,
						backCutOut,
						backCutOutColor,
						imageNameAltText,
						opacity,
						scale,
						rotation,
						zIndex,
						gridPosXColumn,
						gridPosYRow,
						relPosX,
						relPosY,
					},
					i,
				) => {
					return (
						<Box
							key={`i_${i}`}
							component={motion.div}
							style={{
								// scale: scaleVal,
								//rotate: rotateVal,
								y: paralaxYvalue[randomizer(0, 3)].val,
							}}
							sx={{
								gridColumn: `${gridPosXColumn} / span 1`,
								gridRow: `${gridPosYRow}  / span 1`,
							}}
						>
							<AceImage
								AceImageName={imageNameAltText}
								AceImageSrc={src}
								AceImageAspectRatio={aspectRatio}
								BackCutout={backCutOut}
								BackCutoutColor={theme.palette.sharpTeal}
								sx={{
									opacity: `${opacity} `,
									scale: `${scale} `,
									transform: `rotate(${rotation}deg) translate(${relPosX}, ${relPosY})`,
									zIndex: `${zIndex} `,
								}}
							></AceImage>
						</Box>
					);
				},
			)}
			{/* <Box
				component={motion.div}
				style={{
					//scale: scaleVal,
					rotate: rotateVal,
					y: yVal,
				}}
			>
				<AceImage
					AceImageName={images[0].imageNameAltText}
					AceImageSrc={images[0].src}
					AceImageAspectRatio={images[0].aspectRatio}
					BackCutout={images[0].backCutOut}
					BackCutoutColor={theme.palette.sharpTeal}
					sx={{
						gridColumn: `${images[0].gridPosXColumn} / span 1`,
						gridRow: `${images[0].gridPosYRow}  / span 1`,
						opacity: `${images[0].opacity} `,
						scale: `${images[0].scale} `,
						transform: `rotate(${images[0].rotation}deg) translate(${images[0].relPosX}, ${images[0].relPosY})`,
						zIndex: `${images[0].zIndex} `,
					}}
				></AceImage>
			</Box> */}

			{/* <AceImage
				AceImageName="ace locaiton photos"
				AceImageSrc="/images/Spin-photo2.png"
				AceImageAspectRatio="0.710"
				BackCutout={true}
				BackCutoutColor={theme.palette.sharpTeal}
				sx={{
					gridColumn: '3 / span 1',
					gridRow: '2 / span 1',
				}}
			></AceImage> */}

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
