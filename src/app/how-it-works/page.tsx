'use client';

import * as React from 'react';
import { Box, useTheme, useMediaQuery, Button } from '@mui/material';
import { TopOrange } from './components/topOrange/topOrange.component';
import { SimRooms } from './components/simRooms/simRooms.component';
import { Header } from '@/components/Header/header.component';
import { FrequentlyAskedQuestions } from './components/frequentlyAskedQuestions/frequentlyAskedQuestions.component';
import { ContactForm } from './components/contactForm/contactForm.component';

export default function Home() {
  const { palette, typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        position: 'relative',
        // overflow: 'hidden',
        fontFamily: typography.fontFamily,
      }}
    >
      <Header
        navOptions={[
          { label: 'Food + Drink', to: '/menu' },
          { label: 'Events', to: '/events' },
          { label: 'Pricing', to: '/pricing' },
          { label: 'About', to: '/about' },
        ]}
        // headerBackground="rgb(235, 139, 50)"
      />
      <TopOrange />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          margin: '102px auto',
          maxWidth: '1084px',
          width: '100%',
          //   height: isMobile ? '1150px' : '900px',
          alignItems: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
          }}
        >
          <Box
            sx={{
              ...typography.hero_super_italic,
              fontSize: isMobile ? '58px' : '120px',
              lineHeight: '70%',
            }}
          >
            <Box>HOW DOES</Box>
            <Box sx={{ marginLeft: '24px' }}>IT WORK?</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              ...typography.hero_medium,
              fontSize: '18px',
            }}
          >
            <Box component="span">
              We&apos;ve revolutionized the game by bringing the excitement of
              indoor golf to the heart of the city.
            </Box>
            <Box component="span">
              Rain or shine, day or night, our state-of-the-art simulators
              transport you to world-class courses, allowing you to swing your
              clubs without any weather limitations.{' '}
            </Box>
            <Box component="span">
              Say goodbye to soggy fairways and hello to an immersive golfing
              experience that will keep you entertained for hours.
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: palette.primary.main,
                textTransform: 'none',
                color: 'black',
                borderRadius: '33px',
                padding: '14px 14px',
                ...typography.hero_bold,
                fontSize: isMobile ? '20px' : '24px',
                ':hover': {
                  backgroundColor: '#529DC8',
                },
              }}
              fullWidth
              disableRipple
            >
              Learn More &darr;
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
          }}
        >
          <Box
            sx={{
              ...typography.hero_super_italic,
              fontSize: isMobile ? '58px' : '64px',
              lineHeight: '70%',
            }}
          >
            <Box>Swing By</Box>
            <Box sx={{ marginLeft: '24px' }}>Or Book Online!</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              ...typography.hero_medium,
              fontSize: '18px',
            }}
          >
            <Box component="span">
              Choose your session and book a simulator slot at ACE Golf, either
              by dropping in or via our easy online reservation system!
            </Box>
            <Box component="span">Check out our available sim rooms below!</Box>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: palette.primary.main,
                textTransform: 'none',
                color: 'black',
                borderRadius: '33px',
                padding: '14px 14px',
                ...typography.hero_super,
                fontSize: '18px',
                ':hover': {
                  backgroundColor: '#529DC8',
                },
              }}
              fullWidth
              disableRipple
            >
              Book Now! &rarr;
            </Button>
          </Box>
        </Box>

        <SimRooms />
        <FrequentlyAskedQuestions />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            gap: '62px',
          }}
        >
          <Box
            sx={{
              lineHeight: '70%',
              ...typography.hero_super_italic,
              fontSize: isMobile ? '68px' : '120px',
            }}
          >
            <Box>BECOME A</Box>
            <Box>MEMBER</Box>
          </Box>
          <Box
            sx={{
              ...typography.hero_medium,
              fontSize: isMobile ? '16px' : '24px',
            }}
          >
            If you’re an avid golfer and want to get some great deals? We have a
            membership that gives you priority access and a discount for every
            session you book!
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: '#529DC8',
                textTransform: 'none',
                color: 'white',
                borderRadius: '33px',
                padding: '14px 14px',
                ...typography.hero_bold,
                fontSize: isMobile ? '20px' : '24px',
                ':hover': {
                  backgroundColor: '#529DC8',
                },
              }}
              fullWidth
              disableRipple
            >
              Learn More &rarr;
            </Button>
          </Box>
        </Box>
        <ContactForm />
      </Box>
    </Box>
  );
}
