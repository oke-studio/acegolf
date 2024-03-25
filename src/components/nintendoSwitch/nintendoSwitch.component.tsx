'use cleint';

import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '../Typography/typography.component';
import Image from 'next/image';

export const NintendoSwitch = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box
			sx={{
				display: 'flex',
				minHeight: '400px',
				height: '100%',
				width: '100%',
				color: 'black',
				...(isMobile && { flexDirection: 'column' }),
				//backgroundColor: isMobile ? '#529DC8' : 'black',
				borderRadius: isMobile ? '25px 25px 25px 25px' : '0px 0px 0px 0px',
			}}
		>
			<Box
				sx={{
					backgroundColor: '#529DC8',
					width: '100%',
					borderRadius: isMobile ? '25px 25px 0px 0px' : '25px 0px 0px 0px',
					padding: '24px',
					flex: 1,
				}}
			>
				<Box sx={{ display: 'flex', height: '100%', gap: '24px' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							flex: 1,
							height: '100%',
							justifyContent: 'space-between',
						}}
					>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
							<Typography variant="headingThree" weight="600">
								Looking to plan an event?
							</Typography>
							<Typography variant="base" weight="500">
							Talk to us about your party or event.
							</Typography>
						</Box>
						<Button variant="secondary" sx={{ marginTop: '24px' }}>
							<a href="mailto:events@acegolfbar.ca" target="_blank">
								Book Your Event &rarr;
							</a>
						</Button>
					</Box>

					<Box sx={{ width: '100%', position: 'relative', flex: 1 }}>
						<Image
							src="/images/Friends-golfing.webp"
							fill
							alt="img"
							style={{
								objectFit: 'cover',
								objectPosition: 'center',
								borderRadius: '8px',
							}}
						/>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					backgroundColor: '#EB8B32',
					width: '100%',
					borderRadius: isMobile ? '25px 25px 25px 25px' : '0px 25px 0px 0px',
					padding: '24px',
					flex: 1,
				}}
			>
				<Box sx={{ display: 'flex', height: '100%', gap: '24px' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							flex: 1,
							justifyContent: 'space-between',
							height: '100%',
						}}
					>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
							<Typography variant="headingThree" weight="600">
								Have Any Questions?
							</Typography>
							<Typography variant="base" weight="500">
								For all other questions please message our instagram @acegolfbar or email
							</Typography>
						</Box>
						<Button variant="secondary" sx={{ marginTop: '24px' }}>
							<a href="mailto:info@acegolfbar.ca" target="_blank">
								Contact Us
							</a>
						</Button>
					</Box>

					<Box sx={{ width: '100%', position: 'relative', flex: 1 }}>
						<Image
							src="/images/bay4.webp"
							fill
							alt="img"
							style={{
								objectFit: 'cover',
								objectPosition: 'center',
								borderRadius: '8px',
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
