'use client';
import * as React from 'react';
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
		{ label: 'Menu', to: '/menu' },
		{ label: 'How it Works', to: '/how-it-works' },
		// { label: 'About', to: '/about' },
		{ label: 'Events', to: '/events' },
	],
}: HeaderProps) => {
	const { palette, typography, zIndex, breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('md'));
	const [mobileDropDownEnabled, setMobileDropDownEnabled] = React.useState(
		false,
	);
	const router = useRouter();

	function toggleDropDown() {
		setMobileDropDownEnabled(!mobileDropDownEnabled);
	}

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
				top: '38px',

				zIndex: zIndex.appBar,
				// mixBlendMode: 'difference',

				...(!mobileDropDownEnabled &&
					{
						// position: 'sticky',
						// backgroundColor: 'transparent',
					}),
			}}
		>
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
							<svg
								width="50"
								height="50"
								viewBox="0 0 79 39"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M50.026 7.69095C49.5636 8.97776 48.52 10.316 47.0802 11.487H43.0247C45.6006 7.36925 45.4025 4.66695 43.0247 4.66695C39.8543 4.66695 36.816 8.27002 35.7592 11.4227C34.7024 14.5754 34.4382 19.4653 40.9111 19.4653C44.808 19.4653 49.8741 15.0322 53.1766 10.3353L56.1752 13.4173C52.2122 19.0792 44.8146 24.5481 38.0775 24.5481C30.4157 24.5481 27.5756 18.0498 29.8213 11.8731C32.1859 5.3747 37.8001 0.742188 44.2136 0.742188C48.705 0.742188 51.347 3.95921 50.026 7.69095Z"
									fill={mobileDropDownEnabled ? 'black' : 'white'}
								/>
								<path
									d="M78.8899 13.4173C74.8608 19.0792 67.5293 24.5481 60.7922 24.5481C53.1303 24.5481 50.2902 18.0498 52.5359 11.8731C54.9071 5.3747 60.5213 0.742188 66.9282 0.742188C71.4196 0.742188 73.4011 3.95921 72.0801 7.69095C70.6931 11.5514 65.1448 15.4118 58.2756 16.763C59.0022 18.3715 60.6534 19.4653 63.6257 19.4653C67.5227 19.4653 73.5332 16.6343 76.9018 11.9374L78.8833 13.4173H78.8899ZM58.4804 11.4227C58.2162 12.2591 58.018 13.0312 57.952 13.8033C67.8595 11.7444 68.7182 4.40959 65.4817 4.40959C62.5755 4.40959 59.5372 8.27002 58.4804 11.4227Z"
									fill={mobileDropDownEnabled ? 'black' : 'white'}
								/>
								<path
									d="M33.4474 13.4173C29.9468 18.5001 23.606 24.5481 18.1238 24.5481C16.3882 24.5481 15.2527 23.8097 14.7828 22.4393L17.9719 16.2804C18.9296 12.9154 11.7104 6.5521 9.84774 7.18264C7.6813 7.36923 5.75924 9.33804 5.75924 9.33804C5.75924 9.33804 2.78699 11.5128 6.58487 14.7941C10.6469 18.3007 14.7949 19.2915 14.7949 19.2915L13.8547 21.1022C12.0999 23.1089 9.86179 24.5481 6.96135 24.5481C1.07629 24.5481 -1.30151 18.0498 0.944188 11.8731C3.32199 5.3747 9.0023 0.742188 14.425 0.742188C16.8028 0.742188 18.8504 1.70729 19.8411 3.95921L20.7658 1.38559H26.5782L20.8979 17.4707C20.3695 19.0149 21.03 19.4653 21.8887 19.4653C24.3986 19.4653 28.7579 15.8622 31.4659 11.9374L33.4474 13.4173Z"
									fill={mobileDropDownEnabled ? 'black' : 'white'}
								/>
								<path
									d="M11.6367 34.3267C11.6367 32.9214 12.6599 31.8725 14.1529 31.8725C14.8733 31.8725 15.6563 32.066 16.3349 32.5344V30.8949C15.7085 30.5487 14.8942 30.3145 13.9545 30.3145C11.7829 30.3145 9.91406 31.8725 9.91406 34.2962C9.91406 36.7198 11.7829 38.2575 13.9441 38.2575C15.0403 38.2575 15.8964 37.952 16.6482 37.4836V33.9907H15.0925V36.506C14.7584 36.6587 14.4243 36.7402 13.965 36.7402C12.639 36.7402 11.6367 35.732 11.6367 34.3267Z"
									fill={mobileDropDownEnabled ? 'black' : 'white'}
								/>
								<path
									d="M32.0721 36.7402C30.8819 36.7402 29.7648 35.8542 29.7648 34.286C29.7648 32.7279 30.8819 31.842 32.0721 31.842C33.2414 31.842 34.3586 32.7279 34.3586 34.286C34.3586 35.8441 33.2414 36.7402 32.0721 36.7402ZM28.0421 34.286C28.0421 36.5976 29.7857 38.2575 32.0721 38.2575C34.3481 38.2575 36.0813 36.5874 36.0813 34.286C36.0813 31.9845 34.3481 30.3145 32.0721 30.3145C29.7961 30.3145 28.0421 31.9845 28.0421 34.286Z"
									fill={mobileDropDownEnabled ? 'black' : 'white'}
								/>
								<path
									d="M47.7812 38.0844H52.7091V36.5773H49.483V30.4876H47.7812V38.0844Z"
									fill={mobileDropDownEnabled ? 'black' : 'white'}
								/>
								<path
									d="M64.2065 38.0844H65.9083V35.3349H68.7899V33.9092H65.9083V32.0049H68.9778V30.4876H64.2065V38.0844Z"
									fill={mobileDropDownEnabled ? 'black' : 'white'}
								/>
							</svg>
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
								<SportsGolfIcon fontSize="large" />
							) : (
								<GolfCourseIcon fontSize="large" />
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
							{/* <motion.button
                style={{
                  borderRadius: '6.36px',
                  backgroundColor: aceOrange,
                  padding: '2px 14px 2px 14px',
                  color: 'white',
                  borderStyle: 'none',
                  fontFamily: 'new-hero',
                  fontSize: '12px',
                }}
                //   variants={navOptionHover}
                // initial="rest"
                // whileHover="hovered"
                // animate="rest"
              >
                <MotionSpanAnimated label="Book Now!" />
              </motion.button> */}
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
