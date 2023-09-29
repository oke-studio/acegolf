'use client';
import * as React from 'react';
import {
  Box,
  FormControl,
  Button,
  styled,
  buttonClasses,
  Input,
  inputClasses,
  useTheme,
  TextField,
  useMediaQuery,
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
      background-color: ${t.palette.primary.main};
      color: white;
      justify-content: center;
      border-radius: 33px;
      text-transform: none;
      min-width: 190px;
      
  
    },
    .${buttonClasses.text}{
      // background-color: ${t.palette.primary.main};
      color: white;
      display: flex;
      justify-content: center;
      // font-family: new-hero
    }
  `,
);

const StyledInput = styled(Input)(
  ({ theme: t }) => `
    .${inputClasses.input}{
      width: 100%;
      background: transparent;
      font-size: 2rem;
      font-weight: 700;
      font-family: new-hero;
      color: ${t.palette.primary.main};
  
      &::placeholder {
        opacity: 1
      }
      
    };
  
    &.${inputClasses.root}{
      &::before{
        border-bottom: none;
        width: 0
      }
      &::after{
        border-bottom: none;
        width: 0
      }
    }
  `,
);

// const FooterButton = () => {
//   const formControlContext = useFormControl();
//   const [dirty, setDirty] = React.useState(false);

//   React.useEffect(() => {
//     // console.log(formControlContext);
//     if (formControlContext?.filled) {
//       setDirty(true);
//     }
//   }, [formControlContext]);

//   if (formControlContext === undefined) {
//     return <Box component="span">Form is unavailable check again later</Box>;
//   }

//   return (

//   );
// };

interface FormikValuesProps {
  email?: string;
}

export const FooterEmail = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  //   const handleSubmit = (values: FormikValuesProps) => {
  //     values.preventDefault();
  //     console.log(values);
  //   };

  const initialFormikValues: FormikValuesProps = {
    email: '',
  };

  return (
    <Formik
      initialValues={initialFormikValues}
      onSubmit={(values) => {
        console.log(values);
        // alert(JSON.stringify(values));
        // actions.setSubmitting(false);
        // actions.submitForm();

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'homepage-email', ...values }),
        })
          // .then(() => setIsSubmit(true))
          .catch((e) => alert(e));
      }}
      validate={(values) => {
        const errors: FormikValuesProps = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
    >
      {(props) => {
        const { handleSubmit, handleChange } = props;
        return (
          <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            method="post"
            name="homepage-email"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Box
              component={FormControl}
              sx={{
                color: theme.palette.primary.main,
                alignItems: 'flex-start',
                width: '100%',
                gap: '20px',
                backgroundColor: '#39775E',
                borderRadius: '26px',
                fontFamily: theme.typography.fontFamily,
              }}
            >
              <Box
                sx={{
                  margin: '100px auto',
                  padding: '0 28px',
                  maxWidth: '1084px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  '& .MuiInputBase-root': {
                    color: theme.palette.primary.main,
                    padding: '16px 0',
                    fontSize: isMobile ? '40px' : '64px',
                    minHeight: '150px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    color: theme.palette.primary.main,
                    border: 'none',
                  },
                  position: 'relative',
                }}
              >
                {/* Promotions Component */}
                <Box
                  sx={{
                    display: 'flex',
                    backgroundColor: 'transparent',
                    ...theme.typography.hero_super_italic,
                    fontSize: isMobile ? '48px' : '120px',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: '120%',
                    color: 'white',
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>PROMOTIONS</Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: isMobile ? 'center' : 'space-between',
                    }}
                  >
                    <Box
                      sx={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                      }}
                    ></Box>
                    {!isMobile && (
                      <>
                        <Box
                          sx={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                          }}
                        ></Box>
                        <Box
                          sx={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                          }}
                        ></Box>
                      </>
                    )}
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: 'white',
                    ...theme.typography.hero_bold,
                    fontSize: '24px',
                  }}
                >
                  Be the first to know about the latest ACE Golf promos and
                  events!
                </Box>
                <input type="hidden" name="form-name" value="homepage-email" />
                {/* <StyledInput
                  placeholder="Enter Your Email Address . . ."
                  fullWidth
                  required
                  onChange={handleChange}
                  id="email-form"
                  type="email"
                  name="email"
                /> */}
                <TextField
                  sx={{}}
                  // inputProps={{ id: 'email-form', color: 'orange' }}
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">kg</InputAdornment>
                  //   ),
                  // }}
                  placeholder="Enter Your Email Address . . ."
                  fullWidth
                  multiline
                  required
                  onChange={handleChange}
                  id="email-form"
                  type="email"
                  name="email"
                />
                <StyledButton
                  sx={{ ...theme.typography.hero_bold, fontSize: '24px' }}
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  //   onClick={(e) => handleSubmit(e)}
                  type="submit"
                >
                  Sign Up
                </StyledButton>
                <Box
                  sx={{
                    color: 'white',
                    ...theme.typography.hero_light,
                    fontSize: isMobile ? '12px' : '16px',
                    width: isMobile ? '100%' : '500px',
                  }}
                >
                  By clicking “sign up” you consent to ACE Golf using you email
                  address to receive emails about products, events and
                  promotions, and more. You can opt out at any time.
                </Box>
              </Box>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
