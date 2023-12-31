'use client';

import * as React from 'react';
import { Box, useTheme, useMediaQuery, Button } from '@mui/material';
import Image from 'next/image';
import { Typography } from '../Typography/typography.component';
import { motion } from 'framer-motion';

const FooterLinksArray = [
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Careers',
    to: '/careers',
  },
  {
    name: 'Event & Parties',
    to: '/events',
  },
  {
    name: 'Privacy Policy',
    to: '/privacy',
  },
  {
    name: 'Terms & Conditions',
    to: '/terms',
  },
  {
    name: 'Pricing',
    to: '/pricing',
  },
  {
    name: 'Menu',
    to: '/menu',
  },
  {
    name: 'How it Works',
    to: '/how-it-works',
  },
  {
    name: 'Membership',
    to: '/membership',
  },
  {
    name: 'Coaching',
    to: '/coaching',
  },
];

export const FooterV2 = () => {
  const { typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  const HEADING_FOUR_LINE_HEIGHT = typography.headingFour.lineHeight;

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
        // padding: '64px 0px',
        alignItems: 'end',
        backgroundImage: 'url(/images/ace-footer-v2.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPositionX: '-5rem',
        backgroundPositionY: '5rem',
        ...(isMobile && {
          backgroundPositionX: 'center',
          backgroundPositionY: 'bottom',
        }),
        backgroundOrigin: 'border-box',
      }}
    >
      {/* <Box sx={{}} /> */}

      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          flexDirection: 'column',
          // marginRight: '48px',
          padding: '64px',
        }}
      >
        {/* Links */}
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            {FooterLinksArray.slice(0, 5).map((link, index) => (
              // <Typography
              //   variant="headingFour"
              //   weight="400"
              //   key={`link_${index}`}
              // >
              //   {link.name}
              // </Typography>

              <Button
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  padding: '8px',
                  justifyContent: 'flex-start',

                  // borderRadius: '1rem',
                  borderWidth: '0px',
                  borderRightWidth: '0px',
                  borderRightStyle: 'solid',
                  borderRightColor: 'black',

                  // fontWeight: 600,
                  // color: '#000000',
                  // textTransform: 'uppercase',
                  // backgroundColor: '#ffffff',
                  transitionProperty: 'all',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: ['300ms', '300ms'],
                  ':hover': {
                    // borderRadius: '0.375rem',
                    boxShadow: theme => `-4px 4px 0px ${theme.palette.aceTeal}`,
                    transform: 'translateY(0.375rem) translateX(0.375rem)',
                    backgroundColor: 'transparent',
                    // borderRightWidth: '1px',
                    // borderRightStyle: 'solid',
                    // borderRightColor: theme => theme.palette.aceTeal,
                  },
                }}
                key={index}
              >
                <a href={`${link.to}`} target="__blank">
                  <Typography variant="headingFour" weight="400">
                    {link.name}
                  </Typography>
                </a>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            {FooterLinksArray.slice(5).map((link, index) => (
              <Button
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  padding: '8px',
                  justifyContent: 'flex-start',

                  // borderRadius: '1rem',
                  borderWidth: '0px',
                  borderRightWidth: '0px',
                  borderRightStyle: 'solid',
                  borderRightColor: 'black',

                  // fontWeight: 600,
                  // color: '#000000',
                  // textTransform: 'uppercase',
                  // backgroundColor: '#ffffff',
                  transitionProperty: 'all',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: ['300ms', '300ms'],
                  ':hover': {
                    // borderRadius: '0.375rem',
                    boxShadow: theme => `-4px 4px 0px ${theme.palette.aceTeal}`,
                    transform: 'translateY(0.375rem) translateX(0.375rem)',
                    backgroundColor: 'transparent',
                    borderRightWidth: '1px',
                    borderRightStyle: 'solid',
                    borderTopColor: theme => theme.palette.aceTeal,
                  },
                }}
                key={index}
              >
                <a href={`${link.to}`} target="__blank">
                  <Typography variant="headingFour" weight="400">
                    {link.name}
                  </Typography>
                </a>
              </Button>
            ))}
          </Box>
        </Box>
        {/* Logo and Socials */}
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <Box
            sx={{
              width: '100px',
              height: 'auto',
              backgroundImage: 'url(/images/ace-footer-v2-mini.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="small" weight="500">
              2023 Ace Golf Bar
            </Typography>
            <Typography variant="miniscule" weight="300">
              588 Eastern Ave, Toronto
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '24px', overflow: 'hidden' }}>
          <Button sx={{ color: 'white', padding: 0 }}>
            <a href="https://www.instagram.com/acegolfbar/" target="__blank">
              <Box
                component={motion.div}
                whileHover={{ y: `-${HEADING_FOUR_LINE_HEIGHT}` }}
                transition={{ ease: 'backInOut', duration: 0.5 }}
                className="h-[20px]"
                sx={{ height: HEADING_FOUR_LINE_HEIGHT }}
              >
                <Typography variant="headingFour" weight="400">
                  Instagram
                </Typography>
                <Typography
                  variant="headingFour"
                  weight="400"
                  sx={{
                    color: theme => theme.palette.aceOrange,
                    textAlign: 'start',
                  }}
                >
                  Instagram{' '}
                  <Image
                    src="/images/ace-footer-v2-mini.svg"
                    height={20}
                    width={20}
                    alt="somthing"
                  />
                </Typography>
              </Box>
            </a>
          </Button>

          <Button sx={{ color: 'white' }}>
            <a href="https://www.instagram.com/acegolfbar/" target="__blank">
              <Box
                component={motion.div}
                whileHover={{ y: `-${HEADING_FOUR_LINE_HEIGHT}` }}
                transition={{ ease: 'backInOut', duration: 0.5 }}
                className="h-[20px]"
                sx={{ height: HEADING_FOUR_LINE_HEIGHT }}
              >
                <Typography variant="headingFour" weight="400">
                  Tiktok
                </Typography>
                <Typography
                  variant="headingFour"
                  weight="400"
                  sx={{
                    color: theme => theme.palette.aceOrange,
                    textAlign: 'start',
                  }}
                >
                  Tiktok{' '}
                  <Image
                    src="/images/ace-footer-v2-mini.svg"
                    height={20}
                    width={20}
                    alt="somthing"
                  />
                </Typography>
              </Box>
            </a>
          </Button>
        </Box>

        <Typography variant="base" weight="300">
          Designed & Developed by @oke.studio
        </Typography>
      </Box>
    </Box>
  );
};
