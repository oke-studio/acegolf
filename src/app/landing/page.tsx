'use client';

import * as React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Button, styled } from '@mui/material';
import { Header } from '@/components/Header/header.component';
import { TopBanner } from '@/components/topBanner/topBanner.component';
import { ImageWithBackdrop } from './components/backdrop/imageBackdrop.component';
import { TextWithBackdrop } from './components/backdrop/textBackdrop.component';
import { East } from '@mui/icons-material';

import { TigerImage } from './components/tigerImage/tigerImage.component';
import Image from 'next/image';
import { Noise } from '@/util/Noise';
import { LandingTabs } from './components/tabSection/landingTabs.component';

const MapSVG = () => (
  <svg
    width="39"
    height="34"
    viewBox="0 0 39 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.625 32.5L2 26.6875V1.5L13.625 7.3125M13.625 32.5L25.25 26.6875M13.625 32.5V7.3125M13.625 7.3125L25.25 1.5M25.25 26.6875L36.875 32.5V7.3125L25.25 1.5M25.25 26.6875V1.5"
      stroke="black"
      strokeWidth="2.58333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ParkingSVG = () => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1771 5.48047H10.9031C9.89304 5.48047 9.07422 6.29929 9.07422 7.30934V25.6891C9.07422 26.6991 9.89304 27.518 10.9031 27.518C11.9131 27.518 12.732 26.6991 12.732 25.6891V19.5891H17.1771C20.8975 19.5891 23.9243 16.5624 23.9243 12.842V12.2276C23.9243 8.50728 20.8975 5.48047 17.1771 5.48047ZM20.2666 12.8421C20.2666 14.5456 18.8807 15.9315 17.1772 15.9315H12.732V9.13829H17.1772C18.8808 9.13829 20.2666 10.5242 20.2666 12.2277V12.8421Z"
      fill="white"
    />
    <rect
      x="1"
      y="1"
      width="31"
      height="31"
      rx="6"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

const HowItWorksSection = () => {
  const { palette, typography } = useTheme();

  const StyledButton = styled(Button)(
    ({ theme }) => `
        color: white;
        gap: 12px;
        font-size: 24px;
        text-transform: none;
        background-color: #529DC8;
        width: max-content;
        font-style: bold;
  `,
  );
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        backgroundColor: palette.primary.main,
        height: '700px',
        fontFamily: typography.fontFamily,
      }}
    >
      <Box sx={{ margin: '28px auto', maxWidth: '1084px', width: '100%' }}>
        <Box sx={{ display: 'flex', margin: 'auto 24px' }}>
          <Box>
            <Box
              sx={{
                fontWeight: '900',
                fontStyle: 'italic',
                color: 'black',
                fontSize: '120px',
              }}
            >
              {/* <Box>DRINKS</Box>
              <Box>FOOD</Box>
              <Box>& GOLF</Box> */}
            </Box>
            <Box
              sx={{
                color: 'white',
                ...typography.hero_medium,
                fontSize: '24px',
              }}
            >
              Something about indoor golf
              <br /> Learn about our facilities. <br /> Find your swing
            </Box>

            <StyledButton
              sx={{
                color: 'white',
                borderRadius: '33px',
                padding: '14px 14px',
                ...typography.hero_bold,
                fontSize: '24px',
              }}
            >
              How it Works
              <East />
            </StyledButton>
          </Box>

          <TigerImage />
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

