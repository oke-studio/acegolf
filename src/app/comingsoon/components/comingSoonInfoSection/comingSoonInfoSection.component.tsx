'use client';

import * as React from 'react';
import Image from 'next/image';
import { styled, Box, TextField, Button, Typography } from '@mui/material';

const backgroundColor = '#529DC8';

const ComingSoonForm = () => {
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('submitted');
    setIsSubmit(true);
  };
  return (
    <Box component="form" order={2}>
      <TextField
        fullWidth
        id="email form"
        type="email"
        placeholder="yourname@email.com"
        style={{ alignItems: 'center' }}
        helperText="BY CLICKING THE BUTTON ABOVE YOU ARE AGREEING TO RECEVING MARKETING EMAILS FROM ACEGOLF. YOU ARE ABLE TO UNSUBSCRIBE AT ANY TIME. "
        sx={{
          fontFamily: 'new-hero',
          '.MuiInputBase-root': {
            background: 'white',
          },
          '.MuiInputBase-input': {
            color: '#373737',
            // background: "white",
            width: isSubmit ? '0' : '100%',
            fontFamily: 'new-hero',
            fontSize: '12px',
          },
          '.MuiFormHelperText-root': {
            fontSize: '8px',
          },
          pointerEvents: isSubmit ? 'none' : 'initial',
        }}
        InputProps={{
          endAdornment: (
            <Button
              variant="contained"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              size="small"
              sx={{
                background: backgroundColor,
                // ":hover": {},
                width: isSubmit ? '100%' : 'max-content',
                marginTop: '14px',
                marginBottom: '14px',
                whiteSpace: 'nowrap',
                borderRadius: '12px',
                transition: 'min-width 500ms ease-out',
                pointerEvents: isSubmit ? 'none' : 'initial',
                ':hover': {
                  backgroundColor: backgroundColor,
                },
                cursor: isSubmit ? 'default' : 'pointer',
              }}
            >
              <span
                style={{
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  fontFamily: 'new-hero',
                  fontWeight: '700',
                }}
              >
                {isSubmit ? "WE'LL KEEP IN TOUCH! SEE YOU SOON!" : 'NOTIFY ME'}
              </span>
            </Button>
          ),
          sx: { borderRadius: '12px' },
        }}
      />
    </Box>
  );
};

const ComingSoonInfoSectionWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  // flexDirection: "row",
  alignItems: 'center',
  alignSelf: 'center',
  //   justifyContent: 'center',
  gridTemplateColumns: '1fr 2fr 1fr',
  width: '100%',
  height: '20%',
  fontFamily: 'new-hero',
}));

const ComingSoonInfoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ComingSoonInfoSection = () => (
  <ComingSoonInfoSectionWrapper>
    <ComingSoonInfoWrapper order={1}>
      <Image
        src="/images/ace-golf-logo.svg"
        alt="ace golf logo"
        width={100}
        height={100}
      />
    </ComingSoonInfoWrapper>
    <ComingSoonForm />
    <ComingSoonInfoWrapper order={3}>
      <Typography fontWeight="900" fontSize="18px">
        FIND YOUR SWING
      </Typography>
      <Typography fontWeight="900" fontSize="11px">
        SUMMER 2023
      </Typography>
    </ComingSoonInfoWrapper>
  </ComingSoonInfoSectionWrapper>
);
