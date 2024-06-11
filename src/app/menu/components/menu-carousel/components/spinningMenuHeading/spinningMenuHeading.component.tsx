'use client';

import * as React from 'react';
import { Typography } from '@/components/Typography/typography.component';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export const SpinningMenuHeading = () => {
	const SpinningBox = ({
		front,
		bottom,
		back,
		top,
	}: {
		front: string;
		bottom: string;
		back: string;
		top: string;
	}) => {
		return (
			<Box
				component={motion.span}
				sx={{
					position: 'relative',
					width: '30rem',
					height: '6rem',
					fontWeight: 900,
					textTransform: 'uppercase',
					zIndex: '-1',
				}}
				style={{
					transformStyle: 'preserve-3d',
					transformOrigin: 'center center -40px',
				}}
				initial={{ rotateX: '0deg' }}
				animate={{
					rotateX: [
						'0deg',
						'90deg',
						'90deg',
						'180deg',
						'180deg',
						'270deg',
						'270deg',
						'360deg',
					],
				}}
				transition={{
					repeat: Infinity,
					duration: 10,
					ease: 'backInOut',
					times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
				}}
			>
				{/* FRONT */}
				<Typography
					variant="largeH1"
					as="span"
					fontStyle="italic"
					sx={{
						position: 'absolute',
						display: 'flex',
						height: '100%',
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						borderStyle: 'solid',
						borderWidth: '2px',
						borderColor: theme => theme.palette.orange,
						color: '#ffffff',
						// borderRadius: '12px',
						backgroundColor: theme => {
							return theme.palette.orange;
						},
					}}
					weight="900"
				>
					{front}
				</Typography>

				{/* BOTTOM */}
				<Typography
					variant="largeH1"
					as="span"
					fontStyle="italic"
					style={{ transform: 'translateY(5rem) rotateX(-90deg)' }}
					sx={{
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderStyle: 'solid',
						borderWidth: '2px',
						borderColor: theme => theme.palette.orange,
						width: '100%',
						height: '100%',
						color: '#ffffff',
						// borderRadius: '12px',
						backgroundColor: theme => theme.palette.orange,
						transformOrigin: 'top',
					}}
					weight="900"
				>
					{bottom}
				</Typography>

				{/* TOP */}
				<Typography
					variant="largeH1"
					as="span"
					fontStyle="italic"
					style={{ transform: 'translateY(-5rem) rotateX(90deg)' }}
					sx={{
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderStyle: 'solid',
						borderWidth: '2px',
						borderColor: theme => theme.palette.orange,
						width: '100%',
						height: '100%',
						color: '#ffffff',
						// borderRadius: '12px',
						backgroundColor: theme => theme.palette.orange,
						transformOrigin: 'bottom',
					}}
					weight="900"
				>
					{top}
				</Typography>

				{/* BACK */}
				<Typography
					variant="largeH1"
					as="span"
					fontStyle="italic"
					style={{
						transform: 'translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)',
					}}
					sx={{
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderStyle: 'solid',
						borderWidth: '2px',
						borderColor: theme => theme.palette.orange,
						width: '100%',
						height: '100%',
						color: '#ffffff',
						// borderRadius: '12px',
						backgroundColor: theme => theme.palette.orange,
						transformOrigin: 'center',
					}}
					weight="900"
				>
					{back}
				</Typography>
			</Box>
		);
	};

	return (
		<Typography
			variant="largeH1"
			weight="900"
			fontStyle="italic"
			// lineHeight="70%"
			sx={{
				alignItems: 'flex-start',
				justifyContent: 'center',
				gap: '0rem',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			GOLF &{' '}
			<SpinningBox
				front="Gourmet"
				bottom="Drinks"
				back="Dessert"
				top="Gourmet"
			/>
		</Typography>
	);
};
