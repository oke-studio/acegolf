'use client';

import * as React from 'react';
import { Box, styled, TextField, Button } from '@mui/material';
import Image from 'next/image';
import aceGolfLogo from '/ace-golf-logo.svg';

const backgroundColor = '#529DC8';

const ComingSoonForm = () => {
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('submitted');
    setIsSubmit(true);
  };
  return (
    <Box component="form">
      <TextField
        fullWidth
        id="email form"
        type="email"
        placeholder="yourname@email.com"
        style={{ alignItems: 'center' }}
        helperText="*BY CLICKING THE BUTTON BELOW YOU ARE AGREEING ACEGOLF’S TERMS OF SERVICES AND TO RECEVING MARKETING EMAILS FROM ACEGOLF. 
                YOU ARE ABLE TO UNSUBSCRIBE AT ANY TIME BY CLICKING UNSUBSCRBE FROM ANY FUTURE MARKETING EMAILS. "
        sx={{
          fontFamily: 'new-hero',

          '.MuiInputBase-input': {
            color: '#373737',
            // background: "white",
          },
          pointerEvents: isSubmit ? 'none' : 'initial',
        }}
        variant="standard"
      />

      <Button
        variant="contained"
        type="submit"
        onClick={(e) => handleSubmit(e)}
        size="small"
        sx={{
          background: backgroundColor,
          // ":hover": {},
          width: isSubmit ? '100%' : 'max-content',
          marginTop: '6px',
          marginBottom: '6px',
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
    </Box>
  );
};

const ComingSoonInfoSectionMobileWrapper = styled(Box)(({ theme }) => ({
  marginTop: '60px',
  marginBottom: '60px',
  display: 'flex',
  flexDirection: 'column',
  // alignItems: "center",
  justifyContent: 'center',

  width: '100%',
  fontFamily: 'new-hero',
  gap: '24px',
  marginLeft: '12px',
  marginRight: '12px',
}));

const ComingSoonInfoMobileWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // [theme.breakpoints.down(640)]: {
  //     marginLeft: "12px",
  //     marginRight: "12px",
  // },f,mf
  gap: '10px',
  whiteSpace: 'nowrap',
}));

export const ComingSoonInfoSectionMobile = () => (
  <ComingSoonInfoSectionMobileWrapper>
    <ComingSoonInfoMobileWrapper order={1}>
      <Image
        src="/images/ace-golf-logo.svg"
        alt="ace golf logo"
        width={100}
        height={100}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span>FIND YOUR SWING</span>
        <span>SUMMER 2023</span>
      </Box>
    </ComingSoonInfoMobileWrapper>
    <ComingSoonForm />
  </ComingSoonInfoSectionMobileWrapper>
);
