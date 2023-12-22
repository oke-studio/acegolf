'use client';

import * as React from 'react';
import { Box, useTheme, Button } from '@mui/material';

import { Typography } from '../../../typography.component';

import { FooterLinks } from './footer-links/footerLinks.component';

const FooterLinksArray = [
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Careers',
    to: '/about',
  },
  {
    name: 'Event & Parties',
    to: '/about',
  },
  {
    name: 'Privacy Policy',
    to: '/about',
  },
  {
    name: 'Terms & Conditions',
    to: '/about',
  },
  {
    name: 'Pricing',
    to: '/about',
  },
  {
    name: 'Menu',
    to: '/about',
  },
  {
    name: 'How it Works',
    to: '/about',
  },
  {
    name: 'Membership',
    to: '/about',
  },
  {
    name: 'Coaching',
    to: '/about',
  },
];

export const FooterV2 = () => {
  const { typography } = useTheme();
  // console.log(inputClasses);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        fontFamily: typography.fontFamily,
        zIndex: 5,
        position: 'relative',
        padding: '64px 0px',
        alignItems: 'end',
      }}
    >
      {/* <Box sx={{}} /> */}
      <Box sx={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
        {/* Links */}
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            {FooterLinksArray.slice(0, 5).map((link, index) => (
              <Typography variant="base" key={`link_${index}`}>
                {link.name}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            {FooterLinksArray.slice(5).map((link, index) => (
              <Typography variant="base" key={`link_${index}`}>
                {link.name}
              </Typography>
            ))}
          </Box>
        </Box>
        {/* Logo and Socials */}
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <Box>Logo</Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="miniscule">2023 Ace Golf Bar</Typography>
            <Typography variant="miniscule">
              588 Eastern Ave, Toronto
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Typography variant="base">Instagram</Typography>
          <Typography variant="base">Tiktok</Typography>
        </Box>

        <Typography variant="miniscule">
          Designed & Developed by @oke.studio
        </Typography>
      </Box>
    </Box>
  );
};
