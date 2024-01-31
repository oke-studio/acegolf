'use client';
import * as React from 'react';
import {
	Box,
	styled,
	Tab,
	Tabs,
	useTheme,
	Button,
	useMediaQuery,
} from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { MotionSpanAnimated } from '@/components/Helpers/motionSpanAnimation.component';
import { Typography } from '@/components/Typography/typography.component';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MenuSection } from './components/menuSection/menuSection.component';
import { useGetMenu } from '../../hooks/useGetMenu.hook';
import { MenuSectionType } from './menuItems';
import { Section } from '@/components/layout/section.component';

const StyledMenuWrapper = styled(Box)(() => ({
	borderRadius: '25px',
	border: 'solid black 6px',
	backgroundColor: 'white',
	color: 'black',
}));

const StyledTab = styled(Tab)({
	opacity: 1,
});

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
	const { children, value, index, ...other } = props;

	// const isMobileView = value !== index

	return (
		<div
			role="tabpanel"
			hidden={!isMobile && value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{true && <Box sx={{ p: isMobile ? 0 : 3 }}>{children}</Box>}
		</div>
	);
}

export const Menu = () => {
	const [value, setValue] = React.useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isLargeDesktop = useMediaQuery('(min-width:1440px)');
	const router = useRouter();

	const { menuData, isLoading } = useGetMenu();

	if (isLoading || !menuData) {
		console.log('loading');
		return <></>;
	}
	console.log(menuData);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	return (
		<Section
			SectionName="Menu Content"
			SectionWidth="fullViewport"
			SectionHeight="fit-content"
			SectionColor=""
			CornerRadius={false}
			ScrollAnimations={false}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '32px',
					margin: '0px auto',
					width: '100%',
				}}
			>
				<StyledMenuWrapper>
					<Box
						sx={{
							//margin: '24px',
							// padding: '5%',
							padding: '24px',
							display: 'flex',
							flexDirection: 'column',
							gap: '32px',
						}}
					>
						<Box sx={{ display: 'flex', gap: '24px' }}>
							<Box
								sx={{
									height: '100%',
									flex: 1,
									display: 'flex',
									flexDirection: 'column',
									gap: '24px',
								}}
							>
								{(
									Object.keys(menuData).filter(
										item => item !== 'menuName',
									) as MenuSectionType[]
								).map((option, index) => {
									const menu = menuData[option];

									console.log(menu);

									if (!menu) {
										return <></>;
									}

									return (
										<CustomTabPanel
											index={index}
											value={value}
											key={`menu_option_${index}`}
										>
											<MenuSection
												menuSection={option}
												menuItems={menu.items}
											/>
										</CustomTabPanel>
									);
								})}
							</Box>
							{!isMobile && (
								<Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
									<Box>
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
											<StyledTab
												label={<MotionSpanAnimated label="Big Bites" />}
												{...a11yProps(0)}
											/>
											<StyledTab
												label={<MotionSpanAnimated label="Small Bites" />}
												{...a11yProps(1)}
											/>
											<StyledTab
												label={<MotionSpanAnimated label="Desert" />}
												{...a11yProps(1)}
											/>
										</Tabs>
									</Box>
									<Box
										sx={{
											height: '100%',
											position: 'relative',
											width: '100%',
											borderWidth: '2px',
											borderStyle: 'solid',
											borderColor: theme.palette.aceTeal,
											borderRadius: '8px',
										}}
									>
										<Image
											src="/images/placeholder1.png"
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
				</StyledMenuWrapper>
				<Button
					sx={{ alignSelf: 'center' }}
					disableRipple
					disableElevation
					disableFocusRipple
					disableTouchRipple
					variant="secondary"
					onClick={() => router.push('/book-now')}
				>
					{/* <MotionSpanAnimated label="Download Full Menu PDF" /> */}
					Reserve a bay &rarr;
				</Button>
			</Box>
		</Section>
	);
};
