'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Box, Button, SxProps, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import Image from 'next/image';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

type SideTextPictureOptionsTypes = 'left' | 'right';
const SideTextPictureOptions = {
	left: {
		display: 'flex',
		gap: '44px',
		flexDirection: 'row',
	},
	right: {
		display: 'flex',
		gap: '44px',
		flexDirection: 'row-reverse',
	},
};

interface SideTextPictureProps {
	Title: string;
	Paragraph: string;
	ImageSrc: string;
	ImageDescription: string;
	Direction: SideTextPictureOptionsTypes;
	sx?: SxProps;
}

export const SideTextPicture = ({
	Title,
	Paragraph,
	ImageSrc,
	ImageDescription,
	Direction,
	sx,
}: SideTextPictureProps) => {
	const LAYOUT = SideTextPictureOptions[Direction];
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<Box
			sx={{
				// ...sx,
				...LAYOUT,

				width: '100%',
				marginTop: '50px',
				marginBottom: '50px',
				alignItems: 'center',

				...(isMobile && {
					flexDirection: 'column',
				}),
			}}
		>
			<Box
				sx={{
					width: '40%',
					display: 'flex',
					flexDirection: 'column',
					gap: '18px',
					...(isMobile && {
						width: '100%',
					}),
				}}
			>
				<Typography variant="headingTwo" weight="600" fontStyle="normal">
					{Title}
				</Typography>
				<Typography variant="base">{Paragraph}</Typography>
			</Box>

			<Box
				sx={{
					width: '60%',
					...(isMobile && {
						width: '100%',
					}),
				}}
			>
				<Image
					src={ImageSrc}
					alt={ImageDescription}
					width={300}
					height={0}
					style={{
						objectFit: 'cover',
						display: 'block',
						width: '100%',
						height: 'auto',
						aspectRatio: '1.54',
						borderRadius: '10px',
					}}
				/>
			</Box>
		</Box>
	);
};
