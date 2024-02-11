'use client';

import * as React from 'react';
import Image from 'next/image';
import { styled, Box, TextField, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Formik } from 'formik';
import { encode } from '@/util/encode';
import { TopBanner } from '@/components/topBanner/topBanner.component';
import { Typography } from '@/components/Typography/typography.component';

const ComingSoonForm = () => {
	const [isSubmit, setIsSubmit] = React.useState(false);
	const isMobile = useMediaQuery('(max-width:640px)');

	React.useEffect(() => {
		//console.log(isSubmit);
	}, [isSubmit]);

	return (
		<Formik
			initialValues={{ email: '' }}
			onSubmit={values => {
				//console.log(values);
				fetch('/', {
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: encode({ 'form-name': 'comingsoon-email', ...values }),
				})
					.then(() => setIsSubmit(true))
					.catch(e => alert(e));
			}}
			// validationSchema={}
			// validate={}
		>
			{props => {
				const {
					values,
					isSubmitting,
					handleSubmit,

					handleChange,
				} = props;

				return (
					<Box
						component="form"
						name="comingsoon-email"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						onSubmit={handleSubmit}
						method="post"
						autoComplete="off"
						sx={{ maxWidth: '400px', marginTop: '15px', marginBottom: '20px' }}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: '12px',
							}}
						>
							<input type="hidden" name="form-name" value="comingsoon-email" />
							<Typography
								variant="base"
								weight="400"
								sx={{
									textAlign: 'center',
									textTransform: 'uppercase',
									color: 'white',
									mixBlendMode: 'difference',
								}}
							>
								Join the Mailing List
							</Typography>
							<TextField
								// error={errors.email && touched.email}
								fullWidth
								id="email-form"
								type="email"
								name="email"
								placeholder="yourname@email.com"
								style={{ alignItems: 'center' }}
								disabled={isSubmit}
								onChange={handleChange}
								value={values.email}
								helperText="*BY CLICKING THE BUTTON ABOVE YOU ARE AGREEING ACEGOLF’S TERMS OF SERVICES AND TO RECEIVING MARKETING EMAILS FROM ACEGOLF. YOU ARE ABLE TO UNSUBSCRIBE AT ANY TIME BY CLICKING UNSUBSCRBE FROM ANY FUTURE MARKETING EMAILS. "
								sx={{
									gap: '12px',
									padding: '0px 12px',
									'.MuiInputBase-root': {
										justifyContent: 'flex-end',
										background: 'white',
										borderStyle: 'solid',
										borderWidth: '2px',
										height: '58px',
										paddingRight: '0px',
									},
									'.MuiInputBase-input': {
										color: '#373737',
										...(isSubmitting && { paddingLeft: '0px' }),

										width: isSubmitting ? '0' : '100%',
										fontSize: '12px',
									},
									'.MuiFormHelperText-root': {
										fontSize: isMobile ? '9px' : '10px',
										// color: 'black',
										textAlign: 'center',
										color: 'white',
										mixBlendMode: 'difference',
									},
									'.MuiOutlinedInput-notchedOutline': {
										border: 'none',
									},
									pointerEvents: isSubmitting ? 'none' : 'initial',
								}}
								// label="comingsoon email"
								InputProps={{
									endAdornment: (
										<motion.button
											animate={isSubmitting && { width: '100%' }}
											initial={{ width: '140px' }}
											transition={{ duration: 4, ease: 'easeInOut' }}
											style={{
												background: 'black',
												border: 'none',
												borderRadius: '12px',

												// paddingLeft: '12px',

												margin: '4px',
											}}
											type="submit"
											// onClick={() => buttonClick()}
											disabled={isSubmitting}
										>
											<Typography
												variant="base"
												weight="700"
												sx={{
													fontSize: '12px',
													paddingLeft: '24px',
													paddingRight: '24px',
													paddingTop: '14px',
													paddingBottom: '14px',
												}}
												whiteSpace="nowrap"
												overflow="hidden"
												color="white"
											>
												{isSubmitting
													? "WE'LL KEEP IN TOUCH! SEE YOU SOON!"
													: 'NOTIFY ME'}
											</Typography>
										</motion.button>
									),
									sx: { borderRadius: '12px' },
								}}
							/>
						</Box>
					</Box>
				);
			}}
		</Formik>
	);
};

