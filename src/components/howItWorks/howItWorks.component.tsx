'use client';

import * as React from 'react';
import { useTheme, Box, useMediaQuery } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import { Section } from '@/components/layout/section.component';

const HowItWorksInfoBox = ({
  number,
  label,
  description,
}: {
  number: string;
  label: React.ReactNode;
  description: React.ReactNode;
}) => {
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
      </Box>
    </Box>
  );
};

export const HowItWorks = ({ isLanding = false }: { isLanding?: boolean }) => {
  const { typography, palette, breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.up('sm'));

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
            gap: '12px',
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
          />
        </Box>
      </Box>
    </Section>
  );
};
