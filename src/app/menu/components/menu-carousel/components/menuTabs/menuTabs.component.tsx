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
	const CollectionsToImageStore: MenuCollectionsType[] = [];

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
					{MenuCollectionKeys.map((opt, index) => {
						if (isNullMenu(opt)) {
							return <></>;
						}
						return (
							<StyledTab
								label={<MotionSpanAnimated label={MENU_SECTION_NAMES[opt]} />}
								{...a11yProps(0)}
								key={`${opt}_${index}`}
							/>
						);
					})}
				</Tabs>
				<Box sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
					{MenuCollectionKeys.map((option, index) => {
						const menu = menuData[option];

						if (!isNullMenu(option)) {
							CollectionsToImageStore.push(option);
							return (
								<CustomTabPanel
									index={index}
									value={value}
									key={`menu_option_${index}`}
								>
									<MenuSection menuSection={option} menuItems={menu.items} />
								</CustomTabPanel>
							);
						}

						return <></>;
					})}
					{!isMobile && (
						<Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
							<Box
								sx={{
									height: '100%',
									position: 'relative',
									width: '100%',
									// borderWidth: '2px',
									// borderStyle: 'solid',
									// borderColor: theme.palette.aceTeal,
									borderRadius: '8px',
								}}
							>
								<Image
									src={
										menuData[
											MAP_MENU_COLLECTION_TO_IMAGE[
												CollectionsToImageStore[value]
											]
										]?.url ?? '/images/food/bigbites-place-holder.webp'
									}
									alt="img"
									fill
									style={{
										objectFit: 'cover',
										objectPosition: 'center',
										borderRadius: 'inherit',
									}}
								/>
							</Box>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
};
