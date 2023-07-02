'use client';

import * as React from 'react';
import { Box, styled, TextField, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { LogoMap } from '../logoMap/logoMap.component';

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
      name="comingsoon-email"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="comingsoon-email" />
      <TextField
        fullWidth
        id="email form"
        name="email"
        type="email"
        disabled={isSubmit}
        placeholder="yourname@email.com"
        required
        style={{ alignItems: 'center' }}
        sx={{
          fontFamily: 'new-hero',
          '.MuiInputBase-root': {
            background: 'white',
            borderRadius: '12px',
            height: '52px',
          },

          '.MuiInputBase-input': {
            color: '#373737',
            textAlign: 'center',
            '::placeholder': {
              color: 'black',
            },
            fontFamily: 'new-hero',
            fontSize: '12px',
          },
          '.MuiFormHelperText-root': {
            fontSize: '10px',
          },

          borderBottomWidth: '10px',

          pointerEvents: isSubmit ? 'none' : 'initial',
        }}
        // variant="standard"
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
          height: isSubmit ? 'max-content' : '52px',
          marginTop: '4px',
          marginBottom: '4px',
          whiteSpace: 'nowrap',
          borderRadius: '12px',
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
          {isSubmit ? 'WELL KEEP IN TOUCH!\n\nSEE YOU SOON!' : 'NOTIFY ME'}
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
  display: 'flex',
  flexDirection: 'column',
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
        <Typography fontWeight="900" fontSize="18px">
          FIND YOUR SWING
        </Typography>
        <Typography fontWeight="900" fontSize="11px">
          SUMMER 2023
        </Typography>
      </Box>
    </ComingSoonInfoMobileWrapper>
    <ComingSoonForm />
  </ComingSoonInfoSectionMobileWrapper>
);
