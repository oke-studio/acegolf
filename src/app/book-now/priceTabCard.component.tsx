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
	borderColor: theme.palette.sharpTeal,
	borderWidth: '3px',
	'& .MuiTabs-indicator': {
		backgroundColor: 'transparent',
	},
	'button:not(:last-child)': {
		borderColor: theme.palette.sharpTeal,
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
		backgroundColor: theme.palette.sharpTeal,
		color: 'black',
	},
	'&.Mui-focusVisible': {
		// backgroundColor: 'rgba(100, 95, 228, 0.32)',
	},
}));

interface PriceContainer {
	price: number;
	color?: 'black' | 'white';
	timeFrom: string;
	timeTo: string;
	service: string;
	backgroundColor?: string;
	isPrivate?: boolean;
}

interface PricesTabsContentSkeletonProps {
	title: string;
	description: string;
	priceContainerOne: PriceContainer;
	priceContainerTwo: PriceContainer;
	privatePriceContainerOne: PriceContainer;
	privatePriceContainerTwo: PriceContainer;
}

const PricesTabsContentSkeleton = ({
	title,
	description,
	priceContainerOne,
	priceContainerTwo,
	privatePriceContainerOne,
	privatePriceContainerTwo,
}: PricesTabsContentSkeletonProps) => {
	const theme = useTheme();
	const PriceInfoBox = ({
		price,
		timeFrom,
		timeTo,
		service,
		backgroundColor,
		color = 'white',
		isPrivate = false,
	}: PriceContainer) => {
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '8px',
					color: color,
					width: '100%',
					borderRadius: '8px',
					...(isPrivate && {
						color: 'black',
						borderColor: theme.palette.green,
						borderWidth: '3px',
						borderStyle: 'solid',
					}),
				}}
			>
				<Box
					sx={{
						backgroundColor: backgroundColor ?? theme.palette.green,
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						minWidth: 'max-content',
						borderRadius: 'inherit',
						padding: '16px',
						//gap: '8px',
					}}
				>
					<Typography variant="miniscule" weight="600">
						{service}
					</Typography>
					<Typography
						variant="miniscule"
						weight="600"
						sx={{
							// color: 'black',
							textTransform: 'uppercase',
						}}
					>{`${timeFrom} - ${timeTo}`}</Typography>
					<Typography variant="headingFour" weight="800">
						${price}{' '}
						<Typography variant="small" weight="400" sx={{ display: 'inline' }}>
							/hr
						</Typography>
					</Typography>

					<Typography
						variant="miniscule"
						weight="600"
						sx={{
							// color: 'black',
							textTransform: 'uppercase',
						}}
					>
						Standard Bay
					</Typography>
				</Box>
			</Box>
		);
	};
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
				<Typography variant="base">{description}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					gap: '16px',
					// flexWrap: 'wrap',
					justifyContent: 'space-between',
				}}
			>
				<PriceInfoBox {...priceContainerOne} />
				<PriceInfoBox {...priceContainerTwo} />
			</Box>
			<Box
				sx={{
					display: 'flex',
					gap: '16px',
					// flexWrap: 'wrap',
					justifyContent: 'space-between',
				}}
			>
				<PriceInfoBox {...privatePriceContainerOne} backgroundColor="white" />
				<PriceInfoBox {...privatePriceContainerTwo} backgroundColor="white" />
			</Box>
			{/* <Box
				sx={{
					display: 'flex',
					padding: '16px',
					flexDirection: 'column',
					backgroundColor: 'white',
					borderRadius: '8px',
					borderWidth: '3px',
					borderStyle: 'solid',
					borderColor: theme.palette.green,
					width: '100%',
					minHeight: 'max-content',
					height: 'max-content',
					marginBottom: '10px',
				}}
			>
				<Typography variant="headingFour" weight="800">
					${privatePriceContainer.price}
					<Typography variant="small" weight="400" sx={{ display: 'inline' }}>
						/hr
					</Typography>
				</Typography>
				<Typography
					variant="miniscule"
					weight="600"
					sx={{
						// color: 'black',
						textTransform: 'uppercase',
					}}
				>
					Private Bay
				</Typography>
			</Box> */}
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

	console.log(baysPricingReduced);

	const currentDate = new Date();

	const [value, setValue] = React.useState(currentDate.getDay());

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
				sx={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
			>
				<StyledTab value={0} label="Mon" />
				<StyledTab value={1} label="Tue" />
				<StyledTab value={2} label="Wed" />
				<StyledTab value={3} label="Thu" />
				<StyledTab value={4} label="Fri" />
				<StyledTab value={5} label="Sat" />
				<StyledTab value={6} label="Sun" />
			</StyledTabs>

			{baysPricingReduced &&
				baysPricingReduced.map((bay, index) => (
					<TabPanel
						value={value}
						index={index}
						dir={theme.direction}
						key={`bay_${index}_${bay.day}`}
					>
						<PricesTabsContentSkeleton
							title={bay.day}
							description="Prices are per hour, per bay. Each bay accommodates up to 6 players. Prices do not include tax."
							priceContainerOne={{
								price: bay.generalBayPriceOne,
								timeFrom: bay.generalBayTimeOne.beginningTime,
								timeTo: bay.generalBayTimeOne.endTime,
								service: bay.generalBayTimeOne.nameOfServiceTime,
							}}
							priceContainerTwo={{
								price: bay.generalBayPriceTwo,
								timeFrom: bay.generalBayTimeTwo.beginningTime,
								timeTo: bay.generalBayTimeTwo.endTime,
								service: bay.generalBayTimeTwo.nameOfServiceTime,
							}}
							privatePriceContainerOne={{
								price: bay.privateBayPriceOne,
								timeFrom: bay.privateBayTimeOne.beginningTime,
								timeTo: bay.privateBayTimeOne.endTime,
								service: bay.privateBayTimeOne.nameOfServiceTime,
								isPrivate: true,
							}}
							privatePriceContainerTwo={{
								price: bay.privateBayPriceTwo,
								timeFrom: bay.privateBayTimeTwo.beginningTime,
								timeTo: bay.privateBayTimeTwo.endTime,
								service: bay.privateBayTimeTwo.nameOfServiceTime,
								isPrivate: true,
							}}
						/>
					</TabPanel>
				))}
		</Box>
	);
}
