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
import { Typography } from '@/components/Typography/typography.component';

const MiniInfoBox = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => {
	return (
		<Box
			sx={{
				height: '125px',
				minWidth: '200px',
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

			{!isLanding && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-start',
						flexWrap: 'nowrap',
						gap: '12px',
					}}
				>
					{miniInfoBox.map((info, index) => (
						<MiniInfoBox
							question={info.question}
							answer={info.answer}
							key={`min_info_${index}`}
						/>
					))}
				</Box>
			)}
		</Box>
	);
};
