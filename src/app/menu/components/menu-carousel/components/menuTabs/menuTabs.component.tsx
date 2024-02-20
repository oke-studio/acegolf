'use client';

import React from 'react';
import { Box, styled, Tab, Tabs, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useGetMenu } from '@/app/menu/hooks/useGetMenu.hook';
import {
	MENU_COLLECTIONS,
	MenuCollectionsType,
	MenuImageType,
} from '../../menuItems';
import {
	MENU_SECTION_NAMES,
	MenuSection,
} from '../menuSection/menuSection.component';
import { MotionSpanAnimated } from '@/components/Helpers/motionSpanAnimation.component';
import { AnimatePresence, motion } from 'framer-motion';

const StyledTab = styled(Tab)({
	opacity: 1,
});

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={!isMobile && value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			style={{ flex: 1 }}
		>
			{true && <Box sx={{ p: isMobile ? 0 : 3 }}>{children}</Box>}
		</div>
	);
}

const MAP_MENU_COLLECTION_TO_IMAGE: {
	[K in MenuCollectionsType]: MenuImageType;
} = {
	smallBitesCollection: 'smallBitesImage',
	bigBitesCollection: 'bigBitesImage',
	desertsCollection: 'desertsImage',
	drinksCollection: 'drinksImage',
};

export const MenuTabs = () => {
	const [value, setValue] = React.useState(0);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const { menuData, isLoading } = useGetMenu();

	if (isLoading || !menuData) {
		return <></>;
	}

	const MENU_COLLECTION_KEYS_SORT: { [key in MenuCollectionsType]: number } = {
		bigBitesCollection: 2,
		smallBitesCollection: 1,
		drinksCollection: 3,
		desertsCollection: 4,
	};

	const MenuCollectionKeys = (
		Object.keys(menuData).filter(item =>
			MENU_COLLECTIONS.includes(item),
		) as MenuCollectionsType[]
	).sort(
		(n1, n2) => MENU_COLLECTION_KEYS_SORT[n1] - MENU_COLLECTION_KEYS_SORT[n2],
	);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	const isNullMenu = (option: MenuCollectionsType) => {
		const menu = menuData[option];

		if (menu.items.every(item => item === null)) {
			return true;
		}

		return false;
	};

	const imgSrc =
		menuData[MAP_MENU_COLLECTION_TO_IMAGE[MenuCollectionKeys[value]]]?.url;

	console.log(
		imgSrc,
		MAP_MENU_COLLECTION_TO_IMAGE,

		value,
	);
	return (
		<Box sx={{ display: 'flex', gap: '24px', flexGrow: 1 }}>
			<Box
				sx={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					gap: '24px',
				}}
			>
				{!isMobile && (
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="menu tabs"
						sx={{
							flexDirection: 'column',
							// justifyContent: isMobile ? 'center' : 'initial',
							'.MuiTabs-indicator': {
								backgroundColor: 'transparent',
							},
							'.MuiTabs-flexContainer': {
								flexWrap: 'wrap',
								justifyContent: 'center',
							},
						}}
						centered={isMobile}
					>
						{MenuCollectionKeys.filter(o => !isNullMenu(o)).map(
							(opt, index) => {
								return (
									<StyledTab
										label={
											<MotionSpanAnimated label={MENU_SECTION_NAMES[opt]} />
										}
										{...a11yProps(0)}
										key={`${opt}_${index}`}
									/>
								);
							},
						)}
					</Tabs>
				)}
				<Box
					sx={{
						display: 'flex',
						flexDirection: isMobile ? 'column' : 'row',
						height: '100%',
					}}
				>
					{MenuCollectionKeys.filter(o => !isNullMenu(o)).map(
						(option, index) => {
							const menu = menuData[option];

							return (
								<CustomTabPanel
									index={index}
									value={value}
									key={`menu_option_${index}`}
								>
									<MenuSection menuSection={option} menuItems={menu.items} />
								</CustomTabPanel>
							);
						},
					)}
					{!isMobile && (
						<AnimatePresence mode="wait">
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								key={imgSrc}
								style={{
									height: '100%',
									position: 'relative',
									flex: 1,
									borderRadius: '1rem',
								}}
							>
								<Image
									src={imgSrc ?? '/images/food/bigbites-place-holder.webp'}
									alt="img"
									fill
									style={{
										objectFit: 'cover',
										objectPosition: 'center',
										borderRadius: 'inherit',
									}}
								/>
							</motion.div>
						</AnimatePresence>
					)}
				</Box>
			</Box>
		</Box>
	);
};
