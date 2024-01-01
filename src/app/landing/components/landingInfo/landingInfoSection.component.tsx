import * as React from 'react';
import {
  Button,
  Box,
  styled,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { Section } from '@/components/layout/section.component';
import { orange } from '@mui/material/colors';
import { Typography } from '@/components/Typography/typography.component';
import { Promotions } from '../../components/promotions/promotions.component';
import { MailingList } from '../../components/mailingList/mailingList.component';
import { LandingCards } from '../landingCards/landingCards.component';
import { LandingCardsGrid } from '../landingCards/landingCardsGrid.component';

export const LandingInfoSection = () => {
  return (
    <Section
      SectionName="Landing Info Section"
      SectionWidth="fullViewport"
      SectionColor="#EB8B32"
      CornerRadius="on"
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <LandingCardsGrid />
      <LandingCards />
    </Section>
  );
};
