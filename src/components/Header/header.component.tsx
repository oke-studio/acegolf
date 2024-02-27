'use client';
import React from 'react';
import {
	Box,
	styled,
	List,
	ListItem,
	ListItemButton,
	useMediaQuery,
	useTheme,
	Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import { MotionSpanAnimated } from '../Helpers/motionSpanAnimation.component';
import { RNG } from '@/util/RNG';
import { useRouter } from 'next/navigation';
import { Typography } from '../Typography/typography.component';
import { AceLogo } from './component/aceLogoSVG/aceLogoSVG.component';
import { Menu, MenuOpen, Close } from '@mui/icons-material';
import { HeaderBanner } from './headerBanner.component';
import { HeaderBlur } from './component/aceLogoSVG/headerBlur.component';

const HeaderContainer = styled(Box)({
	display: 'flex',

	height: '60px',
	width: '100%',
	alignItems: 'center',
	padding: '0px 24px',
	backgroundColor: 'transparent',
});

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
	'&.MuiListItemButton-root:hover': {
		backgroundColor: 'transparent',
		color: theme.palette.primary.main,
	},
	//   padding: '8px 0 8px 0',
}));

interface NavOptions {
	label: string;
	to: string;
}

interface HeaderProps {
	navOptions?: NavOptions[];
	navBackgroundColor?: string;
	navTextColor?: string;
}

