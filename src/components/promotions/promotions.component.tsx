'use client';
import * as React from 'react';
import { useTheme, Box, useMediaQuery, CircularProgress } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { Typography } from '@/components/Typography/typography.component';

import { useGetPromotions } from './hooks/useGetPromotions.hook';
import { useGetEventsAndPromotions } from './hooks/useGetEventsAndPromotions.hook';

interface PromotionCardProps {
	label: string;
	background: string;
	imgSrc?: string;
	eventsSlug: string;
}
const AnimatedPromotionCards = ({
	label,
	background,
	imgSrc,
	eventsSlug,
}: PromotionCardProps) => {
	const router = useRouter();
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const top = useMotionValue(0);
	// const time = useTime();

	// const mouseXSpring = useSpring(x);
	// const mouseYSpring = useSpring(y);
	const topSpring = useSpring(top, { bounce: 0 });
	const img = imgSrc ?? '/images/ace-banner-chromatic-black.webp';

	// const rotateX = useTransform(
	// 	mouseYSpring,
	// 	[-0.5, 0.5],
	// 	['-17.5deg', '17.5deg'],
	// );

	// const rotateY = useTransform(
	// 	mouseXSpring,
	// 	[-0.5, 0.5],
	// 	['17.5deg', '-17.5deg'],
	// );

	const topTransformer = useTransform(topSpring, [0, 1], ['0px', '50px']);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = e.currentTarget.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
		top.set(1);

		// console.log({ xPct, width, mouseX });
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
		top.set(0);
	};
	return (
		<Box
			sx={{
				borderRadius: '16px',
				height: '300px',
				minWidth: '250px',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'white',
				color: 'black',
			}}
			component={motion.div}
			style={{
				transformStyle: 'preserve-3d',
				// rotateX,
				// rotateY,
			}}
			// whileHover={{ opacity: 0.7 }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<Box
				component={motion.div}
				sx={{
					width: '100%',
					height: 'inherit',
					borderRadius: 'inherit',
					position: 'absolute',
					inset: '1rem ',
					top: 0,
					right: 0,
					left: 0,
					zIndex: 2,
				}}
			>
				<Image
					src={img}
					alt="img"
					width={250}
					height={300}
					sizes="250px"
					style={{ borderRadius: 'inherit', objectFit: 'cover' }}
				/>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: 'inherit',
					borderRadius: 'inherit',
					backgroundColor: 'white',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'end',
					border: 'none',
					color: 'black',
					cursor: 'pointer',
				}}
				onClick={() => router.push(`/events/${eventsSlug}`)}
				component={motion.button}
				style={{ top: topTransformer }}
			>
				<Typography
					variant="large"
					fontStyle="normal"
					weight="600"
					sx={{ textWrap: 'nowrap' }}
					padding={1}
				>
					{label}
				</Typography>
			</Box>
		</Box>
	);
};

const PromotionCards = ({
	label,
	background,
	imgSrc,
	eventsSlug,
}: PromotionCardProps) => {
	const router = useRouter();
	const img = imgSrc ?? '/images/ace-banner-chromatic-black.webp';

	return (
		<Box
			sx={{
				borderRadius: '16px',
				height: '400px',
				minWidth: '250px',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'white',
				color: 'black',
			}}
		>
			<Box
				// component={motion.div}
				sx={{
					width: '100%',

					height: 'inherit',
					borderRadius: 'inherit',
					borderBottomLeftRadius: '0',
					borderBottomRightRadius: '0',

					position: 'relative',
					inset: '1rem ',
					top: 0,
					right: 0,
					left: 0,
					// zIndex: 2,
				}}
			>
				<Image
					src={img}
					alt="img"
					fill
					sizes="250px"
					style={{
						borderRadius: 'inherit',
						objectFit: 'cover',
						objectPosition: 'center',
					}}
				/>
			</Box>
			<Box
				sx={{
					height: '100px',
					borderRadius: 'inherit',
					borderTopLeftRadius: '0',
					borderTopRightRadius: '0',
					backgroundColor: 'white',
					display: 'flex',
					flexDirection: 'column',
					border: 'none',
					color: 'black',
					cursor: 'pointer',
					':hover': {
						color: theme => theme.palette.aceOrange,
					},
				}}
				onClick={() => router.push(`/events/${eventsSlug}`)}
				// component={motion.button}
				// style={{ top: topTransformer }}
			>
				<Typography
					variant="large"
					fontStyle="normal"
					weight="600"
					sx={{ textWrap: 'nowrap' }}
					padding={1}
				>
					{label}
				</Typography>
			</Box>
		</Box>
	);
};

export const Promotions = ({ isLanding = false }: { isLanding?: boolean }) => {
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));

	const { promotionAndEventsData, isLoading, isError } =
		useGetEventsAndPromotions();
	const MAX_PROMOTION_CARDS = isLanding ? 3 : 6;

	if (isLoading) {
		return (
			<Box
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				color: 'white',
				alignItems: 'center',
				gap: '32px',
				margin: '32px 0',
			}}
		>
			<Typography variant="largeH1" weight="900" sx={{ textAlign: 'center' }}>
				{isLanding ? 'PROMOTIONS & EVENTS' : 'EVENTS'}
			</Typography>
			<Typography variant="base">
				Be the first to know about the latest ACE Golf promos and events
			</Typography>
			<Box
				sx={{
					display: 'flex',
					gap: '52px',
					...(isMobile && { flexDirection: 'column' }),
					flexWrap: 'wrap',
					justifyContent: 'center',
					margin: '24px 0',
				}}
			>
				{promotionAndEventsData
					?.slice(0, MAX_PROMOTION_CARDS)
					.map((promo, index) => (
						<AnimatedPromotionCards
							label={promo.title}
							eventsSlug={promo.slugId}
							background="red"
							imgSrc={promo.poster.url}
							key={`promo_${index}`}
						/>
					))}
			</Box>
		</Box>
	);
};
