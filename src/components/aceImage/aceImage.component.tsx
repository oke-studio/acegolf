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
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';

interface AceImageProps {
	AceImageName: string;
	AceImageSrc: string;
	AceImageAspectRatio: string;
	BackCutout: boolean;
	BackCutoutColor: string;
	// children?: React.ReactNode;
	sx?: SxProps;
}

export const AceImage = ({
	AceImageName,
	AceImageSrc,
	AceImageAspectRatio = '1/1',
	BackCutout = true,
	BackCutoutColor = 'sharpTeal',
	sx,
}: AceImageProps) => {
	// const SECTION = SectionWidthOptions[SectionWidth];
	// //const CORNER = CornerRadiusOptions[CornerRadius];
	// const staticRadius = '25px';

	const isMobile = useMediaQuery('(max-width:640px)');
	const isSmallDesktop = useMediaQuery('(max-width:950px)');
	const isLargeDesktop = useMediaQuery('(min-width:1440px)');
	const isExtraWideDesktop = useMediaQuery('(min-width:1750px)');
	const isUltraWideDesktop = useMediaQuery('(min-width:2000px)');

	const randomizer = (min, max) => {
		return Math.random() * (max - min) + min;
	};

	return (
		<Box
			sx={{
				...sx,
				display: 'grid',
				zIndex: '0',
				placeItems: 'center',
				gridTemplateAreas: 'videoWithPathArea',

				...(BackCutout && {
					backgroundColor: `${BackCutoutColor}`,
					transform: `rotate(${randomizer(-3, 3)}deg)`,
					aspectRatio: `${AceImageAspectRatio}`,
				}),
			}}
		>
			<Image
				src={AceImageSrc}
				alt={AceImageName}
				width={300}
				height={0}
				style={{
					objectFit: 'cover',
					display: 'block',
					width: '100%',
					height: 'auto',
					gridArea: 'videoWithPathArea',
					zIndex: '1',
					aspectRatio: `${AceImageAspectRatio}`,
					scale: `${randomizer(0.96, 0.98)}`,
					transform: `rotate(${randomizer(3, -3)}deg)`,
				}}
			/>

			{/* <Box
					sx={{
						width: `${AceImageWidth}`,
						scale: `${randomizer(1.02, 1.08)}`,
						transform: `rotate(${randomizer(-3, 3)}deg)`,
						backgroundColor: `${BackCutoutColor}`,
						aspectRatio: `${AceImageAspectRatio}`,
						gridArea: 'videoWithPathArea',
					}}
				></Box> */}
		</Box>
	);
};
