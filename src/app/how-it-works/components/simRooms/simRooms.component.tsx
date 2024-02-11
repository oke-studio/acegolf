import * as React from 'react';
import { Box, useTheme } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SimRoomCardProps {
	imgSrc: string;
	imgAlt: string;
	cardWidth: string;
	title: string;
	description?: string;
	isCurrent: boolean;
	index: number;
	setActiveCard: (index: number) => void;
	activeWidth?: number;
}

const SimRoomCard = ({
	imgSrc,
	imgAlt,
	//   cardWidth,
	title,
	//   description,
	isCurrent,
	index,
	setActiveCard,
	activeWidth = 50,
}: SimRoomCardProps) => {
	const { palette } = useTheme();
	const passiveWidth = (100 - activeWidth) / 6;
	const passiveHoverWidth = passiveWidth + 2.5;
	return (
		<Box
			component={motion.div}
			onClick={() => setActiveCard(index)}
			variants={{
				initial: {
					width: `${passiveWidth}%`,
					filter: 'grayscale(1)',
				},
				hover: {
					width: `${passiveHoverWidth}%`,
					filter: 'grayscale(0.6)',
					...(isCurrent && { width: '70%', filter: 'grayscale(0)' }),
				},
				active: {
					width: `${activeWidth}%`,
					filter: 'grayscale(0)',
				},
			}}
			aria-current={isCurrent}
			animate={isCurrent ? 'active' : 'initial'}
			initial="initial"
			whileHover="hover"
			sx={{
				height: '100%',
				borderRadius: '16px',
				overflow: 'hidden',
				color: 'black',
				// width: '10%',
				borderWidth: '1.5px',
				borderStyle: 'solid',
				borderColor: palette.aceTeal,
				// position: 'absolute',
				// top: 0,
				// left: `${75 * index}px`,
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
				variants={
					{
						// initial: { opacity: 0, ...(isCurrent && { opacity: 1 }) },
						// hover: { opacity: 0, ...(isCurrent && { opacity: 1 }) },
					}
				}
				// animate="hover"
				sx={{
					position: 'absolute',
					top: '85%',
					left: 0,
					right: 0,
					backgroundColor: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'flex-start',
					padding: '1rem 0',
					// justifyContent: 'space-between',
					flexDirection: 'column',
				}}
			>
				<Box sx={{ display: 'flex', margin: '0 auto' }}>
					<GolfCourseIcon fontSize="large" />
					<Box
						component={motion.div}
						variants={{
							initial: { opacity: 0, color: '#000000' },
							hover: { opacity: 1 },
							active: { opacity: 1, color: palette.aceOrange },
						}}
						hidden={!isCurrent}
					>
						<Typography
							variant="headingFour"
							weight="500"
							sx={{
								color: 'inherit',
								alignSelf: 'flex-start',
								display: 'flex',
								flexDirection: 'row',
							}}
						>
							{title}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

const SimRoomCardsInfo: Omit<
	SimRoomCardProps,
	'isCurrent' | 'index' | 'setActiveCard' | 'activeWidth'
>[] = [
	// {
	//   imgSrc: '/images/Spin-photo1.webp',
	//   imgAlt: 'img',
	//   cardWidth: '250px',
	//   title: 'COUPON',
	// },
	{
		imgSrc: '/images/bay1.webp',
		imgAlt: 'img',
		cardWidth: '250px',
		title: '1',
	},
	{
		imgSrc: '/images/bay2.webp',
		imgAlt: 'img',
		cardWidth: '250px',
		title: '2',
	},
	{
		imgSrc: '/images/bay3.webp',
		imgAlt: 'img',
		cardWidth: '250px',
		title: '3',
	},
	{
		imgSrc: '/images/bay4.webp',
		imgAlt: 'img',
		cardWidth: '250px',
		title: '4',
	},
	{
		imgSrc: '/images/bay1.webp',
		imgAlt: 'img',
		cardWidth: '250px',
		title: '5',
	},
	{
		imgSrc: '/images/privateBay.webp',
		imgAlt: 'img',
		cardWidth: '250px',
		title: '6',
	},
];

export const SimRoomsComponent = () => {
	//   const gridLayoutGap = '10px';
	//   const gridColumnCount = 3;
	//   const gridItemMinWidth = '250px';

	//   const gapCount = `calc(${gridColumnCount} - 1)`;
	//   const totalGapWidth = `calc(${gapCount} * ${gridLayoutGap})`;
	//   const gridItemMaxWidth = `calc((100% - ${totalGapWidth})/${gridColumnCount})`;

	const [activeCard, setActiveCard] = React.useState(5);

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
					SIM ROOMS
				</Typography>
				<Typography variant="base" weight="400">
					6 performance simulation rooms powered by Trackman award wining tech.
					Each sim has performance modes and fun modes for more goofiness. Learn
					more about our facilities below.
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
					// overflowX: 'hidden',
					overflowY: 'visible',
					// justifyContent: 'left',
					gap: '12px',
					position: 'relative',
				}}
			>
				{SimRoomCardsInfo.map((card, index) => (
					<SimRoomCard
						{...card}
						key={`sim_room_card_${index}`}
						isCurrent={index === activeCard}
						index={index}
						setActiveCard={activeIndex => setActiveCard(activeIndex)}
						activeWidth={70}
					/>
				))}
			</Box>
		</Box>
	);
};
