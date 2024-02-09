'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import {
	Box,
	styled,
	Tab,
	Tabs,
	useTheme,
	Button,
	useMediaQuery,
} from '@mui/material';

import { Typography } from '@/components/Typography/typography.component';
import { PageTitleSection } from '@/components/layout/pageTitleSection.componenet';

export default function HiwPageTitle() {
	const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<PageTitleSection
			SectionName="How it works page title"
			SectionWidth="fullViewport"
			SectionHeight="fit-content"
			SectionColor=""
			CornerRadius={false}
			ScrollAnimations={false}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: isMobile ? 'center' : '',
					gap: '12px',
					position: 'relative',
					zIndex: '2',
					...(isMobile && { flexDirection: 'column', flexWrap: 'wrap' }),
					color: 'white',
				}}
			>
				{/* <svg
					width={'1440'}
					height={'431'}
					// viewBox={`0 0 ${width} ${height}`}
					viewBox={'0 0 1440 431'}
					fill="none"
					// preserveAspectRatio="xMidYMid meet"
				>
					<path
						strokeWidth="108.713"
						stroke="#EB8B32"
						fill="#EB8B32"
						d="M588.703 362.745C393.517 327.179 225.297 265.439 -1.5 296.655L-1.5 -5.5L1445 -5.49997L1445 350.012C1445 418 1160.07 259.651 877.117 232.823C596.683 206.235 964.514 431.226 588.703 362.745Z"
					/>
				</svg> */}
				<Typography
					variant="poster"
					weight="900"
					fontStyle="italic"
					sx={{
						textWrap: 'wrap',
						textAlign: 'center',
						flex: 1,

						width: isMobile ? '100%' : '50%',
					}}
				>
					HOW DOES
					<br />
					IT WORK
				</Typography>

				<Typography
					variant="large"
					alignSelf="center"
					sx={{
						width: isMobile ? '100%' : '50%',
					}}
				>
					Swing into flavour with our culinary delights. This is a piece of text
					about the food inspiration. it will tell the people what to expect
					with menu.
				</Typography>
			</Box>
		</PageTitleSection>
	);
}