const ComingSoonInfoSectionWrapper = styled(Box)({
	display: 'flex',
	// flexDirection: "row",
	alignItems: 'center',
	// alignSelf: 'center',
	// gridTemplateColumns: '1fr 2fr 1fr',
	justifyContent: 'center',
});

const TopBannerChoice = ({ isMobile }: { isMobile: boolean }) => {
	if (isMobile) {
		return (
			<TopBanner
				width="100%"
				height="100%"
				viewBox="0 0 1973 293"
				pathProps={{
					d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1972 102.502',
				}}
				text=" · COMING SOON · TORONTO'S BEST INDOOR GOLF LOUNGE  "
				textCount={3}
				strokeColor="#EB8B32"
			/>
		);
	}

	return (
		<TopBanner
			width="100%"
			height="100%"
			viewBox="0 0 1973 293"
			pathProps={{
				d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1972 102.502',
			}}
			text=" · COMING SOON · TORONTO'S BEST INDOOR GOLF LOUNGE  "
			textCount={3}
			strokeColor="#EB8B32"
		/>
	);
};

const ComingSoonInfoWrapper = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
});

export const ComingSoonInfoSection = ({
	hours,
	days,
}: {
	hours: number;
	days: number;
}) => {
	const { palette, breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));

	return (
		<ComingSoonInfoSectionWrapper
			sx={{
				flexDirection: 'column',
				// gap: '',
				position: 'relative',
			}}
		>
			<ComingSoonInfoWrapper
				sx={{ marginTop: '32px', mixBlendMode: 'difference' }}
			>
				<Image
					src="/images/ace-golf-logo-white.svg"
					alt="ace golf logo"
					width={isMobile ? 150 : 150}
					height={isMobile ? 150 : 150}
				/>
			</ComingSoonInfoWrapper>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					overflow: 'hidden',
					position: 'relative',
					width: '100%',

					...(isMobile && { transform: 'scale(3)', paddingLeft: '80px' }),
				}}
			>
				<TopBannerChoice isMobile={isMobile} />
			</div>

			<ComingSoonInfoWrapper
				sx={{
					'& .MuiButtonBase-root': {
						color: 'white',
						backgroundColor: palette.primary.main,
						borderRadius: '78px',
						padding: '5px 15px',
						':hover': {
							backgroundColor: '#959595',
						},
					},
					position: 'relative',
					...(isMobile && { marginTop: '60px' }),

					...(!isMobile && { top: '-40px', marginTop: '5px' }),
				}}
			>
				<Typography
					variant="headingFour"
					weight="800"
					sx={{
						color: 'white',
						mixBlendMode: 'difference',
					}}
				>
					OPENING DEC 2023
				</Typography>
				<Box
					sx={{
						fontSize: '16px',
						fontWeight: '600',
						color: 'white',
						mixBlendMode: 'difference',
					}}
				>
					<Box component="span" sx={{ color: palette.primary.main }}>
						{' '}
						{days}
					</Box>{' '}
					DAYS
					<Box component="span" sx={{ color: palette.primary.main }}>
						{' '}
						{hours}
					</Box>{' '}
					HOURS
				</Box>
				{/* hidden until open for early reservation */}
				{/* 
        <Button
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          sx={{
            fontSize: '24px',
            marginTop: '20px',
            textTransform: 'none',
          }}
        >
          <a
            href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
            target="_blank"
          >
            {' '}
            Early Reservation &rarr;
          </a> 
        </Button>
        */}
			</ComingSoonInfoWrapper>

			<ComingSoonForm />
		</ComingSoonInfoSectionWrapper>
	);
};
