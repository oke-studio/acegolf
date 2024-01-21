import * as React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
	// cardWidth,
	title,
	// description,
	isCurrent,
	index,
	setActiveCard,
}: GameCardProps) => {
	return (
		<Box
			component={motion.div}
			onClick={() => setActiveCard(index)}
			variants={{
				initial: {
					width: '12.5%',
					filter: 'grayscale(1)',
					...(isCurrent && { width: '50%', filter: 'grayscale(0)' }),
				},
				hover: {
					width: '15.5%',
					filter: 'grayscale(0.6)',
					...(isCurrent && { width: '50%', filter: 'grayscale(0)' }),
				},
			}}
			aria-current={isCurrent}
			animate="initial"
			whileHover="hover"
			sx={{
				height: '100%',
				position: 'relative',
				borderRadius: '8px',
				overflow: 'hidden',
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
				component={motion.div}
				variants={{
					initial: { opacity: 0, ...(isCurrent && { opacity: 1 }) },
					hover: { opacity: 0, ...(isCurrent && { opacity: 1 }) },
				}}
				// animate="hover"
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					backgroundColor: 'transparent',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'self-end',
					padding: '2rem',
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
	// {
	//   imgSrc: '/images/Spin-photo1.png',
	//   imgAlt: 'img',
	//   cardWidth: '250px',
	//   title: 'COUPON',
	// },
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

export const GolfGamesComponent = () => {
	// const gridLayoutGap = '10px';
	// const gridColumnCount = 3;
	// // const gridItemMinWidth = '250px';

	// const gapCount = `calc(${gridColumnCount} - 1)`;
	// const totalGapWidth = `calc(${gapCount} * ${gridLayoutGap})`;
	// const gridItemMaxWidth = `calc((100% - ${totalGapWidth})/${gridColumnCount})`;

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
				// sx={{
				//   padding: '0 0.5rem',
				//   margin: '0.75rem 0',
				//   display: 'grid',
				//   gridTemplateColumns: `repeat(auto-fit, minmax(max(${gridItemMinWidth}, ${gridItemMaxWidth}), 1fr))`,
				//   gridAutoRows: '250px',
				//   rowGap: '32px',
				//   width: '100%',
				//   justifyItems: 'center',
				// }}
				sx={{
					display: 'flex',
					width: '100%',
					height: '450px',

					flexWrap: 'nowrap',
					overflow: 'hidden',
					justifyContent: 'center',
					gap: '12px',
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
