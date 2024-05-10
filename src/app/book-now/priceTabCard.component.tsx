'use client';
import * as React from 'react';

import { Box, useMediaQuery, useTheme, Tabs, Tab, styled } from '@mui/material';

import { Typography } from '@/components/Typography/typography.component';
import { useGetPriceCard } from './hooks/useGetPriceCard.hook';
import { TypeServiceTimeFields } from '@/types/contentful';
import CircularProgress from '@mui/material/CircularProgress';

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
		</div>
	);
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
	borderRadius: '12px',
	borderStyle: 'solid',
	borderColor: theme.palette.lightBlack,
	borderWidth: '3px',
	'& .MuiTabs-indicator': {
		backgroundColor: 'transparent',
	},
	'button:not(:last-child)': {
		borderColor: theme.palette.lightBlack,
		borderStyle: 'solid',
		borderRightWidth: '3px',
	},
}));

interface StyledTabProps {
	label: string;
	value: number;
}

const StyledTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	textTransform: 'none',
	...theme.typography.base,
	// fontSize: theme.typography.pxToRem(15),
	// marginRight: theme.spacing(1),
	// color: 'rgba(255, 255, 255, 0.7)',
	'&.Mui-selected': {
		backgroundColor: theme.palette.lightBlack,
		color: 'white',
	},
	'&.Mui-focusVisible': {
		// backgroundColor: 'rgba(100, 95, 228, 0.32)',
	},
}));

const ServicePill = ({
	color,
	// backgroundColor,
	text,
}: ServicePillInterface) => {
	const usePillColor = checkText => {
		if (checkText == 'Off-Peak') {
			return '#EB8B32';
		} else {
			return '#9A92C5';
		}
	};

	return (
		<Typography
			variant="miniscule"
			weight="600"
			fontStyle="italic"
			sx={{
				color: color,
				textTransform: 'uppercase',
				backgroundColor: usePillColor(text),
				padding: '0px 8px',
				borderRadius: '10px',
				width: 'fit-content',
			}}
		>
			{text}
		</Typography>
	);
};

interface PriceContainer {
	price: number;
	color?: 'black' | 'white';
	timeFrom: string;
	timeTo: string;
	service: string;
}

const PriceInfoBox = ({
	priceInfoBoxOne,
	priceInfoBoxTwo,
	isPrivate,
	backgroundColor,
	color = 'black',
}: {
	priceInfoBoxOne: PriceContainer;
	priceInfoBoxTwo: PriceContainer;
	backgroundColor?: string;
	isPrivate?: boolean;
	color?: string;
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				color: color,
				width: '100%',
				borderRadius: '8px',
				...(!isPrivate && {
					borderColor: theme => backgroundColor ?? '#36DAD5',
					borderWidth: '3px',
					borderStyle: 'solid',
				}),
				...(isPrivate && {
					backgroundColor: theme => backgroundColor ?? '#36DAD5',
				}),
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					borderRadius: 'inherit',
					padding: '16px',
					justifyContent: 'space-between',
					//gap: '8px',
					flexWrap: 'wrap',
				}}
			>
				<Typography
					variant="large"
					weight="700"
					sx={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}
				>
					{isPrivate ? 'Private Bay' : 'General Bay'}
				</Typography>

				<Box sx={{ display: 'flex', gap: '0.75rem' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.75rem',
							textAlign: 'center',
						}}
					>
						<Typography variant="headingThree" weight="800">
							${priceInfoBoxOne.price}
							<Typography
								variant="base"
								weight="400"
								sx={{ display: 'inline' }}
							>
								/hr
							</Typography>
						</Typography>
						<ServicePill
							backgroundColor="cyan"
							color="black"
							text={priceInfoBoxOne.service}
						/>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.75rem',
							textAlign: 'center',
						}}
					>
						<Typography variant="headingThree" weight="800">
							${priceInfoBoxTwo.price}
							<Typography
								variant="base"
								weight="400"
								sx={{ display: 'inline' }}
							>
								/hr
							</Typography>
						</Typography>
						<ServicePill
							backgroundColor="cyan"
							color="black"
							text={priceInfoBoxTwo.service}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

interface ServicePillInterface {
	color: string;
	text: string;
	backgroundColor: string;
}

interface PricesTabsContentSkeletonProps {
	title: string;
	description: string;
	priceContainer: {
		priceContainerOne: PriceContainer;
		priceContainerTwo: PriceContainer;
	};

	privatePriceContainer: {
		privatePriceContainerOne: PriceContainer;
		privatePriceContainerTwo: PriceContainer;
	};
}

