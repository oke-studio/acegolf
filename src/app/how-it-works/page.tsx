'use client';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';
import FullHowItWorks from './components/fullHowItWorks.component';

export default function HowItWorks() {
  return (
    <Box>
      <FullHowItWorks />
      <NintendoSwitch />
    </Box>
  );
}
