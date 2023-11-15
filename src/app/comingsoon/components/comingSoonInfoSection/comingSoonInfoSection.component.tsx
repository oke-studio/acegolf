'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  styled,
  Box,
  TextField,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Formik } from 'formik';
import { encode } from '@/util/encode';
import { useRouter } from 'next/router';
import { TopBanner } from '@/components/topBanner/topBanner.component';

const backgroundColor = '#529DC8';

interface FormValues {
  email: string;
}

const ComingSoonForm = () => {
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  React.useEffect(() => {
    console.log(isSubmit);
  }, [isSubmit]);

  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //     fetch('/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       body: encode({ 'form-name': 'comingsoon-email', ...values }),
  //     })
  //       .then(() => setIsSubmit(true))
  //       .catch((e) => alert(e));
  //   },
  // });

  // const buttonClick = () => {
  //   if (formik.values.email === '') {
  //     setError({ error: true, message: 'Please provide an email' });
  //     return;
  //   }

  //   if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
  //   ) {
  //     setError({
  //       error: true,
  //       message: `Please provide a valid email, ${formik.values.email} is not a valid email`,
  //     });
  //     return;
  //   }

  //   setError({ error: false, message: '' });
  //   setIsSubmit(true);
  //   formik.handleSubmit();
  // };

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

          handleChange,
        } = props;

        return (
          <Box
            component="form"
            name="comingsoon-email"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            method="post"
            autoComplete="off"
            sx={{ maxWidth: '400px', marginTop: '15px', marginBottom: '20px' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <input type="hidden" name="form-name" value="comingsoon-email" />
              <Box
                sx={{
                  ...typography.hero_regular,
                  fontSize: '16px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
              >
                Join the Mailing List
              </Box>
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
                helperText="*BY CLICKING THE BUTTON ABOVE YOU ARE AGREEING ACEGOLF’S TERMS OF SERVICES AND TO RECEIVING MARKETING EMAILS FROM ACEGOLF. YOU ARE ABLE TO UNSUBSCRIBE AT ANY TIME BY CLICKING UNSUBSCRBE FROM ANY FUTURE MARKETING EMAILS. "
                sx={{
                  fontFamily: 'new-hero',
                  gap: '12px',
                  padding: '0px 12px',
                  '.MuiInputBase-root': {
                    justifyContent: 'flex-end',
                    background: 'white',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    height: '58px',
                    paddingRight: '0px',
                  },
                  '.MuiInputBase-input': {
                    color: '#373737',
                    ...(isSubmitting && { paddingLeft: '0px' }),

                    width: isSubmitting ? '0' : '100%',
                    fontFamily: 'new-hero',
                    fontSize: '12px',
                  },
                  '.MuiFormHelperText-root': {
                    fontSize: isMobile ? '9px' : '10px',
                    color: 'black',
                    textAlign: 'center',
                  },
                  '.MuiOutlinedInput-notchedOutline': {
                    border: 'none',
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

                        // paddingLeft: '12px',

                        margin: '4px',
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
                        // ...typography.hero_bold,
                        sx={{
                          ...typography.hero_bold,
                          fontSize: '12px',
                        }}
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
          </Box>
        );
      }}
    </Formik>
  );
};

const ComingSoonInfoSectionWrapper = styled(Box)({
  display: 'flex',
  // flexDirection: "row",
  alignItems: 'center',
  // alignSelf: 'center',
  // gridTemplateColumns: '1fr 2fr 1fr',
  justifyContent: 'center',
  fontFamily: 'new-hero',
});

const TopBannerChoice = ({ isMobile }: { isMobile: boolean }) => {
  if (isMobile) {
    return (
      <TopBanner
        width="100%"
        height="100%"
        viewBox="0 0 1973 293"
        pathProps={{
          d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1972 102.502',
        }}
        text=" · COMING SOON · TORONTO'S BEST INDOOR GOLF LOUNGE  "
        textCount={3}
        strokeColor="#EB8B32"
      />
    );
  }

  return (
    <TopBanner
      width="100%"
      height="100%"
      viewBox="0 0 1973 293"
      pathProps={{
        d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1972 102.502',
      }}
      text=" · COMING SOON · TORONTO'S BEST INDOOR GOLF LOUNGE  "
      textCount={3}
      strokeColor="#EB8B32"
    />
  );
};

const ComingSoonInfoWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export const ComingSoonInfoSection = ({
  hours,
  days,
}: {
  hours: number;
  days: number;
}) => {
  const isMobile = useMediaQuery('(max-width:640px)');

  const { typography, palette } = useTheme();

  return (
    <ComingSoonInfoSectionWrapper
      sx={{
        flexDirection: 'column',
        // gap: '',
        position: 'relative',
      }}
    >
      <ComingSoonInfoWrapper sx={{ marginTop: '32px' }}>
        <Image
          src="/images/ace-golf-logo.svg"
          alt="ace golf logo"
          width={isMobile ? 150 : 150}
          height={isMobile ? 150 : 150}
        />
      </ComingSoonInfoWrapper>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',

          ...(isMobile && { transform: 'scale(3)', paddingLeft: '80px' }),
        }}
      >
        <TopBannerChoice isMobile={isMobile} />
      </div>

      <ComingSoonInfoWrapper
        sx={{
          '& .MuiButtonBase-root': {
            color: 'white',
            backgroundColor: palette.primary.main,
            borderRadius: '78px',
            padding: '5px 15px',
            ':hover': {
              backgroundColor: '#959595',
            },
          },
          position: 'relative',
          ...(isMobile && { marginTop: '60px' }),

          ...(!isMobile && { top: '-40px', marginTop: '5px' }),
        }}
      >
        <Box sx={{ ...typography.hero_extrabold, fontSize: '24px' }}>
          OPENING DEC 2023
        </Box>
        <Box sx={{ fontSize: '16px', fontWeight: '600' }}>
          <Box component="span" sx={{ color: palette.primary.main }}>
            {' '}
            {days}
          </Box>{' '}
          DAYS
          <Box component="span" sx={{ color: palette.primary.main }}>
            {' '}
            {hours}
          </Box>{' '}
          HOURS
        </Box>
        <Button
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          sx={{
            ...typography.hero_semibold,
            fontSize: '24px',
            marginTop: '20px',
            textTransform: 'none',
          }}
        >
          <a
            href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
            target="_blank"
          >
            {' '}
            Early Reservation &rarr;
          </a>
        </Button>
      </ComingSoonInfoWrapper>

      <ComingSoonForm />
    </ComingSoonInfoSectionWrapper>
  );
};
