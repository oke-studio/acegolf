import * as React from 'react';
import { Box, useTheme, styled, Tab, Tabs } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import { Section } from '@/components/layout/section.component';
import { GolfGamesComponentV1 } from '../golfGames/golfGamesV1.component';

import Image from 'next/image';

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
			style={{ width: '100%' }}
			{...other}
		>
			{value === index && children}
		</div>
	);
}

const StyledTabs = styled(Tabs)(() => ({
	borderRadius: '12px',
	//   borderStyle: 'solid',
	//   borderColor: theme.palette.aceOrange,
	//   borderWidth: '3px',
	height: 'max-content',

	'& .MuiTabs-indicator': {
		backgroundColor: 'transparent',
	},
	'& .MuiTabs-flexContainer': {
		flexDirection: 'column',
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
	borderRadius: '8px',
	...theme.typography.headingFour,
	fontWeight: '700',
	color: 'white',
	'&.Mui-selected': {
		backgroundColor: 'black',
		color: 'white',
	},
	'&.Mui-focusVisible': {
		// backgroundColor: 'rgba(100, 95, 228, 0.32)',
	},
}));

interface SimRoomCardProps {
	imgSrc: string;
	imgAlt: string;

	title: string;
	description?: string;

	index: number;
}

const SimRoomCard = ({
	imgSrc,
	imgAlt,

	title,
}: SimRoomCardProps) => {
	const { palette } = useTheme();

	return (
		<Box
			sx={{
				height: '100%',
				borderRadius: '16px',
				overflow: 'hidden',
				color: 'black',
				// width: '10%',
				borderWidth: '1.5px',
				borderStyle: 'solid',
				borderColor: palette.aceTeal,
				position: 'relative',
				// top: 0,
				// left: `${75 * index}px`,
			}}
		>
			<Image
				src={imgSrc}
				alt={imgAlt}
				fill
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
					borderRadius: 'inherit',
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					top: '85%',
					left: 0,
					right: 0,
					backgroundColor: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'flex-start',
					padding: '1rem 0',
					// justifyContent: 'space-between',
					flexDirection: 'column',
				}}
			>
				<Box sx={{ display: 'flex', margin: '0 auto' }}>
					<Box>
						<Typography
							variant="headingFour"
							weight="500"
							sx={{
								color: 'inherit',
								alignSelf: 'flex-start',
								display: 'flex',
								flexDirection: 'row',
							}}
						>
							{title}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

const SimRoomCardsInfo: Omit<
	SimRoomCardProps,
	'isCurrent' | 'index' | 'setActiveCard' | 'activeWidth'
>[] = [
	// {
	//   imgSrc: '/images/Spin-photo1.png',
	//   imgAlt: 'img',
	//   cardWidth: '250px',
	//   title: 'COUPON',
	// },
	{
		imgSrc: '/images/Spin-photo2.png',
		imgAlt: 'img',
		// cardWidth: '250px',
		title: '1',
	},
	{
		imgSrc: '/images/Spin-photo3.png',
		imgAlt: 'img',
		// cardWidth: '250px',
		title: '2',
	},
	{
		imgSrc: '/images/Spin-photo4.png',
		imgAlt: 'img',
		// cardWidth: '250px',
		title: '3',
	},
	{
		imgSrc: '/images/placeholder1.png',
		imgAlt: 'img',
		// cardWidth: '250px',
		title: '4',
	},
	{
		imgSrc: '/images/placeholder2.png',
		imgAlt: 'img',
		// cardWidth: '250px',
		title: '5',
	},
	{
		imgSrc: '/images/ace-banner-chromatic-black.jpg',
		imgAlt: 'img',
		// cardWidth: '250px',
		title: '6',
	},
];

export const SimRoomsComponentV1 = () => {
	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Section
			SectionName="How it works Homepage"
			SectionWidth="normal"
			SectionColor="green"
			CornerRadius
			SectionHeight="fit-content"
			sx={{
				position: 'relative',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center',
					gap: '2rem',
				}}
			>
				<Box>
					<Typography variant="large" weight="900">
						SIM ROOMS
					</Typography>
					<Typography variant="base" weight="400">
						6 performance simulation rooms powered by Trackman award wining
						tech. Each sim has performance modes and fun modes for more
						goofiness. Learn more about our facilities below.
					</Typography>
				</Box>

				{/* Card Carousel */}
				<Box
					// sx={{
					//   padding: '0 0.5rem',
					//   margin: '0.75rem 0',
					//   display: 'grid',
					//   gridTemplateColumns: `repeat(auto-fit, minmax(max(${gridItemMinWidth}, ${gridItemMaxWidth}), 1fr))`,
					//   gridAutoRows: '250px',
					//   rowGap: '32px',
					//   width: '100%',
					//   justifyItems: 'center',
					// }}
					sx={{
						display: 'flex',
						width: '100%',

						flexWrap: 'nowrap',
						// overflowX: 'hidden',
						overflowY: 'visible',
						// justifyContent: 'left',
						gap: '12px',
						position: 'relative',
					}}
				>
					<StyledTabs
						value={value}
						onChange={handleChange}
						textColor="secondary"
						indicatorColor="secondary"
						aria-label="secondary tabs example"

						//   variant="scrollable"
						//   scrollButtons="auto"
						//   sx={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
					>
						<StyledTab value={0} label="SIM ROOM #1" />
						<StyledTab value={1} label="SIM ROOM #2" />
						<StyledTab value={2} label="SIM ROOM #3" />
						<StyledTab value={3} label="SIM ROOM #4" />
						<StyledTab value={4} label="SIM ROOM #5" />
						<StyledTab value={5} label="PRIVATE SIM ROOMS #6" />
					</StyledTabs>

					{/* <TabPanel value={value} index={0} dir={theme.direction}>
          HI
        </TabPanel> */}

					{SimRoomCardsInfo.map((card, index) => (
						<TabPanel
							value={value}
							index={index}
							key={`sim_room_card_${index}`}
						>
							<SimRoomCard
								{...card}
								key={`sim_room_card_${index}`}
								index={index}
							/>
						</TabPanel>
					))}
				</Box>
			</Box>
			<GolfGamesComponentV1 />
		</Section>
	);
};
