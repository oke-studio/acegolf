'use client';

import * as React from 'react';
import { Box, styled, TextField, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useFormik } from 'formik';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ComingSoonForm = () => {
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [error, setError] = React.useState<{ error: boolean; message: string }>(
    {
      error: false,
      message: '',
    },
  );
  React.useEffect(() => {
    console.log(isSubmit);
  }, [isSubmit]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'comingsoon-email', ...values }),
      })
        .then(() => setIsSubmit(true))
        .catch((e) => alert(e));
    },
  });

  const buttonClick = () => {
    if (formik.values.email === '') {
      setError({ error: true, message: 'Please provide an email' });
      return;
    }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
    ) {
      setError({
        error: true,
        message: `Please provide a valid email, ${formik.values.email} is not a valid email`,
      });
      return;
    }
    console.log('here');

    setError({ error: false, message: '' });
    setIsSubmit(true);
    formik.handleSubmit();
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="12px"
      name="comingsoon-email"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      autoComplete="off"
    >
      <input type="hidden" name="form-name" value="comingsoon-email" />
      <TextField
        fullWidth
        id="email-form"
        name="email"
        type="email"
        disabled={isSubmit}
        placeholder="yourname@email.com"
        required
        onChange={formik.handleChange}
        value={formik.values.email}
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
        onClick={() => {
          buttonClick();
        }}
        size="small"
        disabled={isSubmit || !formik.values.email}
        sx={{
          background: 'black',
          width: '100%',
          height: isSubmit ? 'max-content' : '52px',
          marginTop: '4px',
          marginBottom: '4px',
          whiteSpace: 'nowrap',
          borderRadius: '12px',
          'MuiButton-root': {
            ':hover': {
              backgroundColor: 'none',
            },
          },
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
        BY CLICKING THE BUTTON ABOVE YOU AGREE TO RECEIVE MARKETING EMAILS FROM
        ACE GOLF.
        <br />
        YOU CAN UNSUBSCRIBE AT ANY TIME.
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
