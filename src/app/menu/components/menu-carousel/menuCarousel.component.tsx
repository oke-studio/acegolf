'use client'
import * as React from 'react'
import {
	Box,
	styled,
	Tab,
	Tabs,
	useTheme,
	Button,
	useMediaQuery,
} from '@mui/material'
import { motion } from 'framer-motion'
import { MotionSpanAnimated } from '@/components/Helpers/motionSpanAnimation.component'
import { Typography } from '@/components/Typography/typography.component'
import { google } from 'googleapis'

import Image from 'next/image'
import { MenuOptions, MenuItem } from './menuItems'
import { useRouter, usePathname } from 'next/navigation'

const StyledMenuCarouselWrapper = styled(Box)(({ theme: t }) => ({
	borderRadius: '25px',
	border: 'solid black 6px',
	backgroundColor: 'white',
	color: 'black',
}))

const StyledTab = styled(Tab)({
	opacity: 1,
})

const StyledDownloadButton = styled(Button)(
	({ theme }) => `

  color: black;
  background-color: white;
  border-radius: 33px;
  padding: 16px 48px;
  font-size: calc(18px + 0.390625vw);
  border: solid 2px black;
  &:hover {
    background-color: white;
    color: ${theme.palette.primary.main}
  }
`,
)

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function CustomTabPanel(props: TabPanelProps) {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const { children, value, index, ...other } = props

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
	)
}

const MenuSection = ({
	menuItems,
	menuSection,
}: {
	menuItems: MenuItem[]
	menuSection: string
}) => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
			<Typography
				variant="largeH1"
				weight="900"
				fontStyle="italic"
				id={`${menuSection}_list`}
			>
				{menuSection}
			</Typography>
			<Box
				component="ul"
				sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
				aria-labelledby={`${menuSection}_list`}
			>
				{menuItems.map((option, index) => (
					<Box
						key={index}
						sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
						component="li"
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								gap: '8px',
							}}
						>
							<Typography
								variant="small"
								weight="500"
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								{option.name}
							</Typography>
							{/* <Box
                sx={{
                  borderWidth: 0,
                  borderStyle: 'dashed',
                  borderBottomWidth: '1px',
                  transform: 'translateY(-40%)',
                  // width: '100%',
                  flexGrow: 2,
                  margin: '0 8px',
                  display: 'flex',
                }}
              ></Box> */}
							<Typography
								variant="base"
								sx={{ color: theme.palette.aceOrange }}
							>
								{option.price}
							</Typography>
						</Box>
						<Typography variant="miniscule" fontStyle="italic">
							{option.ingredients.join(',')}
						</Typography>
						{/* <Typography variant="miniscule" fontStyle="italic">
              {option.ingredients}
            </Typography> */}
					</Box>
				))}
			</Box>
		</Box>
	)
}

