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
		{ label: 'Events', to: '/events' },
	],
}: HeaderProps) => {
	const { palette, zIndex, breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('md'));
	const [mobileDropDownEnabled, setMobileDropDownEnabled] =
		React.useState(false);
	const router = useRouter();

	//   function toggleDropDown() {
	//     setMobileDropDownEnabled(!mobileDropDownEnabled);
	//   }

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
				display: 'flex',
				width: '100%',

				justifyContent: 'center',
				flexDirection: 'column',
				position: 'sticky',
				top: '0px',

				zIndex: zIndex.appBar,
				// mixBlendMode: 'difference',
			}}
		>
			<HeaderBanner />
			<Box
				component={motion.ul}
				variants={menuVariants}
				initial="closed"
				animate={mobileDropDownEnabled ? 'open' : 'closed'}
				sx={{
					// display: 'flex',
					// flexDirection: 'column',
					justifyContent: 'center',
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
					gap: '1rem',
					backgroundColor: '#ffffff',
					transformOrigin: 'top',
					color: 'black',
					zIndex: 5,
					boxShadow:
						'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				}}
				// component={motion.div}
				// variants={menuVariants}
				// initial="closed"
				// animate={mobileDropDownEnabled ? 'open' : 'closed'}
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
						<Button variant="text" sx={{ color: '#000000' }}>
							<Typography variant="small" weight="400" as={motion.div}>
								{navLink.label}
							</Typography>
						</Button>
					</Box>
				))}
			</Box>
			<HeaderContainer
				sx={{
					justifyContent: isMobile ? 'space-between' : 'center',
					// backgroundColor: navBackgroundColor,
					// color: navTextColor,
					backgroundColor: mobileDropDownEnabled ? 'white' : 'transparent',

					mixblendmode: 'difference',
				}}
			>
				{isMobile && (
					<>
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
							whileHover={{ scale: 1.15, color: palette.aceOrange }}
							whileTap={{ scale: 0.95 }}
							initial={{ color: mobileDropDownEnabled ? '#000000' : '#FFFFFF' }}
							sx={{
								border: 'none',
								backgroundColor: 'transparent',
								...(mobileDropDownEnabled && { zIndex: 10, color: '#000000' }),
								color: '#FFFFFF',
							}}
							onClick={() => setMobileDropDownEnabled(open => !open)}
						>
							{mobileDropDownEnabled ? (
								// <SportsGolfIcon fontSize="large" />
								<Close fontSize="large" />
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
							overflow: 'scroll',
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
	);
};
