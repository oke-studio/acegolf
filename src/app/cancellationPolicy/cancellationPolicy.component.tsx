'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  styled,
  Box,
  TextField,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Formik } from 'formik';

const PolicyInfoSectionWrapper = styled(Box)({
  display: 'flex',
  // flexDirection: "row",
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'new-hero',
});

const PolicyInfoWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export default function PolicyPage() {
  const isMobile = useMediaQuery('(max-width:640px)');

  const { typography, palette } = useTheme();

  return (
    <PolicyInfoSectionWrapper
      sx={{
        flexDirection: 'column',
        // gap: '',
        position: 'relative',
      }}
    >
      <PolicyInfoWrapper sx={{ marginTop: '32px', mixBlendMode: 'difference' }}>
        <Image
          src="/images/ace-golf-logo-white.svg"
          alt="ace golf logo"
          width={isMobile ? 150 : 150}
          height={isMobile ? 150 : 150}
        />
      </PolicyInfoWrapper>

      <PolicyInfoWrapper
        sx={{
          '& .MuiButtonBase-root': {
            color: 'white',
            backgroundColor: palette.primary.main,
            borderRadius: '78px',
            padding: '5px 15px',
            ':hover': {
              backgroundColor: '#959595',
            },
          },
          position: 'relative',
          ...(isMobile && { marginTop: '60px' }),

          ...(!isMobile && { top: '-40px', marginTop: '5px' }),
        }}
      >
        <Box
          sx={{
            marginTop: '40px',
            // ...typography.hero_extrabold,
            fontSize: '24px',
            color: 'white',
            mixBlendMode: 'difference',
          }}
        >
          Cancellation Policy:
        </Box>

        <Box
          sx={{
            marginTop: '40px',
            // ...typography.hero_medium,
            fontSize: '16px',
            color: 'white',
            width: '60%',
            // mixBlendMode: 'difference',
          }}
        >
          All bookings require payment ahead of time. Cancellations made within
          24 hours of the scheduled start time for any booking will result in a
          charge of 50% of the original booking fee. <br />
          <br />
          Cancellations made outside of 24 hours will result in a full refund.
          In case of any no shows for bookings, the full booking fee will be
          charged. <br />
          <br />
          This cancellation policy is to ensure availability of our bays. We ask
          that you provide sufficient notice to avoid any charges. Thank you
          very much for your cooperation.
          <br />
          <br />
        </Box>
        <Button
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          sx={{
            // ...typography.hero_semibold,
            fontSize: '24px',
            marginTop: '20px',
            textTransform: 'none',
          }}
        >
          <a
            href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
            target="_blank"
          >
            {' '}
            Early Reservation &rarr;
          </a>
        </Button>
      </PolicyInfoWrapper>
    </PolicyInfoSectionWrapper>
  );
}