const SpinningMenuHeading = () => {
	const SpinningBox = ({
		front,
		bottom,
		back,
		top,
	}: {
		front: string
		bottom: string
		back: string
		top: string
	}) => {
		return (
			<Box
				component={motion.span}
				sx={{
					position: 'relative',
					width: '30rem',
					height: '6rem',
					fontWeight: 900,
					textTransform: 'uppercase',
					top: '-20px',
					zIndex: '-1',
				}}
				style={{
					transformStyle: 'preserve-3d',
					transformOrigin: 'center center -40px',
				}}
				initial={{ rotateX: '0deg' }}
				animate={{
					rotateX: [
						'0deg',
						'90deg',
						'90deg',
						'180deg',
						'180deg',
						'270deg',
						'270deg',
						'360deg',
					],
				}}
				transition={{
					repeat: Infinity,
					duration: 10,
					ease: 'backInOut',
					times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
				}}
			>
				{/* FRONT */}
				<Typography
					variant="largeH1"
					as="span"
					fontStyle="italic"
					sx={{
						position: 'absolute',
						display: 'flex',
						height: '100%',
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						borderStyle: 'solid',
						borderWidth: '2px',
						borderColor: '#EB8B32',
						color: '#ffffff',
						// borderRadius: '12px',
						backgroundColor: theme => {
							return theme.palette.orange
						},
					}}
					weight="900"
				>
					{front}
				</Typography>

				{/* BOTTOM */}
				<Typography
					variant="largeH1"
					as="span"
					fontStyle="italic"
					style={{ transform: 'translateY(5rem) rotateX(-90deg)' }}
					sx={{
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderStyle: 'solid',
						borderWidth: '2px',
						borderColor: '#EB8B32',
						width: '100%',
						height: '100%',
						color: '#ffffff',
						// borderRadius: '12px',
						backgroundColor: '#EB8B32',
						transformOrigin: 'top',
					}}
					weight="900"
				>
					{bottom}
				</Typography>

				{/* TOP */}
				<Typography
					variant="largeH1"
					as="span"
					fontStyle="italic"
					style={{ transform: 'translateY(-5rem) rotateX(90deg)' }}
					sx={{
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderStyle: 'solid',
						borderWidth: '2px',
						borderColor: '#EB8B32',
						width: '100%',
						height: '100%',
						color: '#ffffff',
						// borderRadius: '12px',
						backgroundColor: '#EB8B32',
						transformOrigin: 'bottom',
					}}
					weight="900"
				>
					{top}
				</Typography>

				{/* BACK */}
				<Typography
					variant="largeH1"
					as="span"
					fontStyle="italic"
					style={{
						transform: 'translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)',
					}}
					sx={{
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderStyle: 'solid',
						borderWidth: '2px',
						borderColor: '#EB8B32',
						width: '100%',
						height: '100%',
						color: '#ffffff',
						// borderRadius: '12px',
						backgroundColor: '#EB8B32',
						transformOrigin: 'center',
					}}
					weight="900"
				>
					{back}
				</Typography>
			</Box>
		)
	}

	return (
		<Typography
			variant="largeH1"
			weight="900"
			fontStyle="italic"
			// lineHeight="70%"
			sx={{
				alignItems: 'center',
				justifyContent: 'center',
				gap: '0rem',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			GOLF &{' '}
			<SpinningBox
				front="Gourmet"
				bottom="Drinks"
				back="Desserts"
				top="Gourmet"
			/>
		</Typography>
	)
}

export const MenuCarousel = () => {
	const [value, setValue] = React.useState(0)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const isLargeDesktop = useMediaQuery('(min-width:1440px)')
	const router = useRouter()
	const pathname = usePathname()
	// const { typography, palette } = useTheme();

	console.log(pathname)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		}
	}

	// console.log(tabClasses);
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				position: 'relative',
				zIndex: 20,

				margin: isLargeDesktop ? '15px 10% 5px' : '15px 5% 5px',
			}}
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
				<Box
					sx={{
						// ...typography.hero_super_italic,
						// fontSize: isMobile ? '60px' : '100px',
						// lineHeight: '70%',
						// marginBottom: '30px',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: isMobile ? 'center' : 'space-between',
						gap: '12px',
						// position: 'sticky',
						// top: '100px',
					}}
				>
					{/* <Typography variant="base" lineHeight="70%" marginBottom="30px">
            GOLF & <br />
            GOURMET
          </Typography> */}
					<SpinningMenuHeading />
					<Typography variant="base" alignSelf="center">
						Swing into flavour with our culinary delights
					</Typography>
				</Box>
				<StyledMenuCarouselWrapper>
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
								{MenuOptions.map((option, index) => (
									<CustomTabPanel
										index={index}
										value={value}
										key={`menu_option_${index}`}
									>
										<MenuSection
											menuSection={option.option.toLocaleUpperCase()}
											menuItems={option.items}
										/>
									</CustomTabPanel>
								))}

								{/* <CustomTabPanel
                  index={MenuOptions.length}
                  value={value}
                  key={`menu_option_${MenuOptions.length}`}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                      gap: '24px',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '12px',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="largeH1"
                        weight="900"
                        fontStyle="italic"
                      >
                        The Kitchen
                      </Typography>
                      <Typography variant="base">
                        This is a piece of text about the kitchen, it will tell
                        the people how the kitchen. Introduce the chefs and
                        their approach. It will aso tell information on when the
                        kitchen is open for everyday for golfers and for just
                        dinners. it will also show that the kitchen is on uber
                        eats{' '}
                      </Typography>
                    </Box>
                    
                  </Box>
                </CustomTabPanel> */}
								{/* <CustomTabPanel
                  index={MenuOptions.length + 1}
                  value={value}
                  key={`menu_option_${MenuOptions.length + 1}`}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row-reverse',
                      gap: '24px',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '12px',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="largeH1"
                        weight="900"
                        fontStyle="italic"
                      >
                        The Bar
                      </Typography>
                      <Typography variant="base">
                        This is a piece of text about the kitchen, it will tell
                        the people how the kitchen. Introduce the chefs and
                        their approach. It will aso tell information on when the
                        kitchen is open for everyday for golfers and for just
                        dinners. it will also show that the kitchen is on uber
                        eats{' '}
                      </Typography>
                    </Box>
                    
                  </Box>
                </CustomTabPanel> */}
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
											{/* <StyledTab
                        label={<MotionSpanAnimated label="The Kitchen" />}
                        {...a11yProps(1)}
                      />
                      <StyledTab
                        label={<MotionSpanAnimated label="The Bar" />}
                        {...a11yProps(1)}
                      /> */}
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
				</StyledMenuCarouselWrapper>
				<Button
					sx={{ alignSelf: 'center' }}
					disableRipple
					disableElevation
					disableFocusRipple
					disableTouchRipple
					variant="secondary"
					// onClick={() => router.push('/book-now')}
				>
					{/* <MotionSpanAnimated label="Download Full Menu PDF" /> */}
					Reserve a bay &rarr;
				</Button>
				<Box
					sx={{
						display: 'flex',
						gap: '12px',
						flexDirection: 'column',
					}}
				>
					<Typography variant="largeH1" weight="900" fontStyle="italic">
						The Kitchen
					</Typography>
					<Typography variant="base">
						This is a piece of text about the kitchen, it will tell the people
						how the kitchen. Introduce the chefs and their approach. It will aso
						tell information on when the kitchen is open for everyday for
						golfers and for just dinners. it will also show that the kitchen is
						on uber eats{' '}
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '12px',
						flexDirection: 'column',
					}}
				>
					<Typography variant="largeH1" weight="900" fontStyle="italic">
						The Bar
					</Typography>
					<Typography variant="base">
						This is a piece of text about the kitchen, it will tell the people
						how the kitchen. Introduce the chefs and their approach. It will aso
						tell information on when the kitchen is open for everyday for
						golfers and for just dinners. it will also show that the kitchen is
						on uber eats{' '}
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}
