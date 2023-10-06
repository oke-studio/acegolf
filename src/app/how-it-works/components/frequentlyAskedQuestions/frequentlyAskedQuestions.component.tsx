'use client';

import * as React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const FrequentlyAskedQuestionsTailComponent = () => {
  const { palette, typography } = useTheme();

  return (
    <Box
      sx={{
        // backgroundColor: 'white',
        background:
          'linear-gradient(to right top, white 0%, white 50%, black 50%, black 100%)',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        // ':before': {
        //   backgroundColor: 'black',
        //   content: "''",
        //   width: '100%',
        //   display: 'block',
        // },
      }}
    >
      <Box
        sx={{
          backgroundColor: palette.primary.main,
          margin: '142px 0',
          ...typography.hero_super,
          fontSize: '48px',
          width: '150%',
          textWrap: 'nowrap',
          rotate: '11deg',
          padding: '48px 0',
        }}
      >
        TORONTO&apos;S FIRST INDOOR GOLF LOUNGE &middot; TORONTO&apos;S FIRST
        INDOOR GOLF LOUNGE &middot; TORONTO&apos;S FIRST INDOOR GOLF LOUNGE
      </Box>
    </Box>
  );
};

export const FrequentlyAskedQuestions = () => {
  const { palette, typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box
      sx={{
        overflow: 'visible',
        width: '100vw',
        backgroundColor: palette.primary.main,
        borderRadius: '18px 18px 0 0',
        zIndex: 3,
        // padding: '12px 24px',
      }}
    >
      <Box
        sx={{
          width: '100vw',
          backgroundColor: 'black',
          borderRadius: '18px 18px 0 0',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '24px 0px auto auto',
            padding: '24px 24px',
          }}
        >
          <Box
            sx={{
              lineHeight: '70%',
              ...typography.hero_super_italic,
              fontSize: isMobile ? '40px' : '80px',
            }}
          >
            <Box component="span"> &ldquo;Fore-Quently&rdquo;</Box>
            <Box sx={{ marginLeft: '24px' }}>Asked Questions</Box>
          </Box>
        </Box>
      </Box>
      <FrequentlyAskedQuestionsTailComponent />
    </Box>
  );
};
