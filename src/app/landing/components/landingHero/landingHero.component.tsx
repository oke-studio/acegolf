import * as React from 'react';
import {
	Button,
	Box,
	useMediaQuery,
	// useTheme
} from '@mui/material';
import Image from 'next/image';
import { Section } from '@/components/layout/section.component';
import { Typography } from '@/components/Typography/typography.component';
import { useRouter } from 'next/navigation';
import Picture1 from '../../../../../public/images/Spin-photo1.png';
import Picture2 from '../../../../../public/images/Spin-photo2.png';
import Picture3 from '../../../../../public/images/Spin-photo3.png';
import Picture4 from '../../../../../public/images/Spin-photo4.png';
import { AceImage } from '@/components/aceImage/aceImage.component';

export const LandingHero = () => {
	const router = useRouter();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const side = false;
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
						style={{
							color: 'black',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
						}}
					>
						<Typography variant="poster" weight="900">
							TORONTO’S
						</Typography>

						<Box
							sx={{
								display: 'flex',
								marginBottom: '-13px',
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
								}}
							>
								COOLEST
							</Typography>
							<Typography variant="poster" weight="900">
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
			<Box
				sx={{
					width: '50%',
					maxWidth: '100%',
					height: '100%',
					position: 'absolute',
					top: '0px',
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					gridTemplateRows: '1fr 1fr',
					...(side ? { left: '0px' } : { right: '0px' }),
				}}
			>
				<AceImage
					AceImageSrc="/images/Spin-photo4.png"
					AceImageAspectRatio="1.137"
					AceImageWidth="100%"
					BackCutout={true}
					BackCutoutColor={theme.palette.sharpTeal}
					sx={{
						gridColumn: '2 / span 1',
						gridRow: '2 / span 1',
					}}
				></AceImage>

				<AceImage
					AceImageSrc="/images/Spin-photo2.png"
					AceImageAspectRatio="0.710"
					AceImageWidth="100%"
					BackCutout={true}
					BackCutoutColor={theme.palette.sharpTeal}
					sx={{
						gridColumn: '3 / span 1',
						gridRow: '2 / span 1',
					}}
				></AceImage>

				<AceImage
					AceImageSrc="/images/Spin-photo3.png"
					AceImageAspectRatio="1/1"
					AceImageWidth="100%"
					BackCutout={true}
					BackCutoutColor={theme.palette.sharpTeal}
					sx={{
						gridColumn: '4 / span 1',
						gridRow: '2 / span 1',
					}}
				></AceImage>

				<AceImage
					AceImageSrc="/images/Spin-photo1.png"
					AceImageAspectRatio="0.637"
					AceImageWidth="100%"
					BackCutout={true}
					BackCutoutColor={theme.palette.sharpTeal}
					sx={{
						gridColumn: '4 / span 1',
						gridRow: '1 / span 1',
					}}
				></AceImage>
			</Box>
		</Section>
	);
};
