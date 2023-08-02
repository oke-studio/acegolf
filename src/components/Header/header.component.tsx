'use client';
import * as React from 'react';
import {
  Box,
  styled,
  List,
  Link,
  ListItem,
  ListItemButton,
  ListItemText,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const theme = createTheme({
  typography: {
    fontFamily: 'new-hero',
  },
});

const fontStyle = {
  fontFamily: 'new-hero',
  fontSize: '14px',
};

const aceOrange = '#EB8B32';

const HeaderContainer = styled(Box)({
  backgroundColor: 'white',
  display: 'flex',
  borderRadius: '0 0 26px 26px',
  height: '50px',
  width: '100%',
  maxWidth: '1084px',
  color: 'black',
  alignItems: 'center',
  padding: '0 24px 0 24px',
});

function RNG(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const StyledListItemButton = styled(ListItemButton)({
  '&.MuiListItemButton-root:hover': {
    backgroundColor: 'transparent',
    color: aceOrange,
  },
  //   padding: '8px 0 8px 0',
});

const navOptionHoverEven = {
  hovered: (custom: number = 10) => ({
    // opacity: 0,
    top: '-5px',
    // backgroundColor: 'blue',
    rotate: RNG(custom - 1, custom + 11),
    color: aceOrange,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeOut',
    },
  }),

  rest: {
    // opacity: 1,
    top: '0px',
    color: '#000000',
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const navOptionHoverOdd = {
  hovered: (custom: number = -10) => ({
    // opacity: 0,
    top: '5px',
    // backgroundColor: 'blue',
    color: aceOrange,
    rotate: RNG(custom + 1, custom - 11),
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeOut',
    },
  }),

  rest: {
    // opacity: 1,
    color: '#000000',
    top: '0px',
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const TextAnimationWrapper = styled(motion.span)({
  color: 'black',
  //   ...fontStyle,
  ...theme.typography.body1,
});

// console.log(theme.typography.body1);

export const Header = () => {
  const themeTest = useTheme();
  const isMobile = useMediaQuery('(max-width:425px)');
  const [mobileDropDownEnabled, setMobileDropDownEnabled] =
    React.useState(false);

  const [isHovered, setIsHovered] = React.useState(false);

  // console.log(mobileDropDownEnabled);

  function toggleDropDown() {
    setMobileDropDownEnabled(!mobileDropDownEnabled);
  }

  function toggleHoveredState() {
    setIsHovered(!isHovered);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          fontFamily: 'new-hero',
          justifyContent: 'center',
        }}
      >
        <HeaderContainer
          sx={{
            fontSize: fontStyle.fontSize,
            justifyContent: isMobile ? 'center' : 'space-between',
          }}
        >
          {isMobile ? (
            <Button onClick={() => toggleDropDown()}>
              <Image
                src="/images/ace-golf-logo.svg"
                alt="ace golf logo"
                width={50}
                height={50}
              />
            </Button>
          ) : (
            <Image
              src="/images/ace-golf-logo.svg"
              alt="ace golf logo"
              width={50}
              height={50}
            />
          )}
          {!isMobile && (
            <List
              sx={{
                display: 'flex',
                whiteSpace: 'nowrap',
                gap: '24px',
                overflow: 'scroll',
              }}
            >
              <ListItem disablePadding>
                <StyledListItemButton>
                  <TextAnimationWrapper
                    initial="rest"
                    whileHover="hovered"
                    animate="rest"
                  >
                    {'Home'.split('').map((word, index) => (
                      <motion.span
                        key={index}
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                        }}
                        variants={
                          index % 2 === 0
                            ? navOptionHoverEven
                            : navOptionHoverOdd
                        }
                      >
                        {word}
                      </motion.span>
                    ))}
                  </TextAnimationWrapper>
                </StyledListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <StyledListItemButton>
                  <TextAnimationWrapper
                    initial="rest"
                    whileHover="hovered"
                    animate="rest"
                  >
                    {'Events'.split('').map((word, index) => (
                      <motion.span
                        key={index}
                        style={{
                          display: 'inline-block',
                          position: 'relative',
                        }}
                        variants={
                          index % 2 === 0
                            ? navOptionHoverEven
                            : navOptionHoverOdd
                        }
                        // initial={{ color: '#000000' }}
                        // whileHover={{ color: aceOrange }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </TextAnimationWrapper>
                </StyledListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <StyledListItemButton>
                  <TextAnimationWrapper
                    initial="rest"
                    whileHover="hovered"
                    animate="rest"
                  >
                    {'Pricing'.split('').map((word, index) => (
                      <motion.span
                        key={index}
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                        }}
                        custom={1 * index}
                        variants={
                          index % 2 === 0
                            ? navOptionHoverEven
                            : navOptionHoverOdd
                        }
                      >
                        {word}
                      </motion.span>
                    ))}
                  </TextAnimationWrapper>
                </StyledListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <StyledListItemButton>
                  <TextAnimationWrapper
                    initial="rest"
                    whileHover="hovered"
                    animate="rest"
                  >
                    {'About'.split('').map((word, index) => (
                      <motion.span
                        key={index}
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                        }}
                        variants={
                          index % 2 === 0
                            ? navOptionHoverEven
                            : navOptionHoverOdd
                        }
                      >
                        {word}
                      </motion.span>
                    ))}
                  </TextAnimationWrapper>
                </StyledListItemButton>
              </ListItem>
              <ListItem disablePadding>
                {/* <ListItemButton
                  sx={{
                    borderRadius: '6.36px',
                    backgroundColor: aceOrange,
                    padding: '2px 14px 2px 14px',
                    color: 'white',
                  }}
                >

                  <ListItemText>
                    <motion.div  whileHover="hovered" variants={navOptionHover}>
                      Book Now!
                    </motion.div>
                  </ListItemText>
                </ListItemButton> */}

                <motion.button
                  style={{
                    borderRadius: '6.36px',
                    backgroundColor: aceOrange,
                    padding: '2px 14px 2px 14px',
                    color: 'white',
                    borderStyle: 'none',
                    fontFamily: 'new-hero',
                    fontSize: '12px',
                  }}
                  //   variants={navOptionHover}
                  initial="rest"
                  whileHover="hovered"
                  animate="rest"
                >
                  {'Book Now!'.split('').map((word, index) => (
                    <motion.span
                      key={index}
                      variants={
                        index % 2 === 0 ? navOptionHoverEven : navOptionHoverOdd
                      }
                      style={{ position: 'relative' }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.button>
              </ListItem>
            </List>
          )}
        </HeaderContainer>
      </Box>
    </ThemeProvider>
  );
};
