import * as React from 'react';
import {
  Button,
  Box,
  styled,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { Section } from '@/components/layout/section.component';
import { orange } from '@mui/material/colors';
import { Typography } from '../../../../../typography.component';

export const LandingHero = () => {
  return (
    <Section
      SectionName="Landing Hero"
      SectionWidth="normal"
      SectionColor="white"
      CornerRadius="on"
      sx={{}}
    >
      {/* Hero Container*/}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '36px',
        }}
      >
        {/* Hero Title Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingRight: '15%',
          }}
        >
          {/* Trackman Logo */}
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Image
              //expose svg to have the logo scale accordingly
              src="/images/powered-by-Trackman-black-web.png"
              width={219}
              height={73}
              alt="Powered by Trackman Logo"
            />
          </Box>

          {/* Hero Text */}
          <Box
            style={{
              color: 'black',
              fontSize: '96px',
              fontWeight: '900',
              display: 'flex',
              flexDirection: 'column',
              //lineHeight: "0px",
              // letterSpacing: "-2.112px",
            }}
          >
            <Typography variant="poster" weight="900">
              TORONTO’S
            </Typography>

            <span
              style={{
                display: 'flex',
              }}
            >
              <Typography
                variant="poster"
                weight="900"
                sx={{
                  background: 'var(--sharp-teal, #36DAD5)',
                  display: 'flex',
                  flexBasis: 'fit-content',
                  transform: 'rotate(3deg)',
                  padding: '0px 20px',
                  alignItems: 'center',
                  flexShrink: '0',
                  color: '#FFF',
                }}
              >
                COOLEST
              </Typography>
              INDOOR
            </span>

            <Typography variant="poster" weight="900">
              GOLF LOUNGE!
            </Typography>
          </Box>
        </Box>

        {/* Hero-Info */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '24px',
          }}
        >
          <p
            style={{
              color: 'var(--orange, #EB8B32)',
              fontSize: '36px',
              fontWeight: '500',
            }}
          >
            {' '}
            588 Eastern Ave, Toronto
          </p>
          {/* Hero Button*/}
          <Button
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
            variant="primary"
            sx={{
              textTransform: 'none',
              backgroundColor: '#EB8B32',
              color: 'white',
              borderRadius: '78px',
              fontWeight: '500',
              fontSize: '32px',
              padding: '12px 60px',
              // position: 'relative',
              // top: '-60px',
              // zIndex: 0,
              ':hover:': {
                backgroundColor: '#eb8b32c9',
                color: 'white',
              },
              //
            }}
          >
            <a
              href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
              target="_blank"
            >
              {' '}
              Reserve a bay &rarr;
            </a>
          </Button>
        </Box>
      </Box>
    </Section>
  );
};