'use client';

import * as React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Button, styled } from '@mui/material';
import { Header } from '@/components/Header/header.component';
import { ImageWithBackdrop } from './components/backdrop/imageBackdrop.component';
import { TextWithBackdrop } from './components/backdrop/textBackdrop.component';
import { East } from '@mui/icons-material';

// import { TigerImage } from './components/tigerImage/tigerImage.component';
import Image from 'next/image';
import { Noise } from '@/util/Noise';
import { LandingTabs } from './components/tabSection/landingTabs.component';
import { LandingCards } from './components/landingCards/landingCards.component';
import { LandingHero } from './components/landingHero/landingHero.component';
import { VideoLandingHero } from './components/video/videoLandingHero.component';
import { LandingHowItWorks } from './components/howItWorks/howItWorks.component';

import { AceBanner } from '../../components/aceBanner/aceBanner.component';
import { Promotions } from './components/promotions/promotions.component';
import { MailingList } from './components/mailingList/mailingList.component';

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

export default function Landing() {
  const { palette, typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
  const isSmallDesktop = useMediaQuery('(max-width:950px)');
  const isLargeDesktop = useMediaQuery('(min-width:1440px)');

  return (
    <Box
      sx={{
        backgroundColor: '#171717',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: typography.fontFamily,
      }}
    >
      {/* <Header
        navOptions={[
          { label: 'Menu', to: '/menu' },
          { label: 'How it works', to: '/how-it-works' },
          { label: 'About', to: '/about' },
          { label: 'Parties & Events', to: '/pricing' },
        ]}
      /> */}
      <LandingHero />
      <VideoLandingHero />
      {/* Banner Iterlude */}
      <Box
        sx={{
          position: 'relative',
          //top: isMobile ? '-200px' : '-160px',
          //zIndex: '1',
        }}
      >
        <Box
          sx={{
            height: '500px',
            width: '100vw',
            ...(isMobile && { scale: '2' }),
          }}
        >
          <AceBanner
            width="100%"
            height="100%"
            viewBox="0 0 1440 400"
            pathProps={{
              d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1924 222',
              fill: '#EB8B32',
            }}
            text=" "
            textCount={1}
            strokeColor="#36DAD5"
          />
        </Box>

        <Box
          sx={{
            height: '500px',
            width: '100vw',
            position: 'relative',
            top: isMobile ? '-515px' : '-530px',
            ...(isMobile && { scale: '2' }),
          }}
        >
          <AceBanner
            width="100%"
            height="100%"
            viewBox="0 0 1440 400"
            pathProps={{
              d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1924 222',
            }}
            text="FOOD  DRINKS FUN "
            textCount={5}
            strokeColor="#171717"
          />
        </Box>
      </Box>
      {/* Orange Section */}
      <Box
        sx={{
          backgroundColor: '#EB8B32',
          backgroundSize: '100%',
          display: 'flex',
          width: '100vw',
          height: '2000px',
          justifyContent: 'center',
          padding: '0px 48px',
          position: 'relative',
          top: '-940px',
          right: 0,
          left: 0,
          alignContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* This is where the collages are */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'space-around',
            alignContent: 'space-around',
            width: '100vw',
            height: '1500px',
            flexWrap: 'wrap',
            background: isSmallDesktop
              ? 'url(/images/background-collage_928.svg)'
              : 'url(/images/background-collage_1226.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'fit',
          }}
        >
          {/* <Box
                sx={{
                  position: 'relative',
                  top: '-178px',
                  left: '-245px',
                  width: '437px',
                  height: '807px',
                  // width: isSmallDesktop ? '150px' :'200px',
                  // height:  isSmallDesktop ? '150px' :'200px',
                  //flex: '1 1 auto',
                  backgroundColor: 'aqua',
                  background: 'url(/images/collageexport/Tiger-woods.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'fit',
                  // rotate:  isMobile ? '-5deg' :'-10deg',
                }}
              ></Box>

            <Box
                sx={{
                  width: '825px',
                  height: '825px',
                  // width: isSmallDesktop ? '150px' :'200px',
                  // height:  isSmallDesktop ? '150px' :'200px',
                  //flex: '1 1 auto',
                  backgroundColor: 'aqua',
                  background: 'url(/images/collageexport/space.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'fit',
                  // rotate:  isMobile ? '-5deg' :'-10deg',
                }}
              ></Box>

            <Box
                sx={{
                  width: '433px',
                  height: '322px',
                  // width: isSmallDesktop ? '150px' :'200px',
                  // height:  isSmallDesktop ? '150px' :'200px',
                  //flex: '1 1 auto',
                  backgroundColor: 'aqua',
                  background: 'url(/images/collageexport/Drink.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'fit',
                  // rotate:  isMobile ? '-5deg' :'-10deg',
                }}
              ></Box> */}
        </Box>
        <Box
          sx={{
            zIndex: 2,
            position: 'relative',
            top: '-600px',
            width: '100vw',
            padding: '10px',
          }}
        >
          {/* <LandingTabs /> */}
          <LandingCards />
        </Box>
      </Box>

      {/* How it works, promotions, etc... */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          position: 'relative',
          top: '-790px',
          margin: isLargeDesktop ? '15px 10% 5px' : '15px 5% 5px',
        }}
      >
        <LandingHowItWorks />

        <Promotions />
        {/* mailing list comp */}
        <MailingList />
      </Box>

      {/* <HowItWorksSection /> */}
    </Box>
  );
}
