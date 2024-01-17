import * as React from 'react';
import { Box, useTheme } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import Image from 'next/image';
import { motion, useTime, useTransform } from 'framer-motion';

interface GameCardProps {
	imgSrc: string;
	imgAlt: string;
	cardWidth: string;
	title: string;
	description?: string;
	isCurrent: boolean;
	index: number;
	setActiveCard: (index: number) => void;
}

const GameCard = ({
	imgSrc,
	imgAlt,
	cardWidth,
	title,
	description,
	isCurrent,
	index,
	setActiveCard,
}: GameCardProps) => {
	const { palette } = useTheme();
	return (
		<Box
			sx={{
				width: cardWidth,
				height: '100%',
				position: 'relative',
				borderRadius: '8px',
				overflow: 'hidden',
				color: 'black',
			}}
		>
			<Image
				src={imgSrc}
				alt={imgAlt}
				fill
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
					borderRadius: 'inherit',
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					top: '70%',
					left: 0,
					right: 0,
					backgroundColor: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'baseline',
					padding: '1rem',
				}}
			>
				<Typography
					variant="headingFour"
					weight="500"
					sx={{ color: 'inherit' }}
				>
					{title}
				</Typography>
			</Box>
		</Box>
	);
};

const GameCardsInfo: Omit<
	GameCardProps,
	'isCurrent' | 'index' | 'setActiveCard'
>[] = [
	{
		imgSrc: '/images/Spin-photo1.png',
		imgAlt: 'img',
		cardWidth: '250px',
		title: 'COUPON',
	},
	{
		imgSrc: '/images/Spin-photo2.png',
		imgAlt: 'img',
		cardWidth: '250px',
		title: 'COUPON',
	},
	{
		imgSrc: '/images/Spin-photo3.png',
		imgAlt: 'img',
		cardWidth: '250px',
		title: 'COUPON',
	},
	{
		imgSrc: '/images/Spin-photo4.png',
		imgAlt: 'img',
		cardWidth: '250px',
		title: 'COUPON',
	},
	{
		imgSrc: '/images/placeholder1.png',
		imgAlt: 'img',
		cardWidth: '250px',
		title: 'COUPON',
	},
	{
		imgSrc: '/images/placeholder2.png',
		imgAlt: 'img',
		cardWidth: '250px',
		title: 'COUPON',
	},
];

export const GolfGamesComponentV1 = () => {
	const gridLayoutGap = '5px';
	const gridColumnCount = 3;
	const gridItemMinWidth = '250px';

	const gapCount = `calc(${gridColumnCount} - 1)`;
	const totalGapWidth = `calc(${gapCount} * ${gridLayoutGap})`;
	const gridItemMaxWidth = `calc((100% - ${totalGapWidth})/${gridColumnCount})`;

	const [activeCard, setActiveCard] = React.useState(2);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
				gap: '2rem',
			}}
		>
			<Box>
				<Typography variant="large" weight="900">
					GOLF GAMES
				</Typography>
				<Typography variant="base" weight="400">
					We offer a wide selection of games that utilize the advanced tracking
					in the Trackman technology
				</Typography>
			</Box>

			{/* Card Carousel */}
			<Box
				sx={{
					padding: '0 0.5rem',
					margin: '0.75rem 0',
					display: 'grid',
					gridTemplateColumns: `repeat(auto-fit, minmax(max(${gridItemMinWidth}, ${gridItemMaxWidth}), 1fr))`,
					gridAutoRows: '250px',
					rowGap: '32px',
					width: '100%',
					justifyItems: 'center',
				}}
			>
				{GameCardsInfo.map((card, index) => (
					<GameCard
						{...card}
						key={`game_card_${index}`}
						isCurrent={index === activeCard}
						index={index}
						setActiveCard={activeIndex => setActiveCard(activeIndex)}
					/>
				))}
			</Box>
		</Box>
	);
};
