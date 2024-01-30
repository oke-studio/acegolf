import * as React from 'react';
import {
	Box,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	styled,
} from '@mui/material';
import { ExpandMoreRounded } from '@mui/icons-material';
import { Typography } from '@/components/Typography/typography.component';
import { useGetFAQ } from './hooks/useGetFAQ.hook';

interface StyledAccordionSummaryProps {
	children: React.ReactNode;
}

const StyledAccordion = styled(Accordion)(({ theme }) => ({
	backgroundColor: 'transparent',
	color: 'white',
	boxShadow: 'none',
	'& .Mui-expanded': {
		color: theme.palette.aceOrange,
	},
}));

const StyledAccordionSummary = styled((props: StyledAccordionSummaryProps) => (
	<AccordionSummary
		id="panel-header"
		aria-controls="panel-content"
		expandIcon={<ExpandMoreRounded sx={{ color: 'inherit' }} />}
		// disableGutters
		// elevation={0}
		// square
		{...props}
	/>
))(() => ({
	padding: '0px',

	'.MuiAccordionSummary-expandIconWrapper': {
		color: 'inherit',
	},
}));

const AccordionComponent = ({
	summary,
	details,
}: {
	summary: string;
	details: string;
}) => {
	return (
		<StyledAccordion>
			<StyledAccordionSummary>
				<Typography
					variant="headingFour"
					weight="600"
					sx={{ color: 'inherit' }}
				>
					{summary}
				</Typography>
			</StyledAccordionSummary>
			<AccordionDetails>
				<Typography variant="base" weight="400" sx={{ color: 'inherit' }}>
					{details}
				</Typography>
			</AccordionDetails>
		</StyledAccordion>
	);
};

export const FAQ = () => {
	const { faqData, isLoading, isError } = useGetFAQ();

	const faqReduced = faqData?.reduce(
		(acc, curr) => {
			const category = curr.categoryRefrence.faqCategoryName;

			if (acc[category]) {
				acc[category].push({
					question: curr.question,
					answer: curr.answer,
				});
			} else {
				acc[category] = [
					{
						question: curr.question,
						answer: curr.answer,
					},
				];
			}
			return {
				...acc,
			};
		},
		{} as { [x: string]: { answer: string; question: string }[] },
	);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '32px',
				alignItems: 'center',
				width: '100%',
				margin: 'auto 0',
				padding: '1.5rem',
			}}
		>
			<Typography variant="largeH1" weight="900">
				FAQ
			</Typography>
			<Typography variant="base" weight="500">
				Questions you wanted to ask but couldn&apos;t
			</Typography>
			{faqReduced &&
				Object.keys(faqReduced!).map((faq, index) => {
					const FAQStore = faqReduced[faq];
					return (
						<Box
							key={`${faq}_${index}`}
							sx={{ width: '100%', maxWidth: '600px' }}
						>
							<Typography
								variant="large"
								weight="700"
								sx={{ borderBottom: '2px dotted white', marginBottom: '2rem' }}
								key={`${faq}_${index}`}
							>
								{faq.toUpperCase()}
							</Typography>
							{FAQStore?.map((acc, i) => (
								<AccordionComponent
									summary={acc.question}
									details={acc.answer}
									key={`accordion_one_${i}`}
								/>
							))}
						</Box>
					);
				})}
		</Box>
	);
};
