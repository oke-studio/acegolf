'use client';

import * as React from 'react';
import {
  Box,
  useTheme,
  useMediaQuery,
  TextField,
  styled,
  Button,
  buttonClasses,
} from '@mui/material';
import { Formik } from 'formik';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const StyledButton = styled(Button)(
  ({ theme: t }) => `
      &.${buttonClasses.root}{
        background-color: black;
        color: white;
        justify-content: center;
        border-radius: 33px;
        text-transform: none;
        min-width: 190px;
    
      },
      .${buttonClasses.text}{
        color: white;
        display: flex;
        justify-content: center;
      }
    `,
);
const StyledTextField = styled(TextField)(({ theme }) => ({
  fontFamily: 'new-hero',
  color: 'black',
  fontSize: '12px',
  ...theme.typography.hero_medium,
  '& .MuiInputBase-root': {
    background: 'white',
    border: 'black 2px solid',
    borderRadius: '12px',
    height: '48px',
  },
}));

export const ContactFormikForm = () => {
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { palette, typography } = useTheme();

  return (
    <Formik
      initialValues={{ name: '', email: '', number: '', message: '' }}
      onSubmit={(values) => {
        console.log(values);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'how-it-works-contact-form', ...values }),
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
            name="how-it-works-contact-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            method="post"
            autoComplete="off"
            width="100%"
            sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <input
              type="hidden"
              name="form-name"
              value="how-it-works-contact-form"
            />
            <StyledTextField
              // error={errors.email && touched.email}
              fullWidth
              id="contact-form-name"
              type="text"
              name="name"
              placeholder="John Greene"
              style={{ alignItems: 'center' }}
              disabled={isSubmit}
              onChange={handleChange}
              value={values.name}
              sx={{}}
              // label="comingsoon email"
            />
            <StyledTextField
              // error={errors.email && touched.email}
              fullWidth
              id="contact-form-email"
              type="email"
              name="email"
              placeholder="yourname@email.com"
              style={{ alignItems: 'center' }}
              disabled={isSubmit}
              onChange={handleChange}
              value={values.email}
              sx={{}}
              // label="comingsoon email"
            />
            <StyledTextField
              // error={errors.email && touched.email}
              fullWidth
              id="contact-form-number"
              type="tel"
              name="number"
              placeholder="000-000-0000"
              style={{ alignItems: 'center' }}
              disabled={isSubmit}
              onChange={handleChange}
              value={values.number}
              sx={{}}
              inputProps={{
                inputMode: 'tel',
                pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
              }}
              // label="comingsoon email"
            />
            <StyledTextField
              // error={errors.email && touched.email}
              fullWidth
              id="contact-form-message"
              type="text"
              name="message"
              placeholder="text message goes here"
              style={{ alignItems: 'center' }}
              disabled={isSubmit}
              onChange={handleChange}
              value={values.message}
              sx={{
                margin: '36px 0px',
                '.MuiInputBase-root': {
                  height: '250px',
                  alignItems: 'flex-start',
                },
              }}
              multiline
              // label="comingsoon email"
            />
            <StyledButton
              sx={{ ...typography.hero_bold, fontSize: '24px' }}
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
              fullWidth
              //   onClick={(e) => handleSubmit(e)}
              type="submit"
            >
              Submit
            </StyledButton>
          </Box>
        );
      }}
    </Formik>
  );
};

export const ContactForm = () => {
  const { palette, typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box sx={{ width: '100vw', backgroundColor: palette.primary.main }}>
      <Box
        sx={{
          display: 'flex',
          color: 'black',
          gap: '32px',
          margin: '0px auto',
          maxWidth: '1084px',
          width: '100%',
          //   height: isMobile ? '1150px' : '900px',
          alignItems: 'flex-start',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-10px',
            background: 'black',
            borderRadius: '11px',
            ...typography.hero_super,
            fontSize: isMobile ? '32px' : '48px',
            color: 'white',
            padding: '12px 24px',
            rotate: '-2.23deg',
          }}
        >
          Got Any Questions?
        </Box>
        <Box sx={{ width: '100%', display: 'flex', margin: '102px 0px' }}>
          {/* Detail Section -- map, info, contact, etc */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ...typography.hero_medium,
              fontSize: '18px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box component="span">Questions? Looking to book an event?</Box>
              <Box component="span">Our team is always happy to help you</Box>
              <Box component="span">
                Drop us a line and we&apos;ll get back to you ASAP
              </Box>
            </Box>
            {isMobile && <ContactFormikForm />}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{ background: 'grey', width: '500px', height: '300px' }}
              ></Box>
            </Box>
          </Box>
          {/* Form section */}
          {!isMobile && <ContactFormikForm />}
        </Box>
      </Box>
    </Box>
  );
};
