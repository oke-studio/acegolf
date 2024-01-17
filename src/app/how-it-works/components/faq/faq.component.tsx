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

const AccordionOne: { summary: string; details: string }[] = [
  {
    summary: 'Header',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
];

const AccordionTwo: { summary: string; details: string }[] = [
  {
    summary: 'Header',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
];

export const FAQ = () => {
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
      <Box>
        <Typography
          variant="large"
          weight="700"
          sx={{ borderBottom: '2px dotted white', marginBottom: '2rem' }}
        >
          SECTION TITLE
        </Typography>
        {AccordionOne.map((acc, index) => (
          <AccordionComponent
            summary={acc.summary}
            details={acc.details}
            key={`accordion_one_${index}`}
          />
        ))}
      </Box>
      <Box>
        <Typography
          variant="large"
          weight="700"
          sx={{ borderBottom: '2px dotted white', marginBottom: '2rem' }}
        >
          SECTION TITLE
        </Typography>
        {AccordionTwo.map((acc, index) => (
          <AccordionComponent
            summary={acc.summary}
            details={acc.details}
            key={`accordion_two_${index}`}
          />
        ))}
      </Box>
    </Box>
  );
};
