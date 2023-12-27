'use client';

import * as React from 'react';
import {
  Box,
  useTheme,
  TextField,
  useMediaQuery,
  // Typography,
} from '@mui/material';
import { Formik, useFormik } from 'formik';
import { encode } from '@/util/encode';
import { motion } from 'framer-motion';

import { Typography } from '../../../../../typography.component';

const MailingListForm = () => {
  const { typography, palette } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
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

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => {
        console.log(values);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'landing-mailing-list', ...values }),
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
            name="landing-mailing-list"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            method="post"
            autoComplete="off"
            sx={{ width: '40%', ...(isMobile && { width: '100%' }) }}
          >
            <input
              type="hidden"
              name="form-name"
              value="landing-mailing-list"
            />
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
                  ...(isSubmitting && { paddingLeft: '2px' }),
                  width: isSubmitting ? '0' : '100%',
                  fontFamily: 'new-hero',
                  fontSize: '12px',
                },
                '.MuiFormHelperText-root': {
                  fontSize: '10px',
                  color: (t) => t.palette.aceGrey,
                  marginTop: '8px',
                  width: '75%',
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
                      paddingTop="10px"
                      paddingBottom="10px"
                      fontFamily="new-hero"
                      fontWeight="700"
                      whiteSpace="nowrap"
                      overflow="hidden"
                      color="white"
                      variant="small"
                      as="p"
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
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        alignItems: 'center',
        gap: '24px',
        margin: '32px 0',
      }}
    >
      <Typography
        variant="headingOne"
        sx={{
          ...typography.hero_super,
          fontSize: '48px',
          ...(isMobile && { textAlign: 'center' }),
        }}
      >
        JOIN THE MAILING LIST
      </Typography>
      <Typography
        sx={{ ...typography.hero_medium, fontSize: '24px' }}
        variant="base"
      >
        Be the first to know about the latest ACE Golf promos and events
      </Typography>
      <MailingListForm />
    </Box>
  );
};
