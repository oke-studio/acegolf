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
	Unoptimized?: boolean;
	// children?: React.ReactNode;
	sx?: SxProps;
}

export const AceImage = ({
	AceImageName,
	AceImageSrc,
	AceImageAspectRatio = '1/1',
	BackCutout = true,
	BackCutoutColor = 'sharpTeal',
	Unoptimized,
	sx,
}: AceImageProps) => {
	const randomizer = (min, max) => {
		return Math.random() * (max - min) + min;
	};

	return (
		<Box
			sx={{
				...(BackCutout && {
					backgroundColor: `${BackCutoutColor}`,
					transform: `rotate(${randomizer(-3, 3)}deg)`,
					aspectRatio: `${AceImageAspectRatio}`,
				}),

				...sx,
			}}
		>
			<Image
				src={AceImageSrc}
				alt={AceImageName}
				width={300}
				height={0}
				unoptimized={Unoptimized}
				style={{
					objectFit: 'cover',
					display: 'block',
					width: '100%',
					height: 'auto',
					aspectRatio: `${AceImageAspectRatio}`,
					scale: `${randomizer(0.96, 0.98)}`,
					transform: `rotate(${randomizer(3, -3)}deg)`,
					borderRadius: '1px',
				}}
			/>
		</Box>
	);
};
