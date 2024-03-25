'use client';
import * as React from 'react';

import { Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import { Card } from '@/components/Cards/cards.component';
import { Promotions } from '../../components/promotions/promotions.component';
import { MailingList } from '../landing/components/mailingList/mailingList.component';
import { BookNowForm } from '@/components/BookNowForm/bookNowForm.component';
import dayjs from 'dayjs';
import { useBookNowForm } from '@/components/BookNowForm/hooks/useBookNowForm.hook';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';
import { Section } from '@/components/layout/section.component';
import { SectionImageGrid } from '@/components/ImageLayoutGrids/sectionImageGrid.component';
import PriceTabCard from './priceTabCard.component';
import { useRouter } from 'next/navigation';

export default function BookNow() {
	const theme = useTheme();
	const router = useRouter();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const {
		handleBookNowButtonLink,
		handleDateTimePickerChange,
		handleReserveFormOnChange,
		reserveABayObject,
	} = useBookNowForm({
		guests: '1',
		duration: '1',
		date: dayjs(new Date()).format(),
		time: dayjs(new Date()).format(),
	});

	return (
		<Box sx={{ margin: 'auto', overflow: 'hidden' }}>
			<Section
				SectionName="Booknow page"
				SectionWidth="fullViewport"
				SectionHeight="fit-content"
				SectionColor=""
				CornerRadius={true}
				ScrollAnimations={true}
				EarlyScrollAnimation={true}
				sx={
					{
						// position: 'relative',
						// display: 'flex',
						// flexDirection: 'column',
						// gap: '2rem',
						// padding: '2% 5%',
					}
				}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: isMobile ? 'column' : 'row',
						width: '100%',
						gap: '24px',
						//padding: '24px',
						justifyContent: 'center',
					}}
				>
					<Card
						// buttonOne={{
						// 	children: (
						// 		<Typography variant="base">
						// 			<a href={handleBookNowButtonLink()} target="_blank">
						// 				Find a Bay&nbsp;
						// 			</a>
						// 		</Typography>
						// 	),
						// 	variant: 'secondary',
						// 	fullWidth: true,
						// }}
						// buttonTwo={{
						// 	children: (
						// 		<Typography variant="base">
						// 			<a
						// 				href={
						// 					'https://www.sevenrooms.com/reservations/acegolf?duration-picker=True'
						// 				}
						// 				target="_blank"
						// 			>
						// 				March Booking &rarr;
						// 			</a>
						// 		</Typography>
						// 	),
						// 	variant: 'secondary',
						// }}
						CardTitle="Book a bay now"
						ColorVariant="dark"
						BackgroundColor={theme.palette.darkBlack}
						sx={{
							flexBasis: '110%',
						}}
					>
						{/* <BookNowForm
							reserveABayObject={reserveABayObject}
							handleDateTimePickerChange={handleDateTimePickerChange}
							handleReserveFormOnChange={handleReserveFormOnChange}
							isWide={false}
						/> */}

						<Box
							sx={{
								display: 'flex',
								width: '100%',
								height: isMobile ? '200px' : '100%',
								flexDirection: 'column',
								justifyContent: 'space-evenly',
								alignItems: 'center',
							}}
						>
							<Button
								disableElevation
								disableFocusRipple
								disableRipple
								disableTouchRipple
								variant="primary"
								sx={
									{
										// textTransform: 'none',
										// backgroundColor: '#EB8B32',
										// color: 'white',
										// borderRadius: '78px',
										// fontWeight: '500',
										// fontSize: '32px',
										// padding: '12px 60px',
										// position: 'relative',
										// top: '-60px',
										// zIndex: 0,
										// ':hover:': {
										//backgroundColor: '#fff',
										//   color: 'white',
										// },
										//
									}
								}
								// onClick={() => {
								// 	router.push('/book-now');
								// }}
							>
								<Typography variant="headingThree" weight="500">
									<a
										href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
										target="_blank"
									>
										Reservation - March &rarr;
									</a>
								</Typography>
							</Button>

							<Button
								disableElevation
								disableFocusRipple
								disableRipple
								disableTouchRipple
								variant="primary"
							>
								<Typography variant="headingThree" weight="500">
									<a
										href="https://yourgolfbooking.com/venues/ace-golf-bar-and-lounge/booking/bays"
										target="_blank"
									>
										Reservation - April &rarr;
									</a>
								</Typography>
							</Button>
						</Box>
					</Card>
					<Card
						// buttonOne={{
						// 	children: (
						// 		<Typography variant="base">How it Works &rarr;</Typography>
						// 	),
						// 	variant: 'secondary',
						// 	onClick: () => router.push('/how-it-works'),
						// }}
						// buttonTwo={{
						// 	children: (
						// 		<Typography variant="base">
						// 			<a
						// 				href={
						// 					'https://www.sevenrooms.com/reservations/acegolf?duration-picker=True'
						// 				}
						// 				target="_blank"
						// 			>
						// 				Find a Bay&nbsp;
						// 			</a>
						// 		</Typography>
						// 	),
						// 	variant: 'primary',
						// }}
						CardTitle="Prices & Rates"
						sx={{ minHeight: '600px', maxWidth: isMobile ? '100%' : '50%' }}
						BackgroundColor="#F6F6F6"
					>
						<PriceTabCard />
					</Card>
				</Box>
			</Section>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',

					height: '100%',
					borderRadius: '25px',
				}}
			>
				{/* <Promotions /> */}

				<MailingList />
			</Box>

			{/* <NintendoSwitch /> */}
		</Box>
	);
}
