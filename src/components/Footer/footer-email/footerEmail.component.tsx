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
  useFormControl,
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

const FooterButton = () => {
  const formControlContext = useFormControl();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    // console.log(formControlContext);
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <Box component="span">Form is unavailable check again later</Box>;
  }

  const { error, filled, required } = formControlContext;
  const isInvalidForm = dirty && required && !filled;

  const handleButtonSubmit = (
    e: React.MouseEvent<HTMLButtonElement | HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (isInvalidForm) {
      return null;
    }

    console.log('heerr', e.currentTarget.value);
  };

  return (
    <StyledButton
      disableElevation
      disableFocusRipple
      disableRipple
      disableTouchRipple
      //   onClick={(e) => handleSubmit(e)}
      type="submit"
    >
      Sign Up
    </StyledButton>
  );
};

interface FormikValuesProps {
  email?: string;
}

export const FooterEmail = () => {
  const theme = useTheme();

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
          <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
            <Box
              component={FormControl}
              sx={{
                color: theme.palette.primary.main,
                alignItems: 'flex-start',
                width: '100%',
                gap: '20px',
              }}
            >
              <input type="hidden" name="form-name" value="homepage-email" />

              <StyledInput
                placeholder="Enter Your Email Address . . ."
                fullWidth
                required
                onChange={handleChange}
                id="email-form"
                type="email"
                name="email"
              />
              <FooterButton />
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