const PricesTabsContentSkeleton = ({
	title,
	description,
	priceContainer,
	privatePriceContainer,
}: PricesTabsContentSkeletonProps) => {
	return (
		<Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
			<Box
				sx={{
					display: 'flex',
					gap: '4px',
					flexDirection: 'column',
					flexWrap: 'wrap',
				}}
			>
				<Typography variant="extralarge" weight="600">
					{title} Pricing
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'nowrap',
						justifyContent: 'flex-start',
						gap: '16px',
						margin: '8px 0px',
					}}
				>
					<Box>
						<Typography variant="large" weight="600">
							{`${priceContainer.priceContainerOne.timeFrom} - ${priceContainer.priceContainerOne.timeTo}`}
						</Typography>
						<ServicePill
							backgroundColor="cyan"
							color="black"
							text={priceContainer.priceContainerOne.service}
						/>
						<Typography variant="base">Open: Cafe </Typography>
					</Box>

					<Box>
						<Typography variant="large" weight="600">
							{`${priceContainer.priceContainerTwo.timeFrom} - ${priceContainer.priceContainerTwo.timeTo}`}
						</Typography>
						<ServicePill
							backgroundColor="cyan"
							color="black"
							text={priceContainer.priceContainerTwo.service}
						/>
						<Typography variant="base">Open: Kitchen</Typography>
					</Box>
				</Box>
			</Box>
			<PriceInfoBox
				priceInfoBoxOne={priceContainer.priceContainerOne}
				priceInfoBoxTwo={priceContainer.priceContainerTwo}
			/>
			<PriceInfoBox
				priceInfoBoxOne={privatePriceContainer.privatePriceContainerOne}
				priceInfoBoxTwo={privatePriceContainer.privatePriceContainerTwo}
				isPrivate={true}
			/>

			<Typography variant="base" sx={{ textAlign: 'center' }}>
				{description}
			</Typography>
		</Box>
	);
};

export default function PriceTabCard() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const { priceData, isLoading } = useGetPriceCard();

	const GeneralBay = priceData?.generalBayScheduleCollection.items!;
	const PrivateBay = priceData?.privateBayScheduleCollection.items!;

	const baysPricingReduced = GeneralBay?.reduce(
		(acc, curr, index) => {
			const generalBays = curr;
			const privateBays = PrivateBay[index];

			const bayObject = {
				day: generalBays.dayOfWeek,
				generalBayTimeOne: generalBays.serviceTime1,
				generalBayPriceOne: generalBays.serviceTime1Price,
				generalBayTimeTwo: generalBays.serviceTime2,
				generalBayPriceTwo: generalBays.serviceTime2Price,
				privateBayTimeOne: privateBays.serviceTime1,
				privateBayPriceOne: privateBays.serviceTime1Price,
				privateBayTimeTwo: privateBays.serviceTime2,
				privateBayPriceTwo: privateBays.serviceTime2Price,
			};

			acc.push(bayObject);

			return acc;
		},
		[] as {
			day: string;
			generalBayTimeOne: TypeServiceTimeFields;
			generalBayPriceOne: number;
			generalBayTimeTwo: TypeServiceTimeFields;
			generalBayPriceTwo: number;
			privateBayTimeOne: TypeServiceTimeFields;
			privateBayPriceOne: number;
			privateBayTimeTwo: TypeServiceTimeFields;
			privateBayPriceTwo: number;
		}[],
	);

	const currentDate = new Date();

	console.log(currentDate);

	const [value, setValue] = React.useState(currentDate.getDay());
	console.log(value);
	console.log(value-1);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

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
		<Box sx={{ width: '100%' }}>
			<StyledTabs
				value={value}
				onChange={handleChange}
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="secondary tabs example"
				variant="scrollable"
				scrollButtons="auto"
				sx={{
					overflowX: 'scroll',
					scrollBehavior: 'smooth',
					scrollbarWidth: 'none',
				}}
			>
				<StyledTab value={1} label="Mon" />
				<StyledTab value={2} label="Tue" />
				<StyledTab value={3} label="Wed" />
				<StyledTab value={4} label="Thu" />
				<StyledTab value={5} label="Fri" />
				<StyledTab value={6} label="Sat" />
				<StyledTab value={0} label="Sun" />
			</StyledTabs>

			{baysPricingReduced &&
				baysPricingReduced.map((bay, index) => (
					<TabPanel
						value={value - 1}
						index={index}
						dir={theme.direction}
						key={`bay_${index}_${bay.day}`}
					>
						<PricesTabsContentSkeleton
							title={bay.day}
							description="Prices are per hour, per bay. Prices do not include tax."
							priceContainer={{
								priceContainerOne: {
									price: bay.generalBayPriceOne,
									timeFrom: bay.generalBayTimeOne.beginningTime,
									timeTo: bay.generalBayTimeOne.endTime,
									service: bay.generalBayTimeOne.nameOfServiceTime,
								},
								priceContainerTwo: {
									price: bay.generalBayPriceTwo,
									timeFrom: bay.generalBayTimeTwo.beginningTime,
									timeTo: bay.generalBayTimeTwo.endTime,
									service: bay.generalBayTimeTwo.nameOfServiceTime,
								},
							}}
							privatePriceContainer={{
								privatePriceContainerOne: {
									price: bay.privateBayPriceOne,
									timeFrom: bay.privateBayTimeOne.beginningTime,
									timeTo: bay.privateBayTimeOne.endTime,
									service: bay.privateBayTimeOne.nameOfServiceTime,
								},
								privatePriceContainerTwo: {
									price: bay.privateBayPriceTwo,
									timeFrom: bay.privateBayTimeTwo.beginningTime,
									timeTo: bay.privateBayTimeTwo.endTime,
									service: bay.privateBayTimeTwo.nameOfServiceTime,
								},
							}}
						/>
					</TabPanel>
				))}
		</Box>
	);
}
