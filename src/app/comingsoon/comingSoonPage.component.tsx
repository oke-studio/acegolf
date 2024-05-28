'use client';

import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material';

import { ComingSoonInfoSection } from './components/comingSoonInfoSection/comingSoonInfoSection.component';
import { LogoMap } from './components/logoMap/logoMap.component';
import { NOISE_URL } from './components/noise/noise';

const backgroundColor = '#E6E8E9';

const PageWrapper = styled(Box)({
	backgroundColor: backgroundColor,
	//backgroundImage: NOISE_URL,
	height: '100vh',
	color: 'black',
	width: '100vw',
	overflow: 'hidden',
	position: 'relative',
});

const PageLayout = styled(Box)({
	display: 'flex',
	flexDirection: 'column',

	height: '100%',
});

const PageMobileLayout = styled(Box)({
	display: 'flex',
	//   justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
});

export default function ComingSoonPage() {
	const isMobile = useMediaQuery('(max-width:640px)');
	const openingDate = new Date('2023-12-19');
	const devDate = new Date('2023-11-01');
	const currentDate = new Date();

	const devToOpenDate = openingDate.getTime() - devDate.getTime();
	const currentToOpenDate = openingDate.getTime() - currentDate.getTime();

	var daysLeft = Math.floor(currentToOpenDate / (1000 * 60) / 1440);
	const daysTotal = Math.floor(devToOpenDate / (1000 * 60) / 1440);

	const currentToOpenDateProgress = Math.floor(
		((daysTotal - daysLeft) / daysTotal) * 100,
	);
	var timeDifference = Math.abs(currentToOpenDate) / 1000;

	const dayDifference = Math.floor(timeDifference / 86400);
	timeDifference -= dayDifference * 86400;

	const hourDifference = Math.floor(timeDifference / 3600) % 24;

	if (isMobile) {
		return (
			<PageWrapper>
				<PageMobileLayout>
					<Box
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							height: `${currentToOpenDateProgress}%`,
							background: '#171717',
						}}
					></Box>
					<ComingSoonInfoSection hours={hourDifference} days={dayDifference} />
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							overflow: 'hidden',
							position: 'relative',
							top: '100px',
							fill: 'white',
						}}
					>
						{[...Array(10)].map((_, index) => (
							<LogoMap key={index} />
						))}
					</div>
				</PageMobileLayout>
			</PageWrapper>
		);
	}

	return (
		<PageWrapper>
			<PageLayout>
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						bottom: 0,
						width: `${currentToOpenDateProgress}%`,
						background: '#171717',
						//backgroundImage: NOISE_URL,
					}}
				></Box>
				{/* <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            width: '100vw',
          }}
        >
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
        </div> */}
				<ComingSoonInfoSection hours={hourDifference} days={dayDifference} />

				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						overflow: 'hidden',
						position: 'relative',
						gap: '16px',
						top: '150px',
						fill: 'white',
						//mixBlendMode: 'difference',
					}}
				>
					{[...Array(18)].map((_, index) => (
						<LogoMap key={index} />
					))}
				</div>
			</PageLayout>
		</PageWrapper>
	);
}
