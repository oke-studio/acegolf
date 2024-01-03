'use client';

import * as React from 'react';
import { useTheme, Box, useMediaQuery, InputBase, styled } from '@mui/material';
import { LandingCards } from '../landingCards/landingCards.component';
import { Typography } from '@/components/Typography/typography.component';
import { Card } from '@/components/Cards/cards.component';
import { Section } from '@/components/layout/section.component';
import dayjs from 'dayjs';
import { useBookNowForm } from '@/components/BookNowForm/hooks/useBookNowForm.hook';
import { BookNowForm } from '@/components/BookNowForm/bookNowForm.component';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  // 'label + &': {
  //   marginTop: theme.spacing(3),
  // },
  '& .MuiInputBase-input': {
    borderRadius: '12px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: `4px solid ${theme.palette.aceOrange}`,
    // fontSize: 16,
    padding: '12px 24px 12px 24px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),

    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export const LandingHowItWorks = () => {
  const { typography, palette } = useTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
  const isSmallDesktop = useMediaQuery('(max-width:950px)');
  const isLargeDesktop = useMediaQuery('(min-width:1440px)');

  const {
    handleBookNowButtonLink,
    handleDateTimePickerChange,
    handleReserveFormOnChange,
    reserveABayObject,
  } = useBookNowForm({
    guests: '1',
    duration: '1',
    date: dayjs(new Date()).format(),
    time: dayjs(new Date()).format(),
  });

  console.log(reserveABayObject);

  const HowItWorksCopy = [{ label: '', description: '' }];

  return (
    <Section
      SectionName="How it works Homepage"
      SectionWidth="normal"
      SectionColor=""
      CornerRadius="on"
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
        {/* How it works heading */}
        <Typography variant="largeH1" weight="900" fontStyle="italic">
          HOW IT WORKS
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '16px' : '4px',
          }}
        >
          {/* #1 */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="headingOne" weight="900" fontStyle="italic">
                1.
              </Typography>
              <Typography
                variant="headingTwo"
                weight="900"
                fontStyle="italic"
                sx={{
                  lineHeight: '65%',
                }}
              >
                Reserve A <br />
                Bay
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="large"
                weight="400"
                sx={{ padding: '0px 32px' }}
              >
                Whether you&apos;re a planner or procrastinator, we&apos;ve got
                options for you. Make a reservation in advance with our super
                simple online booking tool or just walk in and set up your tee
                time.
              </Typography>
            </Box>
          </Box>

          {/* #2 */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="headingOne" weight="900" fontStyle="italic">
                2.
              </Typography>
              <Typography
                variant="headingTwo"
                weight="900"
                fontStyle="italic"
                sx={{
                  lineHeight: '65%',
                }}
              >
                Set Up And
                <br /> Tee Up
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="large"
                weight="400"
                sx={{ padding: '0px 32px' }}
              >
                Whether you&apos;re a planner or procrastinator, we&apos;ve got
                options for you. Make a reservation in advance with our super
                simple online booking tool or just walk in and set up your tee
                time.
              </Typography>
            </Box>
          </Box>

          {/* #3 */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="headingOne" weight="900" fontStyle="italic">
                3.
              </Typography>
              <Typography
                variant="headingTwo"
                weight="900"
                fontStyle="italic"
                sx={{
                  lineHeight: '65%',
                }}
              >
                Start <br />
                Swingin&apos;
              </Typography>
            </Box>
            <Typography
              variant="large"
              weight="400"
              fontStyle="normal"
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="base">
                Whether you&apos;re a planner or procrastinator, we&apos;ve got
                options for you. Make a reservation in advance with our super
                simple online booking tool or just walk in and set up your tee
                time.
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Card
          CardTitle="Book a bay with friends"
          ColorVariant="dark"
          buttonOne={{
            children: (
              <Typography variant="base">
                <a href={handleBookNowButtonLink()} target="_blank">
                  Find a Bay&nbsp;
                </a>
              </Typography>
            ),
            variant: 'primary',
          }}
          BackgroundColor="transparent"
          sx={{
            borderColor: '#36DAD5',
            borderWidth: '6px',
            borderStyle: 'solid',
          }}
        >
          <BookNowForm
            handleDateTimePickerChange={handleDateTimePickerChange}
            handleReserveFormOnChange={handleReserveFormOnChange}
            reserveABayObject={reserveABayObject}
          />
        </Card>
      </Box>
    </Section>
  );
};
