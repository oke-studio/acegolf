'use client';

import * as React from 'react';
import { Box } from '@mui/material';

import { FooterLinks } from './footer-links/footerLinks.component';

export const Footer = () => {
  // console.log(inputClasses);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',

        zIndex: 5,
        position: 'relative',
      }}
    >
      {/* BOTTOM links section */}
      <FooterLinks />
    </Box>
  );
};
