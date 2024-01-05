'use cleint';

import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '../Typography/typography.component';
import Image from 'next/image';

export const NintendoSwitch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '400px',
        height: '100%',
        width: '100%',
        color: 'black',
        ...(isMobile && { flexDirection: 'column' }),
        // backgroundColor: isMobile ? '#529DC8' : 'black',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#529DC8',
          width: '100%',
          borderRadius: isMobile ? '25px 25px 0px 0px' : '25px 0px 0px 0px',
          padding: '24px',
        }}
      >
        <Box sx={{ display: 'flex', height: '100%', gap: '24px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // width: '50%',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography variant="headingThree" weight="600">
                Join our Rewards program
              </Typography>
              <Typography variant="base" weight="500">
                Earn $6 on every booking
              </Typography>
            </Box>
            <Button variant="secondary" sx={{ marginTop: '24px' }}>
              Learn More &rarr;
            </Button>
          </Box>
          {/* <Box
            sx={{
              backgroundImage: 'url(/images/ace-banner-chromatic-white.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              maxWidth: '250px',
              width: '100%',
              height: 'auto',
            }}
          /> */}
          <Image
            src="/images/ace-banner-chromatic-white.jpg"
            height={350}
            width={250}
            alt="img"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '8px',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#EB8B32',
          width: '100%',
          borderRadius: isMobile ? '25px 25px 0px 0px' : '0px 25px 0px 0px',
          padding: '24px',
        }}
      >
        <Box sx={{ display: 'flex', height: '100%', gap: '24px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // width: '50%',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography variant="headingThree" weight="600">
                Talk to us about your party or event
              </Typography>
              <Typography variant="base" weight="500">
                We welcome group bookings and events
              </Typography>
            </Box>
            <Button variant="secondary" sx={{ marginTop: '24px' }}>
              Inquire Now &rarr;
            </Button>
          </Box>
          {/* <Box
            sx={{
              backgroundImage: 'url(/images/ace-banner-chromatic-white.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              maxWidth: '250px',
              width: '100%',
              height: 'auto',
            }}
          /> */}
          <Image
            src="/images/ace-banner-chromatic-white.jpg"
            height={350}
            width={250}
            alt="img"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '8px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
