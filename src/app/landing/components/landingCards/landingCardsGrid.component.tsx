import * as React from 'react';
import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Card } from '@/components/Cards/cards.component';
import PriceTabCard from '../../../book-now/priceTabCard.component';

const LandingCardsContainer = styled(Box)(() => ({
	backgroundColor: 'transparent',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
}));

export const LandingCardsGrid = () => {
	const router = useRouter();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const handleButtonLink = () => {
		return 'https://www.google.com/maps/dir/581+Eastern+Avenue,+Toronto,+ON/588+Eastern+Ave,+Toronto,+ON+M4M+1E1/@43.6588624,-79.3396868,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d4cb75daac07a1:0x29f6fb44e2d79f3!2m2!1d-79.3374018!2d43.6586366!1m5!1m1!1s0x89d4cb75df38a6bd:0x71354217e063d446!2m2!1d-79.3369881!2d43.6590804!3e0?entry=ttu';
	};

	return (
		<LandingCardsContainer>
			<Box
				sx={{
					display: 'grid',
					...(isMobile
						? {
								gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
						  }
						: { gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 2fr)' }),
					width: '100%',
					gap: '24px',
				}}
			>
				<Card
					buttonOne={{
						children: 'See Full Menu',
						variant: 'secondary',
						fullWidth: true,
						onClick: () => router.push('/menu'),
					}}
					CardTitle="Tapas Style Menu"
					CardDescription="Crazy Good menu goes here with multiple descriptions"
					ColorVariant="dark"
					sx={{
						borderColor: '#36DAD5',
						borderWidth: '6px',
						borderStyle: 'solid',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							width: '100%',
							gap: '50px',
							padding: '0% 4%',
						}}
					>
						<Box
							sx={{
								width: '100%',
								minHeight: 'fit-content',
							}}
						>
							<Box
								sx={{
									width: '100%',
									borderRadius: '9px',
									minHeight: '350px',
									marginBottom: '16px',
									position: 'relative',
									backgroundColor: 'pink',
									transform: 'rotate(70deg)',
								}}
							>
								<Image
									src="/images/placeholder1.png"
									alt="img"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									style={{
										objectFit: 'cover',
										objectPosition: 'center',
										borderRadius: 'inherit',
										transform: 'rotate(50deg)',
									}}
								/>
							</Box>

							<Typography variant="base" weight="200">
								{' '}
								Serious Mango shot $20
							</Typography>
						</Box>
						<Box
							sx={{
								width: '100%',
								minHeight: 'fit-content',
							}}
						>
							<Box
								sx={{
									width: '100%',
									borderRadius: '9px',
									minHeight: '350px',
									marginBottom: '16px',
									position: 'relative',
								}}
							>
								<Image
									src="/images/placeholder2.png"
									alt="img"
									fill
									style={{
										objectFit: 'cover',
										objectPosition: 'center',
										borderRadius: 'inherit',
									}}
								/>
							</Box>
							<Typography variant="base" weight="200">
								{' '}
								Taco board Suprise $50
							</Typography>
						</Box>
					</Box>
				</Card>
				<Card
					buttonOne={{ children: 'How it works', variant: 'secondary' }}
					buttonTwo={{ children: 'Find a Bay', variant: 'primary' }}
					CardTitle="Prices & Rates"
				>
					<PriceTabCard />
				</Card>
			</Box>
			<Box
				sx={{
					display: 'grid',
					...(isMobile
						? {
								gridTemplateRows: 'repeat(2, minmax(0, auto))',
						  }
						: { gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 3fr)' }),
					width: '100%',
					gap: '24px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: isMobile ? 'row' : 'column',
						width: '100%',
						gap: '24px',
						minWidth: 0,
					}}
				>
					<Card
						buttonOne={{ children: 'Learn More', variant: 'primary' }}
						CardTitle="Amenities"
						CardDescription="Information about trackman amenities"
					/>
					<Card
						buttonOne={{ children: 'Get Coaching', variant: 'primary' }}
						CardTitle="Coaching"
						CardDescription="Information about coaching"
					/>
				</Box>
				<Card
					buttonOne={{
						children: (
							<Typography variant="large">
								<a href={handleButtonLink()} target="_blank">
									Show on Map↗
								</a>
							</Typography>
						),
						variant: 'primary',
					}}
					CardTitle="Parking"
					CardDescription="Parking available at Heward Ave & Eastern Ave"
					ImageSrc="/images/Maps-ace-expanded.png"
				/>
			</Box>
		</LandingCardsContainer>
	);
};
