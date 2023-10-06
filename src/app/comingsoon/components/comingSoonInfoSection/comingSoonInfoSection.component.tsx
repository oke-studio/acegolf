'use client';

import * as React from 'react';
import Image from 'next/image';
import { styled, Box, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Formik } from 'formik';

const backgroundColor = '#529DC8';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ComingSoonForm = () => {
  const [isSubmit, setIsSubmit] = React.useState(false);
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => {
        console.log(values);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'comingsoon-email', ...values }),
        })
          .then(() => setIsSubmit(true))
          .catch((e) => alert(e));
      }}
    >
      {(props) => {
        const { values, isSubmitting, handleSubmit, handleChange } = props;

        return (
          <Box
            component="form"
            order={2}
            name="comingsoon-email"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            method="post"
            autoComplete="off"
          >
            <input type="hidden" name="form-name" value="comingsoon-email" />
            <TextField
              // error={errors.email && touched.email}
              fullWidth
              id="email-form"
              type="email"
              name="email"
              placeholder="yourname@email.com"
              style={{ alignItems: 'center' }}
              disabled={isSubmit}
              onChange={handleChange}
              value={values.email}
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

                  width: isSubmitting ? '0' : '100%',
                  fontFamily: 'new-hero',
                  fontSize: '12px',
                },
                '.MuiFormHelperText-root': {
                  fontSize: '12px',
                  color: 'black',
                  // marginTop: '8px'
                },
                pointerEvents: isSubmitting ? 'none' : 'initial',
              }}
              // label="comingsoon email"
              InputProps={{
                endAdornment: (
                  <motion.button
                    animate={isSubmitting && { width: '100%' }}
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
                    // onClick={() => buttonClick()}
                    disabled={isSubmitting}
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
                      {isSubmitting
                        ? "WE'LL KEEP IN TOUCH! SEE YOU SOON!"
                        : 'NOTIFY ME'}
                    </Typography>
                  </motion.button>
                ),
                sx: { borderRadius: '12px' },
              }}
            />
          </Box>
        );
      }}
    </Formik>
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
        NOVEMBER 2023
      </Typography>
    </ComingSoonInfoWrapper>
  </ComingSoonInfoSectionWrapper>
);
