'use client'

import * as React from 'react'
import { useTheme, Box, useMediaQuery } from '@mui/material'
import { Typography } from '@/components/Typography/typography.component'
import { Section } from '@/components/layout/section.component'

const HowItWorksInfoBox = ({
	number,
	label,
	description,
	isLanding = false,
	miniInfoBoxOne,
	miniInfoBoxTwo,
}: {
	number: string
	label: React.ReactNode
	description: React.ReactNode
	isLanding?: boolean
	miniInfoBoxOne: { question: string; answer: string }
	miniInfoBoxTwo: { question: string; answer: string }
}) => {
	const MiniInfoBox = ({
		question,
		answer,
	}: {
		question: string
		answer: string
	}) => {
		return (
			<Box
				sx={{
					height: '250px',
					width: '250px',
					backgroundColor: theme => theme.palette.aceTeal,
					borderRadius: '20px',
					color: 'black',
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					padding: '1rem',
				}}
			>
				<Typography variant="base" weight="600">
					{question}
				</Typography>
				<Typography variant="base">{answer}</Typography>
			</Box>
		)
	}
	return (
		<Box sx={{ display: 'flex', flexDirection: 'row' }}>
			<Box sx={{ display: 'flex', alignItems: 'baseline' }}>
				<Typography variant="poster" weight="900" fontStyle="italic">
					{number}.
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '24px',
				}}
			>
				<Typography
					variant="headingOne"
					weight="900"
					fontStyle="italic"
					sx={{
						lineHeight: '65%',
					}}
				>
					{label}
				</Typography>
				<Typography
					variant="large"
					weight="400"
					// sx={{ padding: '0px 32px' }}
				>
					{description}
				</Typography>
				{!isLanding && (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-start',
							flexWrap: 'wrap',
							gap: '12px',
						}}
					>
						<MiniInfoBox
							question={miniInfoBoxOne.question}
							answer={miniInfoBoxOne.answer}
						/>
						<MiniInfoBox
							question={miniInfoBoxTwo.question}
							answer={miniInfoBoxTwo.answer}
						/>
					</Box>
				)}
			</Box>
		</Box>
	)
}

export const HowItWorks = ({ isLanding = false }: { isLanding?: boolean }) => {
	const { typography, palette, breakpoints } = useTheme()
	const isMobile = useMediaQuery(breakpoints.up('sm'))

	return (
		<Section
			SectionName="How it works Homepage"
			SectionWidth="normal"
			SectionColor=""
			CornerRadius
			SectionHeight="fit-content"
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '52px',
					color: '#FFF',
				}}
			>
				{isLanding && (
					// How it works heading
					<Typography variant="largeH1" weight="900" fontStyle="italic">
						HOW IT WORKS
					</Typography>
				)}

				<Box
					sx={{
						display: 'flex',
						flexDirection: isLanding ? 'row' : 'column',
						gap: '2rem',
					}}
				>
					{/* #1 */}
					<HowItWorksInfoBox
						number="1"
						label={
							<>
								Reserve A <br />
								Bay
							</>
						}
						description={
							<>
								Whether you&apos;re a planner or procrastinator, we&apos;ve got
								options for you. Make a reservation in advance with our super
								simple online booking tool or just walk in and set up your tee
								time.
							</>
						}
						miniInfoBoxOne={{
							question:
								'This will be a quick FAQ here. See pricing and Schedume',
							answer:
								'This will be a quick FAQ here. See pricing  and Schedume',
						}}
						miniInfoBoxTwo={{
							question:
								'This will be a quick FAQ here. See pricing and Schedume',
							answer:
								'This will be a quick FAQ here. See pricing  and Schedume',
						}}
					/>

					{/* #2 */}
					<HowItWorksInfoBox
						number="2"
						label={
							<>
								Set Up And
								<br /> Tee Up
							</>
						}
						description={
							<>
								Whether you&apos;re a planner or procrastinator, we&apos;ve got
								options for you. Make a reservation in advance with our super
								simple online booking tool or just walk in and set up your tee
								time.
							</>
						}
						miniInfoBoxOne={{
							question:
								'This will be a quick FAQ here. See pricing and Schedume',
							answer:
								'This will be a quick FAQ here. See pricing  and Schedume',
						}}
						miniInfoBoxTwo={{
							question:
								'This will be a quick FAQ here. See pricing and Schedume',
							answer:
								'This will be a quick FAQ here. See pricing  and Schedume',
						}}
					/>

					{/* #3 */}
					<HowItWorksInfoBox
						number="3"
						label={
							<>
								Start <br />
								Swingin&apos;
							</>
						}
						description={
							<>
								Whether you&apos;re a planner or procrastinator, we&apos;ve got
								options for you. Make a reservation in advance with our super
								simple online booking tool or just walk in and set up your tee
								time.
							</>
						}
						miniInfoBoxOne={{
							question:
								'This will be a quick FAQ here. See pricing and Schedume',
							answer:
								'This will be a quick FAQ here. See pricing  and Schedume',
						}}
						miniInfoBoxTwo={{
							question:
								'This will be a quick FAQ here. See pricing and Schedume',
							answer:
								'This will be a quick FAQ here. See pricing  and Schedume',
						}}
					/>
				</Box>
			</Box>
		</Section>
	)
}
