import * as React from 'react';
import { Box, styled, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';

import { Card } from '@/components/Cards/cards.component';

const LandingCardsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

export const LandingCardsGrid = () => {
  //   return (
  //     <LandingCardsContainer>
  //       <Card
  //         buttonOne={{ children: 'Testing card', variant: 'primary' }}
  //         CardTitle="Card Test"
  //       />
  //     </LandingCardsContainer>
  //   );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleButtonLink = () => {
    return `https://www.google.com/maps/dir/581+Eastern+Avenue,+Toronto,+ON/588+Eastern+Ave,+Toronto,+ON+M4M+1E1/@43.6588624,-79.3396868,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d4cb75daac07a1:0x29f6fb44e2d79f3!2m2!1d-79.3374018!2d43.6586366!1m5!1m1!1s0x89d4cb75df38a6bd:0x71354217e063d446!2m2!1d-79.3369881!2d43.6590804!3e0?entry=ttu`;
  };

  return (
    <LandingCardsContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
          gap: '24px',
        }}
      >
        <Card
          buttonOne={{
            children: 'See Full Menu',
            variant: 'secondary',
            fullWidth: true,
          }}
          CardTitle="Tapas Style Menu"
          ColorVariant="dark"
          sx={{
            flexBasis: '110%',
            borderColor: '#36DAD5',
            borderWidth: '6px',
            borderStyle: 'solid',
          }}
        >
          <Box
            sx={{
              height: '400px',
            }}
          ></Box>
        </Card>
        <Card
          buttonOne={{ children: 'How it works', variant: 'secondary' }}
          buttonTwo={{ children: 'Find a Bay', variant: 'primary' }}
          CardTitle="Prices & Rates"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
          gap: '24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '24px',
            flexBasis: '60%',
          }}
        >
          <Card
            buttonOne={{ children: 'Learn More', variant: 'primary' }}
            CardTitle="Amenities"
            CardDescription="Information about trackman amenities"
          />
          <Card
            buttonOne={{ children: 'Get Coaching', variant: 'primary' }}
            CardTitle="Coaching"
            CardDescription="Information about coaching"
          />
        </Box>
        <Card
          buttonOne={{
            children: (
              <Typography variant="large">
                <a href={handleButtonLink()} target="_blank">
                  Show on Map↗
                </a>
              </Typography>
            ),
            variant: 'primary',
          }}
          CardTitle="Parking"
          CardDescription="Parking available at Heward Ave & Eastern Ave"
          ImageSrc="/images/Maps-ace-expanded.png"
        />
      </Box>
      <Box>
        <Card
          buttonOne={{ children: 'Learn More', variant: 'primary' }}
          CardTitle="Full Width Card"
          CardDescription="Content on card"
          fullWidth
          ImageSrc="/images/ace-landing-image-1.jpeg"
        />
      </Box>
    </LandingCardsContainer>
  );
};
