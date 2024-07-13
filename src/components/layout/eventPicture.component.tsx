'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Box, Button, SxProps, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import Image from 'next/image';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

type EventPictureOptionsTypes = 'left' | 'right';
const EventPictureOptions = {
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

interface EventPictureProps {
	Title: string;
	ImageSrc: string;
	ImageDescription: string;
	// EventStartDate?: Date;
	// EventEndDate?: Date;
	EventStartDate?: string;
	EventEndDate?: string;
	EventDescription: string;
	CTAText?: string;
	CTALink?: string;
	Direction: EventPictureOptionsTypes;
	sx?: SxProps;
}

export const EventPicture = ({
	Title,
	ImageSrc,
	ImageDescription,
	EventStartDate,
	EventEndDate,
	EventDescription,
	CTAText,
	CTALink,
	Direction,
	sx,
}: EventPictureProps) => {
	const LAYOUT = EventPictureOptions[Direction];
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<Box
			sx={{
				// ...sx,
				...LAYOUT,

				width: '100%',
				// marginTop: '50px',
				// marginBottom: '50px',
				alignItems: 'center',

				...(isMobile && {
					flexDirection: 'column',
				}),
			}}
		>
			<Box
				sx={{
					width: '50%',
					...(isMobile && {
						width: '100%',
					}),
				}}
			>
				<Image
					src={ImageSrc ?? '/images/ace-banner-chromatic-black.webp'}
					alt={ImageDescription}
					width={200}
					height={300}
					style={{
						objectFit: 'cover',
						display: 'block',
						width: '100%',
						height: 'auto',
						aspectRatio: '0.90',
						borderRadius: '25px',
					}}
				/>
			</Box>
			<Box
				sx={{
					width: '50%',
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
				<Typography variant="base">
					{EventStartDate} - {EventEndDate}
				</Typography>
				<Typography variant="base">{EventDescription}</Typography>
			</Box>
		</Box>
	);
};
