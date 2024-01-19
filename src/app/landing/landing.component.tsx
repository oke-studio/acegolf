'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { LandingHero } from './components/landingHero/landingHero.component';
import { VideoLandingHero } from './components/video/videoLandingHero.component';

import { LandingPromotionMailingSection } from './components/promotionMailing/landingPromotionMailingSection.component';
import { LandingInfoSection } from './components/landingInfo/landingInfoSection.component';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';

import { WhatsTheVibe } from './components/whatsTheVibe/whatsTheVibe.component';
import { LandingHowItWorks } from './components/howItWorks/landingHowItWorks.component';

export default function Landing() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  //animation functions
  ////Hero Landing tracking////
  //get and track scroll progress with offset amount
  const videoSectionAsReference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoSectionAsReference,
    offset: ['start end', 'start start'],
  });

  //mapping scroll progress to actual
  const heroOpacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);
  //const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <Box
      sx={{
        backgroundColor: '#171717',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          maxHeight: 'fit-content',
        }}
      >
        <Box
          component={motion.div}
          sx={{
            position: 'sticky',
            top: '100px',
          }}
          style={{ opacity: heroOpacity }}
        >
          <LandingHero />
        </Box>
        <Box
          sx={{
            position: 'sticky',
            top: '0px',
          }}
          component={motion.div}
          ref={videoSectionAsReference}
        >
          <VideoLandingHero />
        </Box>
      </Box>

      <LandingHowItWorks />

      <LandingInfoSection />

      <WhatsTheVibe />

      <LandingPromotionMailingSection />

      <NintendoSwitch />
    </Box>
  );
}
