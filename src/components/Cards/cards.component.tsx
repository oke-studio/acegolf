'use client';

import * as React from 'react';
import {
	Box,
	styled,
	Button,
	ButtonProps,
	SxProps,
	Theme,
	useTheme,
	useMediaQuery,
} from '@mui/material';

import { Typography } from '../Typography/typography.component';
import Image from 'next/image';

type CardColorTypes = 'light' | 'dark';

const CardColorVariants = {
	light: { color: 'black', backgroundColor: 'white' },
	dark: { color: 'white', backgroundColor: 'black' },
};

const CardContainer = styled(Box, {
	shouldForwardProp: prop => prop !== 'variant',
	name: 'Card',
})({
	padding: '24px',
	display: 'flex',
	flexDirection: 'column',
	color: 'black',
	gap: '12px',
	width: '100%',
	//   height: '100%',
	alignItems: 'center',
	borderRadius: '30px',
});

interface CardProps {
	buttonOne?: ButtonProps;
	buttonTwo?: ButtonProps;
	CardTitle: string;
	CardDescription?: string;
	ImageSrc?: string;
	BackgroundColor?: string;
	children?: React.ReactNode;
	fullWidth?: boolean;
	ColorVariant?: CardColorTypes;
	sx?: SxProps;
}

export const Card = ({
	CardTitle,
	buttonOne,
	buttonTwo,
	ImageSrc,
	CardDescription,
	BackgroundColor,
	ColorVariant = 'light',
	fullWidth = false,
	sx,
	children,
}: CardProps) => {
	const { typography, palette, breakpoints } = useTheme();

	const isMobile = useMediaQuery(breakpoints.down('sm'));

	const COLOR_VARIANT = CardColorVariants[ColorVariant];

	return (
		<CardContainer
			sx={{
				...COLOR_VARIANT,
				...(fullWidth && { alignItems: 'start' }),
				...sx,
				...(ImageSrc && {
					//backgroundImage: `url(${ImageSrc})`,
					// background: `linear-gradient(180deg, rgba(35, 35, 35) 0%, rgba(0, 0, 0, 0.44) 14.58%, rgba(0, 0, 0, 0.00) 81.25%, rgba(0, 0, 0, 0.05) 99.53%), url(${ImageSrc})`,
					// backgroundRepeat: 'no-repeat',
					// backgroundSize: 'cover',
					// backgroundPosition: 'center',
					color: 'white',
					minHeight: '500px',
					position: 'relative',
				}),
				...(BackgroundColor && { backgroundColor: BackgroundColor }),
				...(isMobile && {
					borderRadius: '16px',
					padding: '16px',
				}),
				minWidth: 0,
			}}
		>
			{ImageSrc && (
				<Image
					src={ImageSrc}
					fill
					alt="img"
					style={{
						zIndex: 0,
						position: 'absolute',
						objectFit: 'cover',
						objectPosition: 'center',
						borderRadius: 'inherit',
					}}
				/>
			)}
			{/* Title Box --> Make this text Box */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
					gap: '16px',
					position: 'relative',
				}}
			>
				<Typography variant="headingThree" weight="600">
					{CardTitle}
				</Typography>
				<Typography variant="base" weight="400">
					{CardDescription}
				</Typography>
			</Box>

			{/* Content Box */}
			<Box sx={{ display: 'flex', flexGrow: 2, width: '100%' }}>{children}</Box>

			{/* Button Box */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: '10px',
					justifyContent: 'center',
					flexWrap: 'wrap',
				}}
			>
				{buttonOne && (
					<Button {...buttonOne} fullWidth>
						{buttonOne.children}
					</Button>
				)}
				{buttonTwo && (
					<Button {...buttonTwo} fullWidth>
						{buttonTwo.children}
					</Button>
				)}
			</Box>
		</CardContainer>
	);
};
