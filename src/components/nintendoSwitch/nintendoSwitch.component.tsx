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
				backgroundColor: isMobile ? '#529DC8' : 'black',
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
								Buy Bulk Packages
							</Typography>
							<Typography variant="base" weight="500">
								Save on evey hour by buying bulk General bay hours.
							</Typography>
						</Box>
						<Button variant="secondary" sx={{ marginTop: '24px' }}>
							<a href="mailto:info@acegolfbar.ca" target="_blank">
								Learn More &rarr;
							</a>
						</Button>
					</Box>

					<Box sx={{ width: '100%', position: 'relative', flex: 1 }}>
						<Image
							src="/images/ace-banner-chromatic-white.jpg"
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
								Talk to us about your party or event
							</Typography>
							<Typography variant="base" weight="500">
								We welcome group bookings and events
							</Typography>
						</Box>
						<Button variant="secondary" sx={{ marginTop: '24px' }}>
							<a href="mailto:info@acegolfbar.ca" target="_blank">
								Inquire Now &rarr;
							</a>
						</Button>
					</Box>

					<Box sx={{ width: '100%', position: 'relative', flex: 1 }}>
						<Image
							src="/images/ace-banner-chromatic-white.jpg"
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
