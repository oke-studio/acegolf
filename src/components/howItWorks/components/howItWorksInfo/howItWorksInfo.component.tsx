import React from 'react';
import {
	Box,
	styled,
	Tab,
	Tabs,
	useTheme,
	Button,
	useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Typography } from '@/components/Typography/typography.component';
import useMeasure from 'react-use-measure';

const MiniInfoBox = ({
	question,
	answer,
	width,
}: {
	question: string;
	answer: string;
	width: number;
}) => {
	return (
		<Box
			sx={{
				height: '125px',
				width: width,
				backgroundColor: theme => theme.palette.aceTeal,
				borderRadius: '20px',
				color: 'black',
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				padding: '1rem',
				textOverflow: 'clip',
				borderRight: '4px solid #EB8B32',
				borderBottom: '4px solid #EB8B32',
			}}
		>
			<Typography variant="large" weight="600">
				{question}
				<br />→
			</Typography>
			{/* <Typography variant="base">{answer}</Typography> */}
		</Box>
	);
};

const MiniInfoBoxContainer = ({
	miniInfoBox,
}: {
	miniInfoBox: { question: string; answer: string }[];
}) => {
	const [ref, { width }] = useMeasure();
	const [offset, setOffset] = React.useState(0);
	const CARD_WIDTH = 250;
	// const CARD_HEIGHT = 650;
	const MARGIN = 20;
	const CARD_SIZE = CARD_WIDTH + MARGIN;

	const BREAKPOINTS = {
		sm: 640,
		lg: 1024,
	};

	const CARD_BUFFER =
		width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

	const CAN_SHIFT_LEFT = offset < 0;

	const CAN_SHIFT_RIGHT =
		Math.abs(offset) < CARD_SIZE * (miniInfoBox.length - CARD_BUFFER);

	console.log(CARD_BUFFER, CAN_SHIFT_LEFT, CAN_SHIFT_RIGHT, MiniInfoBox);

	const shiftLeft = () => {
		if (!CAN_SHIFT_LEFT) {
			return;
		}
		setOffset(pv => (pv += CARD_SIZE));
	};

	const shiftRight = () => {
		if (!CAN_SHIFT_RIGHT) {
			return;
		}
		setOffset(pv => (pv -= CARD_SIZE));
	};
	return (
		<Box
			ref={ref}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				flexWrap: 'nowrap',
				gap: '12px',
				position: 'relative',
			}}
		>
			<motion.div animate={{ x: offset }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-start',
						flexWrap: 'nowrap',
						gap: '12px',
						overflowX: 'hidden',
					}}
				>
					{miniInfoBox.map((info, index) => (
						<MiniInfoBox
							question={info.question}
							answer={info.answer}
							key={`min_info_${index}`}
							width={CARD_SIZE}
						/>
					))}
				</Box>
			</motion.div>
			<>
				<Button
					component={motion.button}
					initial={false}
					animate={{
						x: CAN_SHIFT_LEFT ? '0%' : '-100%',
					}}
					className="absolute left-0 top-[100%] z-30 rounded-r-xl bg-nails p-3 pl-2 text-4xl text-heart backdrop-blur-sm transition-[padding] hover:pl-3"
					sx={{
						position: 'absolute',
						left: 0,
						top: '100%',
						borderRadius: '4px',
						zIndex: 30,
						padding: '0.75rem',
						paddingLeft: '0.5rem',
					}}
					onClick={shiftLeft}
				>
					{/* <FiChevronLeft /> */}
					{'<'}
				</Button>
				<Button
					component={motion.button}
					initial={false}
					animate={{
						x: CAN_SHIFT_RIGHT ? '0%' : '100%',
					}}
					className="absolute right-0 top-[100%] z-30 rounded-l-xl bg-nails p-3 pr-2 text-4xl text-heart backdrop-blur-sm transition-[padding] hover:pr-3"
					sx={{
						position: 'absolute',
						right: 0,
						top: '100%',
						borderRadius: '4px',
						zIndex: 30,
						padding: '0.75rem',
						paddingRight: '0.5rem',
					}}
					onClick={shiftRight}
				>
					{/* <FiChevronRight /> */}
					{'>'}
				</Button>
			</>
		</Box>
	);
};

export const HowItWorksInfoBox = ({
	number,
	label,
	description,
	isLanding = false,
	miniInfoBox,
}: {
	number: string;
	label: React.ReactNode;
	description: React.ReactNode;
	isLanding?: boolean;
	miniInfoBox: { question: string; answer: string }[];
}) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'baseline' }}>
					<Typography variant="poster" weight="900" fontStyle="italic">
						{number}.
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '24px',
					}}
				>
					<Typography variant="headingTwo" weight="900" fontStyle="italic">
						{label}
					</Typography>
					<Typography
						variant="base"
						weight="400"
						// sx={{ padding: '0px 32px' }}
					>
						{description}
					</Typography>
				</Box>
			</Box>

			{!isLanding && <MiniInfoBoxContainer miniInfoBox={miniInfoBox} />}
		</Box>
	);
};
