'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';
import { Section } from '@/components/layout/section.component';
import { HowItWorksInfoBox } from './components/howItWorksInfo/howItWorksInfo.component';

export const HowItWorks = ({ isLanding = false }: { isLanding?: boolean }) => {
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
  );
};
