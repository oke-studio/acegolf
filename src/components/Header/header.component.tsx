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
  useMediaQuery,
  useTheme,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MotionSpanAnimated } from '../Helpers/motionSpanAnimation.component';
import { RNG } from '@/util/RNG';
import { useRouter } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderContainer = styled(Box)({
  display: 'flex',

  height: '60px',
  width: '100%',

  alignItems: 'center',
  padding: '0px 24px',
});

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  '&.MuiListItemButton-root:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  //   padding: '8px 0 8px 0',
}));

const NavMap = {
  '/menu': 'menu',
  '/pricing': 'pricing',
  '/events': 'events',
};

// console.log(theme.typography.body1);

interface NavOptions {
  label: string;
  to: string;
}

interface HeaderProps {
  navOptions?: NavOptions[];
  navBackgroundColor?: string;
  navTextColor?: string;
}

export const Header = ({
  navOptions = [
    { label: 'Menu', to: '/menu' },
    { label: 'How it Works', to: '/how-it-works' },
    { label: 'About', to: '/about' },
    { label: 'Parties & Events', to: '/events' },
  ],
  navBackgroundColor = '#171717',
  navTextColor = 'white',
}: HeaderProps) => {
  const { palette, typography, zIndex } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
  const [mobileDropDownEnabled, setMobileDropDownEnabled] =
    React.useState(false);
  const router = useRouter();

  function toggleDropDown() {
    setMobileDropDownEnabled(!mobileDropDownEnabled);
  }

  const HoverAnimation = {
    top: { to: '5px', from: '0px' },
    color: {
      to: palette.aceOrange,
      from: '#ffffff',
    },
    rotate: { to: RNG(9, 21), from: 0 },

    transition: {
      to: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeOut',
      },
      from: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  const RestAnimation = {
    top: { to: '-5px', from: '0px' },
    color: {
      to: palette.aceOrange,
      from: '#FFFFFF',
    },
    rotate: { to: RNG(-9, -21), from: 0 },

    transition: {
      to: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeOut',
      },
      from: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        fontFamily: 'new-hero',
        justifyContent: 'center',
        position: 'sticky',
        top: '0px',
        zIndex: zIndex.appBar,
        backgroundColor: 'transparent',
        mixBlendMode: 'difference',
      }}
    >
      <HeaderContainer
        sx={{
          justifyContent: isMobile ? 'space-between' : 'center',
          // backgroundColor: navBackgroundColor,
          color: navTextColor,
        }}
      >
        {isMobile && (
          <>
            <Button
              onClick={() => toggleDropDown()}
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              <Image
                src="/images/ace-header-logo.svg"
                alt="ace golf logo"
                width={50}
                height={50}
              />
            </Button>
            <MenuIcon />
          </>
        )}
        {!isMobile && (
          <List
            sx={{
              display: 'flex',
              justifyContent: 'centre',
              whiteSpace: 'nowrap',
              gap: '24px',
              overflow: 'scroll',
            }}
          >
            <ListItem disablePadding sx={{ paddingRight: '24px' }}>
              <Button
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                onClick={() => {
                  router.push('/');
                }}
              >
                <Image
                  src="/images/ace-header-logo.svg"
                  alt="ace golf logo"
                  width={50}
                  height={50}
                />
              </Button>
            </ListItem>
            {navOptions.map((navLink, i) => (
              <ListItem disablePadding key={i}>
                <StyledListItemButton
                  onClick={() => {
                    router.push(navLink.to);
                  }}
                >
                  <MotionSpanAnimated
                    label={navLink.label}
                    hoverAnimation={HoverAnimation}
                    restAnimation={RestAnimation}
                  />
                </StyledListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              {/* <motion.button
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
                // initial="rest"
                // whileHover="hovered"
                // animate="rest"
              >
                <MotionSpanAnimated label="Book Now!" />
              </motion.button> */}
              <Button
                // sx={{
                //   backgroundColor: 'black',

                //   border: `3px solid ${palette.aceOrange}`,
                //   ':hover': {
                //     backgroundColor: '#171717',
                //     transition: 'backgroundColor 0.5s ease-in-out',
                //     transitionDelay: '0.5s',
                //   },
                // }}
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                variant="navButton"
                onClick={() => {
                  router.push('/pricing');
                }}
              >
                {/* <MotionSpanAnimated
                  label="Book Now!"
                  hoverAnimation={HoverAnimation}
                  restAnimation={RestAnimation}
                /> */}
                Book Now!
              </Button>
            </ListItem>
          </List>
        )}
      </HeaderContainer>
    </Box>
  );
};
