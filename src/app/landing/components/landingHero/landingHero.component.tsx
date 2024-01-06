import * as React from 'react';
import { Button, Box, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { Section } from '@/components/layout/section.component';
import { Typography } from '@/components/Typography/typography.component';
import { useRouter } from 'next/navigation';

export const LandingHero = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Section
      SectionName="Landing Hero"
      SectionWidth="normal"
      SectionColor="white"
      CornerRadius={false}
      ScrollAnimations={false}
      sx={{
        overflowX: 'hidden',
      }}
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
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <Typography variant="poster" weight="900">
              TORONTO’S
            </Typography>

            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Typography
                variant="poster"
                weight="900"
                sx={{
                  background: theme.palette.sharpTeal,
                  display: 'flex',
                  flexBasis: 'fit-content',
                  transform: 'rotate(3deg)',
                  padding: '0px 4px',
                  alignItems: 'center',
                  flexShrink: '0',
                  color: '#FFF',
                  borderRadius: '4px',
                  marginTop: '15px',
                  marginBottom: '15px',
                }}
              >
                COOLEST
              </Typography>
              <Typography variant="poster" weight="900">
                INDOOR
              </Typography>
            </Box>

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
          <Typography
            variant="headingTwo"
            weight="500"
            sx={{ color: t => t.palette.orange }}
          >
            {' '}
            588 Eastern Ave, Toronto
          </Typography>
          {/* Hero Button*/}
          <Button
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
            variant="primary"
            sx={
              {
                // textTransform: 'none',
                // backgroundColor: '#EB8B32',
                // color: 'white',
                // borderRadius: '78px',
                // fontWeight: '500',
                // fontSize: '32px',
                // padding: '12px 60px',
                // position: 'relative',
                // top: '-60px',
                // zIndex: 0,
                // ':hover:': {
                //   backgroundColor: '#eb8b32c9',
                //   color: 'white',
                // },
                //
              }
            }
            onClick={() => {
              router.push('/book-now');
            }}
          >
            <Typography variant="headingThree" weight="500">
              {/* <a
                href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
                target="_blank"
              >
                {' '} */}
              Reserve a bay &rarr;
              {/* </a> */}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Section>
  );
};
