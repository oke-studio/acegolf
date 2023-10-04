'use client';
import * as React from 'react';
import {
  Box,
  Link,
  styled,
  linkClasses,
  typographyClasses,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { FooterGolf } from './components/footer-golf-arrangement/footerGolfArrangement.component';

const StyledLinks = styled(Link)(({ theme: t }) => ({
  color: 'white',
  ':hover': {
    color: t.palette.primary.main,
  },
})) as typeof Link;

const FooterLinksArray = [
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Event Enquiries',
    to: '/about',
  },
  {
    name: 'Gift Cards',
    to: '/about',
  },
  {
    name: 'Locations',
    to: '/about',
  },
  {
    name: 'Careers',
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
];

const StyledLinksWrapper = styled(Box)({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const FooterSocialsImages = [
  {
    src: '/images/facebook-logo.svg',
    to: 'https://www.instagram.com/acegolfbar/',
  },
  { src: '/images/linkedin-logo.svg', to: '/about' },
  { src: '/images/instagram-logo.svg', to: '/about' },
];

export const CommonFooterLinks = () => {
  const isMobile = useMediaQuery('(max-width:640px)');
  const { typography, palette } = useTheme();

  if (isMobile) {
    const MobileFooterLinksArray = [
      { name: 'Event Enquiries', to: '/about' },
      { name: 'Gift Cards', to: '/about' },
      { name: 'Locations', to: '/about' },
      { name: 'Privacy Policy', to: '/about' },
      { name: 'Terms and Conditions', to: '/about' },
    ];
    return (
      <Box
        sx={{
          margin: '32px auto 16px auto',
          minWidth: '90%',
          // backgroundColor: 'white',
          display: 'flex',
          minHeight: 'inherit',
          justifyContent: 'center',
          gap: '24px',
          ...typography.hero_light,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <StyledLinksWrapper sx={{ alignItems: 'center', gap: '8px' }}>
              <Image
                src="/images/ace-golf-logo-white.svg"
                alt="ace golf logo"
                width={100}
                height={100}
              />
              Address
            </StyledLinksWrapper>
            {/* <StyledLinksWrapper>Address</StyledLinksWrapper> */}
            <StyledLinksWrapper sx={{ gap: '16px' }}>
              {MobileFooterLinksArray.map((link, index) => (
                <Link
                  key={`first_link_column_${index}`}
                  href={link.to}
                  underline="none"
                  color="white"
                >
                  {link.name}
                </Link>
              ))}
            </StyledLinksWrapper>
            <StyledLinksWrapper sx={{ flexDirection: 'column', gap: '12px' }}>
              <Box>Find Us On:</Box>
              <Box
                sx={{ display: 'flex', gap: '10px', justifyContent: 'center' }}
              >
                {FooterSocialsImages.map((image, index) => (
                  <Link
                    key={index}
                    href={image.to}
                    rel="noopener"
                    target="_blank"
                  >
                    <Image
                      src={image.src}
                      alt="social image"
                      key={index}
                      width={40}
                      height={40}
                    />
                  </Link>
                ))}
              </Box>
            </StyledLinksWrapper>
            <StyledLinksWrapper
              sx={{
                typography: typography.hero_super,
                fontSize: '14px',
                // display: 'flex',
                // justifyContent: 'end',
                // alignItems: 'flex-end',
                // flexDirection: 'column',
              }}
            >
              <Box>&copy;ACE Golf 2023</Box>
              <Box>Made by the bestest team ever</Box>
            </StyledLinksWrapper>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        margin: '32px auto 32px auto',
        minWidth: '90%',
        // backgroundColor: 'white',
        display: 'flex',
        minHeight: 'inherit',
        justifyContent: 'end',
        gap: '24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '68px',
            justifyContent: 'end',
            flexDirection: 'row',
          }}
        >
          <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            {FooterLinksArray.slice(0, 3).map((link, index) => (
              <StyledLinks
                key={`first_link_column_${index}`}
                href={link.to}
                underline="none"
                color="white"
                sx={{
                  '&:hover': {
                    color: palette.primary.main,
                  },
                  mixBlendMode: 'difference',
                }}
              >
                {link.name}
              </StyledLinks>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            {FooterLinksArray.slice(3, 5).map((link, index) => (
              <Link
                key={`second_link_column_${index}`}
                href={link.to}
                underline="none"
                color="white"
                sx={{
                  '&:hover': {
                    color: palette.primary.main,
                  },
                  mixBlendMode: 'difference',
                }}
              >
                {link.name}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            {FooterLinksArray.slice(5, 7).map((link, index) => (
              <Link
                key={`third_link_column_${index}`}
                href={link.to}
                underline="none"
                color="white"
                sx={{
                  '&:hover': {
                    color: palette.primary.main,
                  },
                  mixBlendMode: 'difference',
                }}
              >
                {link.name}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Box>Find Us On:</Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              {FooterSocialsImages.map((image, index) => (
                <Link
                  key={index}
                  href={image.to}
                  rel="noopener"
                  target="_blank"
                >
                  <Image
                    src={image.src}
                    alt="social image"
                    key={index}
                    width={40}
                    height={40}
                  />
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            fontWeight: typography.fontWeightBold,
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'flex-end',
            mixBlendMode: 'difference',
            flexDirection: 'column',
          }}
        >
          <Box>&copy;ACE Golf 2023</Box>
          <Box>Made by the bestest team ever</Box>
        </Box>
      </Box>
    </Box>
  );
};

export const FooterLinks = () => {
  const { typography } = useTheme();

  return (
    <Box
      sx={{
        fontFamily: typography.fontFamily,
        display: 'flex',
        minHeight: '500px',
        width: '100%',
        ...typography.hero_light,
        fontSize: '14px',
        color: 'white',
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      <CommonFooterLinks />
      <FooterGolf />
    </Box>
  );
};
