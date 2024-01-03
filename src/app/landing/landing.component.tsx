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
import { LandingCards } from './components/landingCards/landingCards.component';
import { LandingHero } from './components/landingHero/landingHero.component';
import { VideoLandingHero } from './components/video/videoLandingHero.component';
import { LandingHowItWorks } from './components/howItWorks/landingHowItWorks.component';

import { AceBanner } from '../../components/aceBanner/aceBanner.component';
import { Promotions } from './components/promotions/promotions.component';
import { MailingList } from './components/mailingList/mailingList.component';
import { LandingPromotionMailingSection } from './components/promotionMailing/landingPromotionMailingSection.component';
import { LandingInfoSection } from './components/landingInfo/landingInfoSection.component';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';
import { LandingCardsGrid } from './components/landingCards/landingCardsGrid.component';
import { WhatsTheVibe } from './components/whatsTheVibe/whatsTheVibe.component';

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
        // backgroundColor: '#000',
        backgroundColor: '#171717',
        position: 'relative',
        //overflow: 'hidden',
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
      <Box
        sx={{
          position: 'sticky',
          top: '60px',
          overflowX: 'hidden',
        }}
      >
        <LandingHero />
      </Box>
      <Box
        sx={{
          position: 'sticky',
          top: '210px',
        }}
      >
        <VideoLandingHero />
      </Box>

      <LandingHowItWorks />

      <LandingInfoSection />
      {/* <WhatsTheVibe /> */}

      <LandingPromotionMailingSection />

      <NintendoSwitch />
    </Box>
  );
}
