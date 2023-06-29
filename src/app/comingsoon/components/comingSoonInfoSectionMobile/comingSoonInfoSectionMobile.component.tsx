'use client';

import * as React from 'react';
import { Box, styled, TextField, Button, Typography } from '@mui/material';
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
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="12px"
    >
      <TextField
        fullWidth
        id="email form"
        type="email"
        disabled={isSubmit}
        placeholder="yourname@email.com"
        style={{ alignItems: 'center' }}
        sx={{
          fontFamily: 'new-hero',

          '.MuiInputBase-input': {
            color: '#373737',
            textAlign: 'center',
            '::placeholder': {
              color: 'black',
            },
          },
          '.MuiFormHelperText-root': {
            fontSize: '10px',
          },

          borderBottomWidth: '10px',

          pointerEvents: isSubmit ? 'none' : 'initial',
        }}
        variant="standard"
      />

      <Button
        variant="contained"
        type="submit"
        onClick={(e) => handleSubmit(e)}
        size="small"
        disabled={isSubmit}
        sx={{
          background: 'black',
          width: '100%',
          marginTop: '6px',
          marginBottom: '6px',
          whiteSpace: 'nowrap',
          borderRadius: '12px',
          // transition: 'min-width 500ms ease-out',
          // pointerEvents: isSubmit ? 'none' : 'initial',
          // ':hover': {
          //   backgroundColor: 'black',
          // },
          // cursor: isSubmit ? 'default' : 'pointer',
        }}
      >
        <Typography
          paddingLeft="24px"
          paddingRight="24px"
          paddingTop="14px"
          paddingBottom="14px"
          fontFamily="new-hero"
          fontWeight="700"
          whiteSpace="normal"
        >
          {isSubmit ? (
            <Typography>
              WE&rsquo;LL KEEP IN TOUCH!
              <br /> SEE YOU SOON!
            </Typography>
          ) : (
            'NOTIFY ME'
          )}
        </Typography>
      </Button>
      <Typography paragraph align="center" sx={{ fontSize: '8px' }}>
        BY CLICKING THE BUTTON ABOVE YOU ARE AGREEING TO RECEVING MARKETING
        EMAILS FROM ACEGOLF. <br />
        YOU ARE ABLE TO UNSUBSCRIBE AT ANY TIME.
      </Typography>
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

  maxWidth: '250px',
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
    <ComingSoonInfoMobileWrapper>
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
