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

interface AceImageProps {
	AceImageName?: string;
	AceImageSrc: string;
	AceImageAspectRatio: string;
	AceImageWidth: string;
	BackCutout: boolean;
	BackCutoutColor: string;
	// children?: React.ReactNode;
	sx?: SxProps;
}

export const AceImage = ({
	AceImageName,
	AceImageSrc,
	AceImageAspectRatio = '1/1',
	AceImageWidth = '100%',
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
	}; // need @Efe to make this random work for every instance and not just once for all images

	const randomRotate = randomizer(-3, 3);
	const randomScale = randomizer(1.03, 1.9);

	return (
		<Box
			sx={{
				...sx,
				display: 'grid',
				zIndex: '0',
				placeItems: 'center',
				gridTemplateAreas: 'videoWithPathArea',
			}}
		>
			<img
				style={{
					display: 'block',
					width: `${AceImageWidth}`,
					gridArea: 'videoWithPathArea',
					zIndex: '1',
					aspectRatio: `${AceImageAspectRatio}`,
				}}
				src={AceImageSrc}
			/>

			{BackCutout && (
				<Box
					sx={{
						width: `${AceImageWidth}`,
						scale: randomScale,
						transform: `rotate(${randomRotate}deg)`,
						backgroundColor: `${BackCutoutColor}`,
						aspectRatio: `${AceImageAspectRatio}`,
						gridArea: 'videoWithPathArea',
					}}
				></Box>
			)}
		</Box>
	);
};
