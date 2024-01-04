'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
  Box,
  styled,
  Button,
  ButtonProps,
  SxProps,
  Theme,
  useTheme,
  Typography,
} from '@mui/material';

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

type SectionWidthOptionsTypes = 'fullViewport' | 'normal' | 'small';
const SectionWidthOptions = {
  fullViewport: {
    //width: '100%',
    margin: '8px 0% 8px',
  },
  normal: {
    //width: '100%',
    //margin: isLargeDesktop ? '8px 3% 8px' : '15px 3% 8px',
    margin: '8px 3% 8px',
  },
  small: {
    //width: '100%',
    //margin: isLargeDesktop ? '8px 3% 8px' : '15px 3% 8px',
    margin: '8px 30% 8px',
  },
};

interface SectionProps {
  SectionName: string;
  SectionWidth: SectionWidthOptionsTypes;
  SectionHeight?: string;
  SectionColor: string;
  CornerRadius: boolean;
  ScrollAnimations: boolean;
  children?: React.ReactNode;
  sx?: SxProps;
}

export const Section = ({
  SectionName,
  SectionWidth,
  SectionHeight = 'fit-content',
  SectionColor,
  CornerRadius = true,
  ScrollAnimations = true,
  sx,
  children,
}: SectionProps) => {
  const SECTION = SectionWidthOptions[SectionWidth];
  //const CORNER = CornerRadiusOptions[CornerRadius];
  const staticRadius = '25px';

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const SectionAsReference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionAsReference,
    offset: ['start end', 'start start'],
  });
  const sectionScale = useTransform(scrollYProgress, [0, 0.75], [0.94, 1]);
  const animatedBorderRadius = useTransform(
    scrollYProgress,
    [0, 0.75],
    [80, 25],
  );

  return (
    <Box
      sx={{
        ...sx,
        ...SECTION,

        backgroundColor: `${SectionColor}`,
        padding: '5% 5%',
        height: `${SectionHeight}`,

        //work on container query after
        //containerType: "inline-size",
      }}
      // component="section"
      component={motion.div}
      ref={SectionAsReference}
      style={{
        // ...CORNER,
        ...(CornerRadius
          ? { borderRadius: animatedBorderRadius }
          : { borderRadius: staticRadius }),
        ...(ScrollAnimations && { scale: sectionScale }),
      }}
    >
      {children}
    </Box>
  );
};

//   @container (min-width:900){

//     .section{

//     }
//   }
