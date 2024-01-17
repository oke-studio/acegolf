import * as React from 'react';
import { Box, styled, Grid, useMediaQuery, useTheme } from '@mui/material';

import { Card } from '@/components/Cards/cards.component';

const LandingCardsContainer = styled(Box)(({ theme }) => ({
	backgroundColor: 'transparent',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
}));

export const LandingCards = () => {
	//   return (
	//     <LandingCardsContainer>
	//       <Card
	//         buttonOne={{ children: 'Testing card', variant: 'primary' }}
	//         CardTitle="Card Test"
	//       />
	//     </LandingCardsContainer>
	//   );

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<LandingCardsContainer>
			<Box
				sx={{
					display: 'flex',
					flexDirection: isMobile ? 'column' : 'row',
					width: '100%',
					gap: '24px',
				}}
			>
				<Card
					buttonOne={{
						children: 'See Full Menu',
						variant: 'secondary',
						fullWidth: true,
					}}
					CardTitle="Tapas Style Menu"
					ColorVariant="dark"
					sx={{
						flexBasis: '110%',
						borderColor: '#36DAD5',
						borderWidth: '6px',
						borderStyle: 'solid',
					}}
				>
					<Box></Box>
				</Card>
				<Card
					buttonOne={{ children: 'How it works', variant: 'secondary' }}
					buttonTwo={{ children: 'Find a Bay', variant: 'primary' }}
					CardTitle="Prices & Rates"
				/>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: isMobile ? 'column' : 'row',
					width: '100%',
					gap: '24px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						gap: '24px',
						flexBasis: '60%',
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
					buttonOne={{ children: 'Show on Maps', variant: 'primary' }}
					CardTitle="Parking"
					CardDescription="Parking available at Heward Ave & Eastern Ave"
				/>
			</Box>
			<Box>
				<Card
					buttonOne={{ children: 'Learn More', variant: 'primary' }}
					CardTitle="Full Width Card"
					CardDescription="Content on card"
					fullWidth
					ImageSrc="/images/ace-landing-image-1.jpeg"
				/>
			</Box>
		</LandingCardsContainer>
	);
};
