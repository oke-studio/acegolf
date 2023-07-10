'use client';

import * as React from 'react';
import Image from 'next/image';
import { styled, Box, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';

const backgroundColor = '#529DC8';

interface FormValues {
  email: string;
}

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

    setError({ error: false, message: '' });
    setIsSubmit(true);
    formik.handleSubmit();
  };

  return (
    <Box
      component="form"
      order={2}
      name="comingsoon-email"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      // onSubmit={formik.handleSubmit}
      method="post"
      autoComplete="off"
    >
      <input type="hidden" name="form-name" value="comingsoon-email" />
      <TextField
        error={error.error}
        fullWidth
        id="email-form"
        type="email"
        name="email"
        placeholder="yourname@email.com"
        style={{ alignItems: 'center' }}
        disabled={isSubmit}
        onChange={formik.handleChange}
        value={formik.values.email}
        helperText="BY CLICKING THE BUTTON ABOVE YOU AGREE TO RECEIVE MARKETING EMAILS FROM ACE GOLF.
YOU CAN UNSUBSCRIBE AT ANY TIME."
        sx={{
          fontFamily: 'new-hero',
          '.MuiInputBase-root': {
            justifyContent: 'flex-end',
            background: 'white',
          },
          '.MuiInputBase-input': {
            color: '#373737',

            width: isSubmit ? '0' : '100%',
            fontFamily: 'new-hero',
            fontSize: '12px',
          },
          '.MuiFormHelperText-root': {
            fontSize: '12px',
            color: 'black',
            // marginTop: '8px'
          },
          pointerEvents: isSubmit ? 'none' : 'initial',
        }}
        // label="comingsoon email"
        InputProps={{
          endAdornment: (
            <motion.button
              animate={isSubmit && { width: '100%' }}
              initial={{ width: '140px' }}
              transition={{ duration: 4, ease: 'easeInOut' }}
              style={{
                background: 'black',
                border: 'none',
                borderRadius: '12px',
                whiteSpace: 'nowrap',
                marginTop: '14px',
                marginBottom: '14px',
              }}
              type="submit"
              onClick={() => buttonClick()}
            >
              <Typography
                paddingLeft="24px"
                paddingRight="24px"
                paddingTop="14px"
                paddingBottom="14px"
                fontFamily="new-hero"
                fontWeight="700"
                whiteSpace="nowrap"
                overflow="hidden"
                color="white"
              >
                {isSubmit ? "WE'LL KEEP IN TOUCH! SEE YOU SOON!" : 'NOTIFY ME'}
              </Typography>
            </motion.button>
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
  fontFamily: 'new-hero',
}));

const ComingSoonInfoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
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
