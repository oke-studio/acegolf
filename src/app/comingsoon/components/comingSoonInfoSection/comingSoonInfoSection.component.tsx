'use client';

import * as React from 'react';
import Image from 'next/image';
import { styled, Box, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';

const backgroundColor = '#529DC8';

const ComingSoonForm = () => {
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('submitted');

    const myForm = e.currentTarget;
    const formData = new FormData(myForm);

    console.log(e.currentTarget.value);

    // const target = e.target as typeof e.target & {
    //   email: { value: string };
    // };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setIsSubmit(true))
      .catch((error) => alert(error));
  };

  React.useEffect(() => {
    console.log(isSubmit);
  }, [isSubmit]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
      // fetch('/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: new URLSearchParams(values.email).toString(),
      // })
      //   .then(() => setIsSubmit(true))
      //   .catch((error) => alert(error));
    },
  });

  const buttonClick = () => {
    if (!formik.errors.email) {
      setIsSubmit(true);
    }
  };

  return (
    <Box
      component="form"
      order={2}
      name="comingsoon-email"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={formik.handleSubmit}
      method="post"
    >
      <input type="hidden" name="form-name" value="comingsoon-email" />
      <TextField
        fullWidth
        id="email form"
        type="email"
        name="email"
        placeholder="yourname@email.com"
        style={{ alignItems: 'center' }}
        disabled={isSubmit}
        onChange={formik.handleChange}
        value={formik.values.email}
        helperText="BY CLICKING THE BUTTON ABOVE YOU ARE AGREEING TO RECEVING MARKETING EMAILS FROM ACEGOLF. YOU ARE ABLE TO UNSUBSCRIBE AT ANY TIME. "
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
