import * as React from 'react';
import { Button, Box, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { Section } from '@/components/layout/section.component';
import { Typography } from '@/components/Typography/typography.component';
import { useRouter } from 'next/navigation';
import { AceImage } from '@/components/aceImage/aceImage.component';
import { SectionImageGrid } from '@/components/ImageLayoutGrids/sectionImageGrid.component';
import { landingHeroImages } from './landingHeroImages';

export const LandingHero = () => {
	const router = useRouter();
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));
	const isTablet = useMediaQuery(breakpoints.down('md'));

	return (
		<Section
			SectionName="Landing Hero"
			SectionWidth="normal"
			SectionColor="white"
			CornerRadius={false}
			ScrollAnimations={false}
			sx={{
				//overflowX: 'hidden', // overflow iwll be handled by other containers
				position: 'relative',
			}}
		>
			{/* Hero Container*/}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'flex-start',
					gap: '36px',
					position: 'relative', //here to make sure zIndex works
					zIndex: '2', // 1 prepresents that parent section surface
					width: '100%', //
					overflowX: 'hidden', // temp for mobile to not overlow
				}}
			>
				{/* Hero Title Container */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'flex-start',
						paddingRight: '15%',
						width: '100%',
						...(isMobile && {
							paddingRight: '0%',
						}),
					}}
				>
					{/* Trackman Logo */}
					<Box
						sx={{
							display: 'flex',
						}}
					>
						<Image
							//expose svg to have the logo scale accordingly
							src="/images/powered-by-Trackman-black-web.png"
							width={219}
							height={73}
							alt="Powered by Trackman Logo"
						/>
					</Box>

					{/* Hero Text */}
					<Box
						sx={{
							color: 'black',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
							width: '100%',
							overflowWrap: 'break-word',
						}}
					>
						<Typography
							variant={isMobile ? 'headingOne' : 'poster'}
							weight="900"
							as="h1"
							sx={
								{
									// overflowWrap: 'break-word',
								}
							}
						>
							TORONTO’S
						</Typography>

						<Box
							sx={{
								display: 'flex',
								marginBottom: '-13px',
								...(isTablet && {
									flexWrap: 'wrap',
								}),
							}}
						>
							<Typography
								variant="largeH1"
								weight="900"
								sx={{
									position: 'relative',
									top: '-10px',
									background: theme => theme.palette.sharpTeal,
									display: 'flex',
									flexBasis: 'fit-content',
									transform: 'rotate(3deg)',
									padding: '4px 4px',
									alignItems: 'center',
									flexShrink: '0',
									color: '#FFF',
									borderRadius: '4px',
									marginTop: '5px',
									marginBottom: '5px',
									fontSize: '5rem',

									...(isMobile && {
										lineHeight: '50px',
										fontSize: '3rem',
									}),
								}}
							>
								COOLEST
							</Typography>
							<Typography
								variant="poster"
								weight="900"
								sx={{
									overflowWrap: 'break-word',
									width: '100%',
								}}
							>
								INDOOR
							</Typography>
						</Box>

						<Typography variant="poster" weight="900">
							GOLF LOUNGE!
						</Typography>
					</Box>
				</Box>

				{/* Hero-Info */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'flex-start',
						gap: '24px',
					}}
				>
					<Typography
						variant="headingTwo"
						weight="500"
						sx={{ color: t => t.palette.orange }}
					>
						{' '}
						588 Eastern Ave, Toronto
					</Typography>
					{/* Hero Button*/}
					<Button
						disableElevation
						disableFocusRipple
						disableRipple
						disableTouchRipple
						variant="primary"
						sx={
							{
								// textTransform: 'none',
								// backgroundColor: '#EB8B32',
								// color: 'white',
								// borderRadius: '78px',
								// fontWeight: '500',
								// fontSize: '32px',
								// padding: '12px 60px',
								// position: 'relative',
								// top: '-60px',
								// zIndex: 0,
								// ':hover:': {
								//   backgroundColor: '#eb8b32c9',
								//   color: 'white',
								// },
								//
							}
						}
						onClick={() => {
							router.push('/book-now');
						}}
					>
						<Typography variant="headingThree" weight="500">
							{/* <a
                href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
                target="_blank"
              >
                {' '} */}
							Reserve a bay &rarr;
							{/* </a> */}
						</Typography>
					</Button>
				</Box>
			</Box>

			{/* Sectional Photos */}
			<SectionImageGrid
				SectionImageGridWidth="rightHalf"
				ImageData={landingHeroImages}
			></SectionImageGrid>
		</Section>
	);
};
