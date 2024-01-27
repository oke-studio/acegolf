'use client';
import * as React from 'react';
import { useTheme, Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { Typography } from '@/components/Typography/typography.component';

import { useGetPromotions } from './hooks/useGetPromotions.hook';

const PromotionCards = ({
	label,
	background,
	imgSrc,
	eventsSlug,
}: {
	label: string;
	background: string;
	imgSrc?: string;
	eventsSlug: string;
}) => {
	const router = useRouter();
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const top = useMotionValue(0);
	// const time = useTime();

	// const mouseXSpring = useSpring(x);
	// const mouseYSpring = useSpring(y);
	const topSpring = useSpring(top, { bounce: 0 });

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
				height: '400px',
				minWidth: '250px',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'white',
				color: 'black',
				cursor: 'pointer',
			}}
			component={motion.button}
			style={{
				transformStyle: 'preserve-3d',
				// rotateX,
				// rotateY,
			}}
			// whileHover={{ opacity: 0.7 }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onClick={() => router.push(`/events/${eventsSlug}`)}
		>
			<Box
				component={motion.div}
				sx={{
					width: '100%',
					...(imgSrc && { background: background }),
					height: 'inherit',
					borderRadius: 'inherit',
					// borderBottomLeftRadius: '0px',
					// borderBottomRightRadius: '0px',
					// backgroundImage: `url(${imgSrc})`,
					// backgroundRepeat: 'no-repeat',
					// backgroundSize: 'cover',
					// backgroundPosition: 'center',

					transformStyle: 'preserve-3d',
					transform: 'translateZ(75px)',

					position: 'absolute',
					inset: '1rem ',
					top: 0,
					right: 0,
					left: 0,
					zIndex: 2,
				}}
			>
				{imgSrc && (
					<Image
						src={imgSrc}
						alt="img"
						width={250}
						height={400}
						sizes="250px"
						style={{ borderRadius: 'inherit' }}
					/>
				)}
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
				}}
				component={motion.div}
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

export const Promotions = ({ isLanding = false }: { isLanding?: boolean }) => {
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));

	const { promotionData, isLoading, isError } = useGetPromotions();
	const MAX_PROMOTION_CARDS = isLanding ? 3 : 6;

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
				PROMOTIONS & EVENTS
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
				}}
			>
				{promotionData
					?.slice(0, MAX_PROMOTION_CARDS)
					.map((promo, index) => (
						<PromotionCards
							label={promo.promotionTitle}
							eventsSlug={promo.slugId}
							background="red"
							imgSrc={promo.promotionPoster.url}
							key={`promo_${index}`}
						/>
					))}
			</Box>
		</Box>
	);
};
