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
<<<<<<< HEAD
import { Typography } from '@/components/Typography/typography.component';
=======
import { Typography } from '../../../../../typography.component';
>>>>>>> f536566... merge conflicts
import { Promotions } from '../../components/promotions/promotions.component';
import { MailingList } from '../../components/mailingList/mailingList.component';

export const LandingPromotionMailingSection = () => {
  return (
    <Section
      SectionName="Landing Promotion & Mailing Section"
      SectionWidth="normal"
      SectionColor=""
      CornerRadius="on"
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Promotions />
<<<<<<< HEAD

      <MailingList />
=======
      
      <MailingList />

>>>>>>> f536566... merge conflicts
    </Section>
  );
};