export const Header = ({
	navOptions = [
		{ label: 'How it Works', to: '/how-it-works' },
		// { label: 'About', to: '/about' },
		{ label: 'Menu', to: '/menu' },
		// { label: 'Events', to: '/events' },
	],
}: HeaderProps) => {
	const { palette, zIndex, breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('md'));
	const [mobileDropDownEnabled, setMobileDropDownEnabled] =
		React.useState(false);
	const router = useRouter();

	const HoverAnimation = {
		top: { to: '5px', from: '0px' },
		color: {
			to: palette.aceOrange,
			from: '#ffffff',
		},
		rotate: { to: RNG(9, 21), from: 0 },

		transition: {
			to: {
				duration: 0.5,
				type: 'tween',
				ease: 'easeOut',
			},
			from: {
				duration: 0.5,
				type: 'tween',
				ease: 'easeIn',
			},
		},
	};

	const RestAnimation = {
		top: { to: '-5px', from: '0px' },
		color: {
			to: palette.aceOrange,
			from: '#FFFFFF',
		},
		rotate: { to: RNG(-9, -21), from: 0 },

		transition: {
			to: {
				duration: 0.5,
				type: 'tween',
				ease: 'easeOut',
			},
			from: {
				duration: 0.5,
				type: 'tween',
				ease: 'easeIn',
			},
		},
	};

	const handleNavOnClick = (to: string) => {
		if (mobileDropDownEnabled) {
			setMobileDropDownEnabled(false);
		}
		return router.push(to);
	};

	const menuVariants = {
		open: {
			scaleY: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
		closed: {
			scaleY: 0,
			transition: {
				when: 'afterChildren',
				staggerChildren: 0.3,
			},
		},
	};

	const menuListVariants = {
		open: {
			y: 0,
			opacity: 1,
		},
		closed: {
			y: -10,
			opacity: 0,
		},
	};

	return (
		<Box
			sx={{
				position: 'sticky',
				top: '0px',
				zIndex: 2,
				width: '100%',
				willChange: 'transform',
				height: 'auto',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					width: '100%',
					position: 'relative',

					//zIndex: zIndex.appBar,

					//zIndex: 2,
					//top: '0px',
					//backgroundColor: 'transparent',
					//mixBlendMode: 'difference',
					//backdropFilter: 'blur(4.0625px)',
				}}
			>
				<HeaderBlur />
				<HeaderBanner
					sx={{
						isolation: 'isolate',
						zIndex: '3',
					}}
				/>

				<HeaderContainer
					sx={{
						justifyContent: isMobile ? 'space-between' : 'center',
						// backgroundColor: navBackgroundColor,
						// color: navTextColor,
						backgroundColor: mobileDropDownEnabled ? 'white' : 'transparent',

						zIndex: '3',
						// mixBlendMode: 'difference',
					}}
				>
					{isMobile && (
						<>
							<Box
								component={motion.ul}
								variants={menuVariants}
								initial="closed"
								animate={mobileDropDownEnabled ? 'open' : 'closed'}
								sx={{
									listStyleType: 'none',
									paddingTop: '40%',
									justifyContent: 'flex-start',
									// gap: '24px',
									alignItems: 'center',
									height: '100vh',
									width: '100%',
									display: 'flex',
									position: 'absolute',
									right: '0',
									left: '0',
									top: '0',
									bottom: 0,
									overflow: 'hidden',
									pointerEvents: 'auto',
									flexDirection: 'column',
									gap: '4rem',
									backgroundColor: 'white',
									transformOrigin: 'top',
									color: 'black',
									zIndex: 5,
									boxShadow:
										'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
								}}
							>
								{navOptions.map((navLink, i) => (
									<Box
										component={motion.li}
										variants={menuListVariants}
										onClick={() => handleNavOnClick(navLink.to)}
										key={i}
										// onHover={}
										whileHover={{ color: palette.aceOrange }}
										sx={{
											'& .MuiButtonBase-root': {
												justifyContent: 'center',
											},
											justifyContent: 'center',
										}}
									>
										{/* <Button variant="text" sx={{ color: '#000000' }}>
							<Typography variant="small" weight="400" as={motion.div}>
								{navLink.label}
							</Typography>
						</Button> */}
										<MotionSpanAnimated
											label={navLink.label}
											typographyVariant="headingTwo"
											typographyWeight="700"
										/>
									</Box>
								))}
							</Box>
							<Button
								onClick={() => handleNavOnClick('/')}
								disableElevation
								disableFocusRipple
								disableRipple
								disableTouchRipple
								sx={{ ...(mobileDropDownEnabled && { zIndex: 10 }) }}
							>
								<AceLogo fill={mobileDropDownEnabled ? 'black' : 'white'} />
							</Button>

							<Box
								component={motion.button}
								whileHover={{ scale: 1.75 }}
								whileTap={{ scale: 0.95 }}
								initial={{ scale: 1 }}
								sx={{
									border: 'none',
									backgroundColor: 'transparent',
									color: '#FFFFFF',
									...(mobileDropDownEnabled && {
										zIndex: 10,
										color: '#000000',
									}),
								}}
								onClick={() => setMobileDropDownEnabled(open => !open)}
							>
								{mobileDropDownEnabled ? (
									// <SportsGolfIcon fontSize="large" />
									<Close fontSize="large" fill="#000000" />
								) : (
									// <GolfCourseIcon fontSize="large" />
									<Menu fontSize="large" />
								)}
							</Box>
						</>
					)}

					{!isMobile && (
						<List
							sx={{
								display: 'flex',
								justifyContent: 'centre',
								whiteSpace: 'nowrap',
								gap: '24px',
								overflow: 'hidden',
							}}
						>
							<ListItem disablePadding sx={{ paddingRight: '24px' }}>
								<Button
									disableElevation
									disableFocusRipple
									disableRipple
									disableTouchRipple
									onClick={() => {
										router.push('/');
									}}
								>
									<Image
										src="/images/ace-header-logo.svg"
										alt="ace golf logo"
										width={50}
										height={50}
									/>
								</Button>
							</ListItem>
							{navOptions.map((navLink, i) => (
								<ListItem disablePadding key={i}>
									<StyledListItemButton
										onClick={() => {
											router.push(navLink.to);
										}}
									>
										<MotionSpanAnimated
											label={navLink.label}
											hoverAnimation={HoverAnimation}
											restAnimation={RestAnimation}
										/>
									</StyledListItemButton>
								</ListItem>
							))}
							<ListItem disablePadding>
								<Button
									variant="navButton"
									onClick={() => {
										router.push('/book-now');
									}}
								>
									Book Now!
								</Button>
							</ListItem>
						</List>
					)}
				</HeaderContainer>
			</Box>
		</Box>
	);
};

{
	/* <div style="position: relative; width: 100%; height: 100%; border-radius: 0px;"><div style="position: absolute; inset: 0px; z-index: 1; backdrop-filter: blur(0.0625px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%); border-radius: 0px; pointer-events: none;"></div><div style="position: absolute; inset: 0px; z-index: 2; backdrop-filter: blur(0.125px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%); border-radius: 0px; pointer-events: none;"></div><div style="position: absolute; inset: 0px; z-index: 3; backdrop-filter: blur(0.25px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%); border-radius: 0px; pointer-events: none;"></div><div style="position: absolute; inset: 0px; z-index: 4; backdrop-filter: blur(0.5px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%); border-radius: 0px; pointer-events: none;"></div><div style="position: absolute; inset: 0px; z-index: 5; backdrop-filter: blur(1px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%); border-radius: 0px; pointer-events: none;"></div><div style="position: absolute; inset: 0px; z-index: 6; backdrop-filter: blur(2px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%); border-radius: 0px; pointer-events: none;"></div><div style="position: absolute; inset: 0px; z-index: 7; backdrop-filter: blur(4px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%); border-radius: 0px; pointer-events: none;"></div><div style="position: absolute; inset: 0px; z-index: 8; backdrop-filter: blur(8px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%); border-radius: 0px; pointer-events: none;"></div></div> */
}
