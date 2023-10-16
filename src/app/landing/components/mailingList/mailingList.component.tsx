'use client';

import * as React from 'react';
import { Box, useTheme, TextField, Typography } from '@mui/material';
import { Formik, useFormik } from 'formik';
import { encode } from '@/util/encode';
import { motion } from 'framer-motion';

const MailingListForm = () => {
  const { typography, palette } = useTheme();
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
      // validationSchema={}
      // validate={}
    >
      {(props) => {
        const {
          values,
          isSubmitting,
          handleSubmit,
          errors,
          handleChange,
          touched,
        } = props;

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
              helperText="*BY CLICKING THE BUTTON BELOW YOU ARE AGREEING ACEGOLF’S TERMS OF SERVICES AND TO RECEIVING MARKETING EMAILS FROM ACEGOLF. YOU ARE ABLE TO UNSUBSCRIBE AT ANY TIME BY CLICKING UNSUBSCRBE FROM ANY FUTURE MARKETING EMAILS. "
              sx={{
                fontFamily: 'new-hero',
                '.MuiInputBase-root': {
                  justifyContent: 'flex-end',
                  background: 'white',
                  paddingRight: '2px',
                },
                '.MuiInputBase-input': {
                  color: '#373737',

                  width: isSubmitting ? '0' : '100%',
                  fontFamily: 'new-hero',
                  fontSize: '12px',
                },
                '.MuiFormHelperText-root': {
                  fontSize: '10px',
                  color: 'white',

                  marginTop: '8px',
                  width: '45%',
                  textAlign: 'center',
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
                      fontSize="12px"
                    >
                      {isSubmitting
                        ? "WE'LL KEEP IN TOUCH! SEE YOU SOON!"
                        : 'SUBSCRIBE'}
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
export const MailingList = () => {
  const { typography, palette } = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      <Box component="h1" sx={{ ...typography.hero_super }}>
        JOIN THE MAILING LIST
      </Box>
      <Box>
        Be the first to know about the latest ACE Golf promos and events
      </Box>
      <MailingListForm />
    </Box>
  );
};