const GolfLoungeCopyComponent = () => {
  const { palette, typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box
      sx={{
        fontFamily: typography.fontFamily,
        ...typography.hero_super_italic,
        fontSize: isMobile ? '48px' : '64px',
        // position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: '80%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0.2ch',
          }}
        >
          <Box>INDOOR</Box>
          <Box sx={{ position: 'relative', width: 'max-content' }}>
            <Box sx={{ position: 'absolute', top: '-15px', left: '-20px' }}>
              <svg
                width="120%"
                height="100%"
                viewBox="0 0 255 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M179.908 75.782L180.237 78.2602L179.908 75.782ZM121.32 23.2751C119.941 23.355 118.888 24.5371 118.968 25.9155C119.048 27.2939 120.23 28.3466 121.609 28.2668L121.32 23.2751ZM129.06 0.397408C85.7651 -0.0940189 52.5944 6.15636 30.819 15.4732C19.9429 20.1266 11.7562 25.6105 6.61014 31.5447C1.43474 37.5127 -0.788178 44.114 0.799796 50.6898C2.36453 57.1694 7.48359 62.9904 15.585 67.8247C23.7123 72.6745 35.107 76.7011 49.8086 79.5082C79.2237 85.1247 122.337 85.945 180.237 78.2602L179.579 73.3037C121.984 80.948 79.4505 80.0777 50.7464 74.5969C36.3885 71.8554 25.6056 67.9817 18.1471 63.531C10.6626 59.0649 6.78769 54.1855 5.66009 49.5161C4.55572 44.9429 5.94214 39.9468 10.3876 34.8205C14.8624 29.6604 22.3081 24.5531 32.7858 20.0701C53.718 11.1141 86.1406 4.91057 129.003 5.39709L129.06 0.397408ZM180.237 78.2602C200.115 75.622 218.494 70.4413 231.902 64.2745C238.595 61.1964 244.164 57.8203 248.066 54.3054C251.891 50.8601 254.552 46.8755 254.359 42.5948C254.16 38.1682 250.992 34.5672 245.88 31.7802C240.733 28.974 233.088 26.6738 222.68 24.9784C201.825 21.5812 169.153 20.504 121.32 23.2751L121.609 28.2668C169.315 25.503 201.559 26.6037 221.876 29.9133C232.054 31.5712 239.06 33.7566 243.487 36.1702C247.949 38.603 249.28 40.956 249.364 42.8196C249.455 44.8291 248.183 47.471 244.72 50.5903C241.334 53.6401 236.26 56.7668 229.813 59.7319C216.943 65.6513 199.063 70.7178 179.579 73.3037L180.237 78.2602Z"
                  fill="#EB8B32"
                />
              </svg>
            </Box>
            GOLF
          </Box>
        </Box>
        <Box>LOUNGE!</Box>
      </Box>
    </Box>
  );
};

export default function Home() {
  const { palette, typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box
      sx={{
        backgroundColor: '#171717',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: typography.fontFamily,
      }}
    >
      <Header
        navOptions={[
          { label: 'Menu', to: '/menu' },
          { label: 'How it works', to: '/how-it-works' },
          { label: 'About', to: '/pricing' },
          { label: 'Parties & Events', to: '/about' },
        ]}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0px auto',
          maxWidth: '1084px',
          width: '100%',

          alignItems: 'center',
          padding: '12px 24px',
        }}
      >
        <Box
          sx={{
            borderRadius: '25px',
            backgroundColor: 'white',
            backgroundImage: `url(${Noise})`,
            width: '100%',
            color: 'black',
            padding: '48px 48px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              margin: '32px 32px',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box>
                <Image
                  src="/images/ace-landing-logo.svg"
                  width={250}
                  height={150}
                  alt="ace logo"
                />
              </Box>
              <Box component="span">BAYS BY TRACKMAN</Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  backgroundColor: palette.aceTeal,
                  color: 'white',
                  borderRadius: '6.82px',
                  padding: '4px 10px',
                  ...typography.hero_super,
                  fontSize: '32px',
                  width: 'max-content',
                }}
              >
                TORONTO&apos;S BEST
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  ...typography.hero_super,
                  fontSize: '48px',
                }}
              >
                INDOOR GOLF
                <br />
                LOUNGE
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  ...typography.hero_regular,
                  fontSize: isMobile ? '18px' : '24px',
                  flexDirection: 'column',
                  gap: '8px',
                  position: 'relative',
                }}
              >
                <Box sx={{ display: 'flex', gap: '18px' }}>
                  <MapSVG />
                  <Box
                    sx={{
                      textDecoration: 'underline',
                      color: palette.aceOrange,
                    }}
                  >
                    765 Address St, Toronto
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '1ch' }}>
                  Open Mon &rarr; Sat
                  <Box
                    sx={{
                      color: palette.aceOrange,
                    }}
                  >
                    9am - 12pm
                  </Box>{' '}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
              sx={{
                textTransform: 'none',
                backgroundColor: palette.aceOrange,
                color: 'white',
                borderRadius: '78px',
                ...typography.hero_semibold,
                fontSize: '53.72px',
                padding: '12px 60px',
              }}
            >
              Reserve a bay &rarr;
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: palette.aceOrange,
            display: 'flex',
            width: '100vw',
            justifyContent: 'center',
            position: 'relative',
            padding: '48px',
            ':before': {
              content: "''",
              position: 'absolute',
              top: '-150px',
              left: '0',
              right: '0',
              width: '100%',
              height: '70%',
              background:
                'no-repeat url(/images/landing-banner.svg) bottom center',
              backgroundSize: '100%',
            },
          }}
        >
          <LandingTabs />
        </Box>
      </Box>

      {/* <HowItWorksSection /> */}
    </Box>
  );
}
